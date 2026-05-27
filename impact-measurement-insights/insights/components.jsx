// Reusable card and chart pieces. Globalized via window.* at bottom.

const C = {
  bg: "rgb(252,250,246)",
  cardBg: "rgb(255,255,255)",
  border: "rgb(240,240,243)",
  borderSoft: "rgb(248,248,250)",
  ink: "rgb(3,3,46)",
  ink2: "rgb(16,24,40)",
  mute: "rgb(117,117,141)",
  mute2: "rgb(92,92,120)",
  hairline: "rgb(230,230,234)",
  // accents
  cyan: "rgb(11,165,236)",
  cyanSoft: "rgb(224,242,254)",
  cyanInk: "rgb(2,106,162)",
  green: "rgb(7,148,85)",
  greenSoft: "rgb(220,250,230)",
  greenInk: "rgb(6,118,71)",
  amber: "rgb(245,176,3)",
  amberSoft: "rgb(254,247,230)",
  red: "rgb(217,45,32)",
  redSoft: "rgb(254,228,226)",
  redInk: "rgb(180,35,24)",
};

function Card({ title, action, children, style, padding = 24, id }) {
  return (
    <section
      data-card-id={id}
      style={{
        background: C.cardBg,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        minWidth: 0,
        boxShadow: "0 1px 2px rgba(10,13,18,0.04)",
        ...style,
      }}
    >
      {(title || action) && (
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          {title && (
            <h3 style={{ fontFamily: "Wallop, Inter, system-ui", fontWeight: 700, fontSize: 15, lineHeight: "20px", color: C.ink2, margin: 0, letterSpacing: "-0.01em" }}>{title}</h3>
          )}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

function Stat({ label, value, sub, color = C.ink, sublabelColor }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ fontFamily: "Wallop, Inter, system-ui", fontWeight: 500, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: C.mute }}>{label}</div>
      <div style={{ fontFamily: "Jeko, Inter, system-ui", fontWeight: 700, fontSize: 32, lineHeight: "38px", letterSpacing: "-0.02em", color }}>{value}</div>
      {sub && <div style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 13, color: sublabelColor || C.mute2 }}>{sub}</div>}
    </div>
  );
}

function Pill({ color, label, dotted = false, style }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "Wallop, Inter, system-ui", fontSize: 13, color: C.ink2, ...style }}>
      <span style={{ width: 10, height: 10, borderRadius: 999, background: dotted ? "transparent" : color, border: dotted ? `2px dashed ${color}` : "none" }} />
      {label}
    </span>
  );
}

function Avatar({ initials, color = "#E7D6FF", size = 32 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: color, color: C.ink, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Wallop, Inter, system-ui", fontWeight: 600, fontSize: size * 0.36 }}>
      {initials}
    </div>
  );
}

function Bar({ value, max, color = C.cyan, height = 6, bg = "rgb(240,240,243)" }) {
  const w = Math.max(0, Math.min(100, (value / Math.max(1, max)) * 100));
  return (
    <div style={{ width: "100%", height, background: bg, borderRadius: 999, overflow: "hidden" }}>
      <div style={{ width: `${w}%`, height: "100%", background: color, borderRadius: 999, transition: "width .4s" }} />
    </div>
  );
}

// Stacked horizontal bar showing preventief vs curatief share
function SplitBar({ p, c, height = 12 }) {
  const total = Math.max(1, p + c);
  const pp = (p / total) * 100;
  return (
    <div style={{ width: "100%", height, background: "rgb(245,245,247)", borderRadius: 999, overflow: "hidden", display: "flex" }}>
      <div style={{ width: `${pp}%`, background: C.green, height: "100%" }} />
      <div style={{ width: `${100 - pp}%`, background: C.cyan, height: "100%" }} />
    </div>
  );
}

