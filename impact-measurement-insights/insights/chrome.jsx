// Sidebar + page chrome

const Icon = {
  grid: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6"/></svg>,
  cases: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 7h4M8 10h4M8 13h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="14.5" cy="14.5" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.6"/><path d="M13.5 14.5h2M14.5 13.5v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  calendar: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 8h14M7 2.5v3M13 2.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  trend: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 14l4-4 3 3 6-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6h4v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  help: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="M8 8a2 2 0 014 0c0 1-1 1.5-2 2v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="10" cy="14.5" r="0.8" fill="currentColor"/></svg>,
  send: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10l14-7-4 14-3-5-7-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
  download: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v9M4.5 7.5L8 11l3.5-3.5M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  cal16: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M2.5 7h11M5.5 2v3M10.5 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  chev: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l3.5 4L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  swap: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5h7M8 3l3 2-3 2M11 9H4M6 7l-3 2 3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  spark: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5l1.4 3.7L12 6.5l-3.6 1.3L7 11.5 5.6 7.8 2 6.5l3.6-1.3L7 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>,
  info: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/><path d="M7 6v3.5M7 4.5v0.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  arrow: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

function EmpowrLogo() {
  return (
    <div style={{ fontFamily: "Wallop, Inter, system-ui", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: C.ink, display: "flex", alignItems: "baseline" }}>
      <span>emp</span>
      <span style={{ color: C.cyan }}>o</span>
      <span>wr</span>
      <span style={{ color: C.cyan }}>.</span>
    </div>
  );
}

function Sidebar({ active = "Inzichten" }) {
  const items = [
    { name: "Overzicht Experts", icon: Icon.grid },
    { name: "Cases", icon: Icon.cases },
    { name: "Boekingen", icon: Icon.calendar },
    { name: "Inzichten", icon: Icon.trend },
  ];
  return (
    <aside style={{
      width: 256, minWidth: 256,
      background: C.bg,
      borderRight: `1px solid ${C.border}`,
      padding: "32px 20px",
      display: "flex", flexDirection: "column", gap: 28,
      position: "sticky", top: 0, alignSelf: "flex-start", height: "100vh",
    }}>
      <div style={{ padding: "0 8px" }}><EmpowrLogo /></div>

      <button style={{
        background: "white",
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: "10px 12px",
        display: "flex", alignItems: "center", gap: 10,
        cursor: "pointer", textAlign: "left",
        boxShadow: "0 1px 2px rgba(10,13,18,0.05)",
      }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F4E5F7", display: "flex", alignItems: "center", justifyContent: "center", color: "#7A2D8F", fontFamily: "Wallop", fontWeight: 700, fontSize: 11, border: "1px solid rgba(0,0,0,0.05)" }}>GGD</div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "Wallop, Inter", fontWeight: 600, fontSize: 14, color: C.ink }}>GGD Utrecht</span>
        </div>
        <span style={{ color: C.mute, transform: "rotate(90deg)" }}>{Icon.chev}</span>
      </button>

      <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {items.map((it) => {
          const isActive = it.name === active;
          return (
            <a key={it.name} href="#" style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 12px",
              borderRadius: 10,
              fontFamily: "Wallop, Inter", fontSize: 14, fontWeight: isActive ? 600 : 500,
              color: isActive ? C.ink : C.mute2,
              background: isActive ? "rgba(11,165,236,0.06)" : "transparent",
              textDecoration: "none",
              borderLeft: isActive ? `2px solid ${C.cyan}` : "2px solid transparent",
            }}>
              <span style={{ color: isActive ? C.cyan : C.mute }}>{it.icon}</span>
              {it.name}
            </a>
          );
        })}
      </nav>

      <div style={{ flex: 1 }} />

      <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {[
          { name: "Help Center", icon: Icon.help },
          { name: "Contact Support", icon: Icon.send },
        ].map((it) => (
          <a key={it.name} href="#" style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 12px", borderRadius: 10,
            fontFamily: "Wallop, Inter", fontSize: 14, color: C.mute2, textDecoration: "none",
          }}>
            <span style={{ color: C.mute }}>{it.icon}</span>
            {it.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function PageHeader({ range, setRange }) {
  const ranges = [
    { id: "30d", label: "30 dagen" },
    { id: "90d", label: "90 dagen" },
    { id: "12m", label: "12 maanden" },
    { id: "all", label: "Alle tijd" },
  ];
  return (
    <header style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 32, flexWrap: "wrap" }}>
      <div>
        <div style={{ fontFamily: "Wallop, Inter", fontSize: 13, color: C.mute, marginBottom: 6, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 500 }}>Dashboard</div>
        <h1 style={{ fontFamily: "Jeko, Inter, system-ui", fontWeight: 700, fontSize: 40, lineHeight: "44px", letterSpacing: "-0.025em", color: C.ink, margin: 0 }}>Inzichten</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "inline-flex", padding: 4, background: "white", border: `1px solid ${C.border}`, borderRadius: 12, gap: 2 }}>
          {ranges.map((r) => (
            <button key={r.id} onClick={() => setRange(r.id)} style={{
              border: 0, background: range === r.id ? C.ink : "transparent",
              color: range === r.id ? "white" : C.mute2,
              padding: "8px 14px", borderRadius: 8,
              fontFamily: "Wallop, Inter", fontSize: 13, fontWeight: 500, cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all .15s",
            }}>{r.label}</button>
          ))}
        </div>
        <button style={{
          background: "white", border: `1px solid ${C.border}`, color: C.ink2,
          borderRadius: 12, padding: "10px 16px", fontFamily: "Wallop, Inter", fontSize: 14, fontWeight: 500,
          display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer",
          whiteSpace: "nowrap",
          boxShadow: "0 1px 2px rgba(10,13,18,0.05)",
        }}>{Icon.cal16} mei '25 — apr '26</button>
        <button style={{
          background: C.ink, color: "white", border: 0, borderRadius: 12,
          padding: "12px 20px", fontFamily: "Wallop, Inter", fontSize: 14, fontWeight: 600,
          display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer",
          whiteSpace: "nowrap",
          boxShadow: "0 1px 2px rgba(10,13,18,0.18)",
        }}>{Icon.download} Export</button>
      </div>
    </header>
  );
}

function SectionTitle({ kicker, title, subtitle, action }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
      <div>
        {kicker && <div style={{ fontFamily: "Wallop, Inter", fontSize: 12, color: C.cyan, marginBottom: 6, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>{kicker}</div>}
        <h2 style={{ fontFamily: "Jeko, Inter, system-ui", fontWeight: 700, fontSize: 24, lineHeight: "30px", letterSpacing: "-0.02em", color: C.ink, margin: 0 }}>{title}</h2>
        {subtitle && <p style={{ fontFamily: "Wallop, Inter", fontSize: 14, color: C.mute2, margin: "8px 0 0", maxWidth: 560 }}>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

Object.assign(window, { Icon, EmpowrLogo, Sidebar, PageHeader, SectionTitle });
