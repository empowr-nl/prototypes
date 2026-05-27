import { chromium } from 'playwright';
import { WebClient } from '@slack/web-api';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const folders = JSON.parse(process.env.CHANGED);
const base = process.env.PAGES_BASE;
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);
const channel = process.env.SLACK_CHANNEL_ID;
const commitUrl = process.env.COMMIT_URL;

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const dir = mkdtempSync(join(tmpdir(), 'shots-'));

for (const folder of folders) {
  const url = `${base}/${folder}/`;
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 });
  const file = join(dir, `${folder}.png`);
  await page.screenshot({ path: file, fullPage: false });
  await page.close();

  await slack.files.uploadV2({
    channel_id: channel,
    file,
    filename: `${folder}.png`,
    initial_comment: `:art: *${folder}* prototype updated — <${url}|open> · <${commitUrl}|commit>`,
  });
}

await browser.close();