// Donut chart for preventief vs curatief
function Donut({ p, c, size = 160, thickness = 22 }) {
  const total = Math.max(1, p + c);
  const r = (size - thickness) / 2;
  const cir = 2 * Math.PI * r;
  const pLen = (p / total) * cir;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={C.cyan} strokeWidth={thickness} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={C.green} strokeWidth={thickness}
        strokeDasharray={`${pLen} ${cir}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="48%" textAnchor="middle" style={{ fontFamily: "Jeko, Inter, system-ui", fontWeight: 700, fontSize: 28, fill: C.ink }}>{p + c}</text>
      <text x="50%" y="62%" textAnchor="middle" style={{ fontFamily: "Wallop, Inter, system-ui", fontWeight: 500, fontSize: 11, fill: C.mute, letterSpacing: "0.1em", textTransform: "uppercase" }}>cases</text>
    </svg>
  );
}

// Smooth area line chart
function AreaChart({ series, height = 200, color = C.cyan, fill = "rgba(11,165,236,0.12)", yLabel, accessor = (d) => d.v, gridSteps = 4 }) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const measure = () => { if (ref.current) setW(ref.current.getBoundingClientRect().width); };
    measure();
    window.addEventListener("resize", measure);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(ref.current);
    return () => { window.removeEventListener("resize", measure); if (ro) ro.disconnect(); };
  }, []);

  const padL = 36, padR = 12, padT = 8, padB = 24;
  const innerW = Math.max(50, w - padL - padR);
  const innerH = height - padT - padB;
  const vals = series.map(accessor);
  const max = Math.max(...vals, 1);
  const yMax = Math.ceil(max / gridSteps) * gridSteps;
  const x = (i) => padL + (innerW * i) / Math.max(1, series.length - 1);
  const y = (v) => padT + innerH - (innerH * v) / yMax;
  const path = series.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(accessor(d))}`).join(" ");
  const area = `${path} L ${x(series.length - 1)} ${padT + innerH} L ${x(0)} ${padT + innerH} Z`;
  const gridYs = Array.from({ length: gridSteps + 1 }, (_, i) => (yMax / gridSteps) * i);

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg width={w} height={height} style={{ display: "block" }}>
        {gridYs.map((g, i) => (
          <g key={i}>
            <line x1={padL} x2={padL + innerW} y1={y(g)} y2={y(g)} stroke={C.borderSoft} strokeWidth={1} />
            <text x={padL - 8} y={y(g) + 4} textAnchor="end" style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 11, fill: C.mute }}>{yLabel ? yLabel(g) : g}</text>
          </g>
        ))}
        <path d={area} fill={fill} />
        <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        {series.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(accessor(d))} r={2.5} fill={color} />
        ))}
        {series.map((d, i) => (
          <text key={i} x={x(i)} y={height - 4} textAnchor="middle" style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 11, fill: C.mute }}>{d.d}</text>
        ))}
      </svg>
    </div>
  );
}

