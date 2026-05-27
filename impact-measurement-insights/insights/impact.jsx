// Impact additions: compact case-state KPIs with interactive split bar,
// stacked-area "Lopende cases" chart, and slim "doel bereikt" donut.

const TONE = {
  p: { bar: "rgb(7,148,85)",  soft: "rgb(220,250,230)", ink: "rgb(6,118,71)",  label: "Verzuim voorkomen" },
  c: { bar: "rgb(11,165,236)",soft: "rgb(224,242,254)", ink: "rgb(2,106,162)", label: "Terugkeer bespoedigen"   },
  u: { bar: "rgb(180,184,196)", soft: "rgb(240,240,243)", ink: "rgb(92,92,120)", label: "Onbekend" },
};

function CaseStateCard({ label, value, breakdown }) {
  const [hover, setHover] = React.useState(null);
  const total = breakdown.p + breakdown.c + breakdown.u;
  const safeTotal = Math.max(1, total);
  const segs = [
    { k: "p", n: breakdown.p, tone: TONE.p },
    { k: "c", n: breakdown.c, tone: TONE.c },
    { k: "u", n: breakdown.u, tone: TONE.u },
  ];
  return (
    <Card padding={20} style={{ gap: 14 }}>
      <div style={{ fontFamily: "Wallop, Inter", fontWeight: 500, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: C.mute }}>
        {label}
      </div>
      <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 36, lineHeight: "40px", letterSpacing: "-0.02em", color: C.ink }}>
        {value}
      </div>
      <div style={{ position: "relative" }}>
        {total === 0 ? (
          <div style={{ height: 24, background: "rgb(245,245,247)", borderRadius: 6 }} />
        ) : (
          <div style={{ height: 24, background: "rgb(245,245,247)", borderRadius: 6, overflow: "hidden", display: "flex" }}>
            {segs.filter((s) => s.n > 0).map((s) => (
              <div
                key={s.k}
                onMouseEnter={() => setHover(s.k)}
                onMouseLeave={() => setHover(null)}
                style={{
                  flex: s.n,
                  background: s.tone.bar,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white",
                  fontFamily: "Jeko, Inter, system-ui",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.02em",
                  cursor: "default",
                  opacity: hover && hover !== s.k ? 0.45 : 1,
                  transition: "opacity .15s",
                }}
              >
                {s.n}
              </div>
            ))}
          </div>
        )}
        {hover && total > 0 && (
          <div style={{
            position: "absolute",
            left: "50%", top: -8,
            transform: "translate(-50%, -100%)",
            background: C.ink, color: "white",
            padding: "6px 10px", borderRadius: 8,
            fontFamily: "Wallop, Inter", fontSize: 12, fontWeight: 500,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
            pointerEvents: "none",
            zIndex: 5,
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: TONE[hover].bar }} />
              {TONE[hover].label} · <strong>{breakdown[hover]}</strong> van {total} ({Math.round((breakdown[hover] / safeTotal) * 100)}%)
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}

function GoalReachedCard({ d }) {
  const total = Math.max(1, d.total);
  const pct = Math.round((d.reached / total) * 100);
  const cir = 2 * Math.PI * 52;
  return (
    <Card title="Gesloten · doel bereikt"
      action={<span title="Op basis van gesloten trajecten" style={{ color: C.mute, cursor: "help" }}>{Icon.info}</span>}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <svg width="140" height="140" viewBox="0 0 140 140" style={{ flexShrink: 0 }}>
          <circle cx="70" cy="70" r="56" stroke="rgb(245,245,247)" strokeWidth="16" fill="none" />
          <circle cx="70" cy="70" r="56" stroke={TONE.p.bar} strokeWidth="16" fill="none"
            strokeDasharray={`${(pct / 100) * (2 * Math.PI * 56)} ${2 * Math.PI * 56}`}
            strokeLinecap="round"
            transform="rotate(-90 70 70)" />
          <text x="70" y="76" textAnchor="middle" style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 30, fill: TONE.p.ink }}>{pct}%</text>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
          <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 28, lineHeight: "32px", color: C.ink }}>
            {d.reached} <span style={{ color: C.mute, fontFamily: "Wallop, Inter", fontWeight: 500, fontSize: 16 }}>van {d.total}</span>
          </div>
          <div style={{ fontFamily: "Wallop, Inter", fontSize: 14, color: C.mute2, lineHeight: "20px" }}>
            gesloten trajecten bereikten het beoogde doel
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4 }}>
            <Pill color={TONE.p.bar} label={`${d.reached} bereikt`} />
            <Pill color={C.mute} label={`${d.total - d.reached} niet bereikt`} />
          </div>
        </div>
      </div>
    </Card>
  );
}

