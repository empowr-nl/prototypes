// Main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "curatiefAccent": "#0BA5EC"
}/*EDITMODE-END*/;

const CURATIEF_PALETTES = {
  "#0BA5EC": { soft: "rgb(224,242,254)", ink: "rgb(2,106,162)" },
  "#6172F3": { soft: "rgb(238,244,255)", ink: "rgb(53,56,205)" },
  "#EF6820": { soft: "rgb(254,246,238)", ink: "rgb(185,56,21)" },
  "#7F56D9": { soft: "rgb(244,235,255)", ink: "rgb(83,56,158)" },
};

function App() {
  const d = window.INSIGHTS_DATA;
  const [range, setRange] = React.useState("30d");
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const palette = CURATIEF_PALETTES[t.curatiefAccent] || CURATIEF_PALETTES["#0BA5EC"];
    window.C.cyan = t.curatiefAccent;
    window.C.cyanSoft = palette.soft;
    window.C.cyanInk = palette.ink;
    if (window.TONE) {
      window.TONE.c.bar = t.curatiefAccent;
      window.TONE.c.soft = palette.soft;
      window.TONE.c.ink = palette.ink;
    }
  }, [t.curatiefAccent]);

  return (
    <div key={t.curatiefAccent} style={{ display: "flex", minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: "Wallop, Inter, system-ui" }}>
      <Sidebar active="Inzichten" />
      <main data-screen-label="Inzichten" style={{ flex: 1, minWidth: 0, padding: "32px 40px 80px", maxWidth: 1480 }}>
        <PageHeader range={range} setRange={setRange} />

        {/* Cases row — 3 state KPIs (small) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
          <CaseStateCard label="Geopend" value={d.cases.opened.total} breakdown={d.cases.opened}
            accent={{ bg: "rgb(239,246,255)", border: "rgb(213,229,251)", label: "rgb(37,99,180)" }} />
          <CaseStateCard label="Lopend"  value={d.cases.running.total} breakdown={d.cases.running}
            accent={{ bg: "rgb(255,250,235)", border: "rgb(248,233,193)", label: "rgb(180,131,10)" }} />
          <CaseStateCard label="Gesloten" value={d.cases.closed.total} breakdown={d.cases.closed}
            accent={{ bg: "rgb(240,250,244)", border: "rgb(208,236,219)", label: "rgb(20,120,75)" }} />
        </div>

        {/* Doel bereikt + Alle Cases row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <Dimmed><AlleCasesCard d={d} /></Dimmed>
          <GoalReachedCard d={d.closedGoal} />
        </div>

        {/* Lopende cases — full width, stacked area */}
        <div style={{ marginBottom: 16 }}>
          <LopendeCasesStacked data={d.runningOverTime} current={d.cases.running.total} />
        </div>

        {/* Remaining operational layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Dimmed><UitgavenCard d={d} /></Dimmed>
          <Dimmed><BoekingenCard d={d} /></Dimmed>
          <StatsBoekersCard d={d} />
          <Dimmed><StatsExpertsCard d={d} /></Dimmed>
        </div>
      </main>

      <TweaksPanel>
        <TweakSection label="Color" />
        <TweakColor label="Terugkeer-accent"
          value={t.curatiefAccent}
          options={["#0BA5EC", "#6172F3", "#EF6820", "#7F56D9"]}
          onChange={(v) => setTweak("curatiefAccent", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