// Two-series line chart (used for Boekingen: klikgesprek + sessies)
function DualLine({ series, height = 200, colors = [C.amber, C.cyan], keys = ["k", "s"] }) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const measure = () => { if (ref.current) setW(ref.current.getBoundingClientRect().width); };
    measure();
    window.addEventListener("resize", measure);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(ref.current);
    return () => { window.removeEventListener("resize", measure); if (ro) ro.disconnect(); };
  }, []);
  const padL = 28, padR = 12, padT = 8, padB = 24;
  const innerW = Math.max(50, w - padL - padR);
  const innerH = height - padT - padB;
  const max = Math.max(...series.flatMap((d) => keys.map((k) => d[k])), 1);
  const yMax = Math.ceil(max / 4) * 4 || 4;
  const x = (i) => padL + (innerW * i) / Math.max(1, series.length - 1);
  const y = (v) => padT + innerH - (innerH * v) / yMax;
  const gridYs = Array.from({ length: 5 }, (_, i) => (yMax / 4) * i);
  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg width={w} height={height} style={{ display: "block" }}>
        {gridYs.map((g, i) => (
          <g key={i}>
            <line x1={padL} x2={padL + innerW} y1={y(g)} y2={y(g)} stroke={C.borderSoft} strokeWidth={1} />
            <text x={padL - 6} y={y(g) + 4} textAnchor="end" style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 11, fill: C.mute }}>{g}</text>
          </g>
        ))}
        {keys.map((k, ki) => {
          const path = series.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(d[k])}`).join(" ");
          return <path key={k} d={path} fill="none" stroke={colors[ki]} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />;
        })}
        {series.map((d, i) => keys.map((k, ki) => (
          <circle key={k + i} cx={x(i)} cy={y(d[k])} r={2.5} fill={colors[ki]} />
        )))}
        {series.map((d, i) => (
          <text key={i} x={x(i)} y={height - 4} textAnchor="middle" style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 11, fill: C.mute }}>{d.d}</text>
        ))}
      </svg>
    </div>
  );
}

// Stacked column chart for monthly preventief vs curatief
function MonthlyStacked({ data, onHover }) {
  const [hover, setHover] = React.useState(null);
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const measure = () => { if (ref.current) setW(ref.current.getBoundingClientRect().width); };
    measure();
    window.addEventListener("resize", measure);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(ref.current);
    return () => { window.removeEventListener("resize", measure); if (ro) ro.disconnect(); };
  }, []);
  const height = 220;
  const padL = 32, padR = 12, padT = 12, padB = 36;
  const innerW = Math.max(50, w - padL - padR);
  const innerH = height - padT - padB;
  const max = Math.max(...data.map((d) => d.p + d.c), 1);
  const yMax = Math.ceil(max / 2) * 2 || 2;
  const colW = innerW / data.length;
  const barW = Math.min(28, colW * 0.55);
  const y = (v) => padT + innerH - (innerH * v) / yMax;
  const gridYs = Array.from({ length: 5 }, (_, i) => (yMax / 4) * i);

  return (
    <div ref={ref} style={{ width: "100%", position: "relative" }}>
      <svg width={w} height={height} style={{ display: "block" }}>
        {gridYs.map((g, i) => (
          <g key={i}>
            <line x1={padL} x2={padL + innerW} y1={y(g)} y2={y(g)} stroke={C.borderSoft} strokeWidth={1} />
            <text x={padL - 8} y={y(g) + 4} textAnchor="end" style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 11, fill: C.mute }}>{Math.round(g)}</text>
          </g>
        ))}
        {data.map((d, i) => {
          const cx = padL + colW * i + colW / 2;
          const total = d.p + d.c;
          const hC = (innerH * d.c) / yMax;
          const hP = (innerH * d.p) / yMax;
          const yC = padT + innerH - hC;
          const yP = yC - hP;
          const isHover = hover === i;
          return (
            <g key={i} onMouseEnter={() => { setHover(i); onHover && onHover(d); }} onMouseLeave={() => { setHover(null); onHover && onHover(null); }} style={{ cursor: "pointer" }}>
              <rect x={cx - barW / 2 - 6} y={padT} width={barW + 12} height={innerH} fill="transparent" />
              {d.c > 0 && (
                <rect x={cx - barW / 2} y={yC} width={barW} height={hC} rx={3}
                  fill={C.cyan} opacity={isHover ? 1 : 0.95} />
              )}
              {d.p > 0 && (
                <rect x={cx - barW / 2} y={yP} width={barW} height={hP} rx={3}
                  fill={C.green} opacity={isHover ? 1 : 0.95} />
              )}
              <text x={cx} y={height - 18} textAnchor="middle" style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 11, fill: isHover ? C.ink : C.mute, fontWeight: isHover ? 600 : 400 }}>{d.m}</text>
              {total > 0 && (
                <text x={cx} y={height - 4} textAnchor="middle" style={{ fontFamily: "Wallop, Inter, system-ui", fontSize: 11, fill: C.mute2, fontWeight: 500 }}>{total}</text>
              )}
            </g>
          );
        })}
      </svg>
      {hover !== null && (
        <div style={{
          position: "absolute",
          left: padL + (innerW / data.length) * hover + (innerW / data.length) / 2,
          top: 0,
          transform: "translate(-50%, -100%)",
          background: C.ink, color: "white",
          padding: "8px 12px", borderRadius: 8,
          fontFamily: "Wallop, Inter, system-ui", fontSize: 12,
          whiteSpace: "nowrap",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          pointerEvents: "none",
        }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{data[hover].m}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 8, height: 8, background: C.green, borderRadius: 2 }} />Preventief · {data[hover].p}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 8, height: 8, background: C.cyan, borderRadius: 2 }} />Curatief · {data[hover].c}</div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { C, Card, Stat, Pill, Avatar, Bar, SplitBar, Donut, AreaChart, DualLine, MonthlyStacked });