// Stacked area chart: layers add up to a total at each x point.
// `keys` is rendered bottom-to-top; pass [{k:'p',tone:...},{k:'c',...},{k:'u',...}].
function StackedArea({ series, layers, height = 260, yLabelFmt }) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  const [hoverIdx, setHoverIdx] = React.useState(null);

  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const measure = () => { if (ref.current) setW(ref.current.getBoundingClientRect().width); };
    measure();
    window.addEventListener("resize", measure);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(ref.current);
    return () => { window.removeEventListener("resize", measure); if (ro) ro.disconnect(); };
  }, []);

  const padL = 40, padR = 16, padT = 16, padB = 28;
  const innerW = Math.max(50, w - padL - padR);
  const innerH = height - padT - padB;
  const totals = series.map((d) => layers.reduce((a, L) => a + (d[L.k] || 0), 0));
  const max = Math.max(...totals, 1);
  const yMax = Math.ceil(max / 4) * 4 || 4;
  const x = (i) => padL + (innerW * i) / Math.max(1, series.length - 1);
  const y = (v) => padT + innerH - (innerH * v) / yMax;
  const gridYs = Array.from({ length: 5 }, (_, i) => (yMax / 4) * i);

  // Build cumulative stacks: for each layer, top = sum of layers up to and including it; bottom = sum of layers below
  const layerPaths = layers.map((L, li) => {
    const top = series.map((d) => layers.slice(0, li + 1).reduce((a, X) => a + (d[X.k] || 0), 0));
    const bot = series.map((d) => layers.slice(0, li).reduce((a, X) => a + (d[X.k] || 0), 0));
    const topPath = series.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(top[i])}`).join(" ");
    const botPath = series.map((d, i) => `L ${x(series.length - 1 - i)} ${y(bot[series.length - 1 - i])}`).join(" ");
    return topPath + " " + botPath + " Z";
  });

  const linePaths = layers.map((L, li) => {
    const top = series.map((d) => layers.slice(0, li + 1).reduce((a, X) => a + (d[X.k] || 0), 0));
    return series.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(top[i])}`).join(" ");
  });

  return (
    <div ref={ref} style={{ width: "100%", position: "relative" }}>
      <svg width={w} height={height} style={{ display: "block" }}
        onMouseLeave={() => setHoverIdx(null)}>
        {gridYs.map((g, i) => (
          <g key={i}>
            <line x1={padL} x2={padL + innerW} y1={y(g)} y2={y(g)} stroke={C.borderSoft} strokeWidth={1} />
            <text x={padL - 8} y={y(g) + 4} textAnchor="end" style={{ fontFamily: "Wallop, Inter", fontSize: 11, fill: C.mute }}>{yLabelFmt ? yLabelFmt(g) : Math.round(g)}</text>
          </g>
        ))}
        {/* Stacked areas */}
        {layerPaths.map((p, i) => (
          <path key={layers[i].k} d={p} fill={layers[i].tone.bar} opacity={0.85} />
        ))}
        {/* Top edge of each layer */}
        {linePaths.map((p, i) => (
          <path key={"l" + layers[i].k} d={p} fill="none" stroke={layers[i].tone.bar} strokeWidth={1.5} />
        ))}
        {/* Hover hit zones */}
        {series.map((d, i) => (
          <rect key={"h" + i}
            x={x(i) - (innerW / series.length) / 2}
            y={padT}
            width={innerW / series.length}
            height={innerH}
            fill="transparent"
            onMouseEnter={() => setHoverIdx(i)}
          />
        ))}
        {/* Hover line + dots */}
        {hoverIdx !== null && (
          <g>
            <line x1={x(hoverIdx)} x2={x(hoverIdx)} y1={padT} y2={padT + innerH} stroke={C.ink} strokeDasharray="3 3" strokeWidth={1} opacity={0.4} />
            {layers.map((L, li) => {
              const top = layers.slice(0, li + 1).reduce((a, X) => a + (series[hoverIdx][X.k] || 0), 0);
              return <circle key={L.k} cx={x(hoverIdx)} cy={y(top)} r={3} fill="white" stroke={L.tone.bar} strokeWidth={2} />;
            })}
          </g>
        )}
        {/* X labels */}
        {series.map((d, i) => (
          <text key={"x" + i} x={x(i)} y={height - 8} textAnchor="middle"
            style={{ fontFamily: "Wallop, Inter", fontSize: 11, fill: hoverIdx === i ? C.ink : C.mute, fontWeight: hoverIdx === i ? 600 : 400 }}>
            {d.m}
          </text>
        ))}
      </svg>
      {hoverIdx !== null && (
        <div style={{
          position: "absolute",
          left: Math.min(w - 180, Math.max(8, x(hoverIdx) + 12)),
          top: 12,
          background: C.ink, color: "white",
          padding: "10px 12px", borderRadius: 10,
          fontFamily: "Wallop, Inter", fontSize: 12,
          minWidth: 160,
          boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
          pointerEvents: "none",
        }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{series[hoverIdx].m}</div>
          {[...layers].reverse().map((L) => (
            <div key={L.k} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "2px 0" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: L.tone.bar }} />
                {L.tone.label}
              </span>
              <span style={{ fontFamily: "Jeko, Inter", fontWeight: 600 }}>{series[hoverIdx][L.k] || 0}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingTop: 6, marginTop: 4, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <span style={{ color: "rgba(255,255,255,0.7)" }}>Totaal</span>
            <span style={{ fontFamily: "Jeko, Inter", fontWeight: 700 }}>{layers.reduce((a, L) => a + (series[hoverIdx][L.k] || 0), 0)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function LopendeCasesStacked({ data, current }) {
  const layers = [
    { k: "p", tone: TONE.p },
    { k: "c", tone: TONE.c },
    { k: "u", tone: TONE.u },
  ];
  const last = data[data.length - 1] || { p: 0, c: 0, u: 0 };
  const lastTotal = last.p + last.c + last.u;
  return (
    <Card title="Lopende cases"
      action={
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Wallop, Inter", fontSize: 13 }}>
          <Pill color={TONE.p.bar} label="Verzuim voorkomen" />
          <Pill color={TONE.c.bar} label="Terugkeer bespoedigen" />
          <Pill color={TONE.u.bar} label="Onbekend" />
        </div>
      }>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 36, lineHeight: "40px", color: C.ink }}>{current ?? lastTotal}</div>
        <div style={{ fontFamily: "Wallop, Inter", fontSize: 13, color: C.mute2 }}>op {data[data.length - 1].m}</div>
      </div>
      <StackedArea series={data} layers={layers} />
    </Card>
  );
}

Object.assign(window, { TONE, CaseStateCard, GoalReachedCard, StackedArea, LopendeCasesStacked });
