// Impact additions: compact case-state KPIs with interactive split bar,
// stacked-area "Lopende cases" chart, and slim "doel bereikt" donut.

const TONE = {
  p: { bar: "rgb(7,148,85)",  soft: "rgb(220,250,230)", ink: "rgb(6,118,71)",  label: "Verzuim voorkomen" },
  c: { bar: "rgb(11,165,236)",soft: "rgb(224,242,254)", ink: "rgb(2,106,162)", label: "Terugkeer bespoedigen"   },
  u: { bar: "rgb(180,184,196)", soft: "rgb(240,240,243)", ink: "rgb(92,92,120)", label: "Onbekend" },
};

function CaseStateCard({ label, value, breakdown, accent }) {
  const [hover, setHover] = React.useState(null);
  const total = breakdown.p + breakdown.c + breakdown.u;
  const safeTotal = Math.max(1, total);
  const segs = [
    { k: "p", n: breakdown.p, tone: TONE.p },
    { k: "c", n: breakdown.c, tone: TONE.c },
    { k: "u", n: breakdown.u, tone: TONE.u },
  ];
  const a = accent || { bg: "white", border: C.border, label: C.mute };
  return (
    <Card padding={20} style={{ gap: 14, background: a.bg, border: `1px solid ${a.border}` }}>
      <div style={{ fontFamily: "Wallop, Inter", fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: a.label }}>
        {label}
      </div>
      <div style={{ display: "flex", gap: 18, alignItems: "stretch" }}>
        {/* Big number */}
        <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 40, lineHeight: "44px", letterSpacing: "-0.02em", color: C.ink, flexShrink: 0 }}>
          {value}
        </div>
        {/* Divider */}
        <div style={{ width: 1, background: a.border, alignSelf: "stretch" }} />
        {/* Bar + legend, stacked, beside the number */}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ position: "relative" }}>
            {total === 0 ? (
              <div style={{ height: 18, background: "rgba(0,0,0,0.05)", borderRadius: 5 }} />
            ) : (
              <div style={{ height: 18, background: "rgba(0,0,0,0.05)", borderRadius: 5, overflow: "hidden", display: "flex" }}>
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
                      fontSize: 10,
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

          {/* Always-visible compact legend */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {segs.map((s) => {
              const muted = s.n === 0;
              return (
                <span key={s.k} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontFamily: "Wallop, Inter", fontSize: 11.5, lineHeight: "15px",
                  color: muted ? C.mute : C.ink2, opacity: muted ? 0.55 : 1,
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: 2, background: s.tone.bar, flexShrink: 0 }} />
                  <span style={{ flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.tone.label}</span>
                  <span style={{ fontFamily: "Jeko, Inter", fontWeight: 600, color: muted ? C.mute : C.ink }}>{s.n}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

// Outcome palette for closed-case goal attainment
const OUTCOME = {
  reached:    { bar: "rgb(7,148,85)",   label: "Doel bereikt" },
  partial:    { bar: "rgb(245,176,3)",  label: "Gedeeltelijk" },
  notReached: { bar: "rgb(217,138,138)",label: "Niet bereikt" },
};

function GoalTypeRow({ tone, typeLabel, o }) {
  const total = Math.max(1, o.total);
  const reachedPct = Math.round((o.reached / total) * 100);
  const segs = [
    { k: "reached", n: o.reached },
    { k: "partial", n: o.partial },
    { k: "notReached", n: o.notReached },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, minWidth: 0, fontFamily: "Wallop, Inter", fontSize: 13, fontWeight: 600, color: C.ink2 }}>
          <span style={{ width: 8, height: 8, borderRadius: 2, background: tone.bar, flexShrink: 0 }} />
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{typeLabel}</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: 6, whiteSpace: "nowrap", flexShrink: 0 }}>
          <span style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 18, color: OUTCOME.reached.bar }}>{reachedPct}%</span>
          <span style={{ fontFamily: "Wallop, Inter", fontSize: 12, color: C.mute }}>bereikt · {o.total} gesloten</span>
        </span>
      </div>
      <div style={{ height: 16, background: "rgb(245,245,247)", borderRadius: 5, overflow: "hidden", display: "flex" }}>
        {segs.filter((s) => s.n > 0).map((s) => (
          <div key={s.k} title={`${OUTCOME[s.k].label}: ${s.n}`} style={{
            flex: s.n, background: OUTCOME[s.k].bar,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontFamily: "Jeko, Inter, system-ui", fontWeight: 600, fontSize: 10,
          }}>{s.n}</div>
        ))}
      </div>
    </div>
  );
}

function GoalReachedCard({ d }) {
  return (
    <Card title="Gesloten · doel bereikt"
      action={<span title="Alleen afgeronde trajecten tellen mee" style={{ color: C.mute, cursor: "help" }}>{Icon.info}</span>}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <GoalTypeRow tone={TONE.p} typeLabel="Verzuim voorkomen" o={d.p} />
        <GoalTypeRow tone={TONE.c} typeLabel="Terugkeer bespoedigen" o={d.c} />
      </div>
      {/* Outcome legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", paddingTop: 14, borderTop: `1px solid ${C.border}` }}>
        {Object.keys(OUTCOME).map((k) => (
          <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "Wallop, Inter", fontSize: 12, color: C.mute2 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: OUTCOME[k].bar }} />
            {OUTCOME[k].label}
          </span>
        ))}
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

// Wraps a card to render it visually de-emphasised (out of scope for the prototype).
function Dimmed({ children }) {
  return (
    <div style={{
      opacity: 0.5,
      filter: "saturate(0.4)",
      pointerEvents: "none",
      userSelect: "none",
    }}>
      {children}
    </div>
  );
}

Object.assign(window, { TONE, CaseStateCard, GoalReachedCard, StackedArea, LopendeCasesStacked, Dimmed });