// Existing operational cards: AlleCases, LopendeCases, Uitgaven, Boekingen, Statistieken

function AlleCasesCard({ d }) {
  return (
    <Card title="Alle Cases">
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "Wallop, Inter", fontSize: 13, color: C.mute2 }}>Gem. looptijd</div>
        <div style={{ fontFamily: "Wallop, Inter", fontSize: 14, color: C.ink2, fontWeight: 600 }}>{d.avgRuntime}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontFamily: "Wallop, Inter", fontWeight: 600, fontSize: 13, color: C.ink2 }}>Belangrijkste hulpthema's</div>
        {d.topThemes.map((t) => (
          <div key={t.name} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 12, alignItems: "center" }}>
            <span style={{ fontFamily: "Wallop, Inter", fontSize: 13, color: C.ink2 }}>{t.name}</span>
            <Bar value={t.value} max={1} color={C.cyan} bg="rgb(240,240,243)" />
          </div>
        ))}
      </div>
    </Card>
  );
}

function LopendeCasesCard({ d }) {
  return (
    <Card title="Lopende cases" action={<span style={{ fontFamily: "Wallop, Inter", fontSize: 12, color: C.mute }}>Aantal in tijd</span>}>
      <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 32, color: C.ink, marginBottom: -4 }}>{d.runningCasesSeries[d.runningCasesSeries.length - 1].v}</div>
      <AreaChart series={d.runningCasesSeries} color={C.cyan} fill="rgba(11,165,236,0.10)" yLabel={(v) => v} />
    </Card>
  );
}

function UitgavenCard({ d }) {
  return (
    <Card title="Uitgaven">
      <div style={{ display: "flex", gap: 32 }}>
        <div>
          <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 30, color: C.ink }}>€{d.spending.total.toLocaleString("nl-NL")}</div>
          <div style={{ fontFamily: "Wallop, Inter", fontSize: 13, color: C.mute }}>Over {d.spending.cases} cases</div>
        </div>
        <div>
          <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 30, color: C.ink }}>€{d.spending.perCase}</div>
          <div style={{ fontFamily: "Wallop, Inter", fontSize: 13, color: C.mute }}>Gem. per case</div>
        </div>
      </div>
      <AreaChart series={d.spendingSeries} color={C.cyan} fill="rgba(11,165,236,0.10)"
        yLabel={(v) => `€${v >= 1000 ? (v / 1000).toFixed(1).replace(".0", "") + "k" : v}`} />
    </Card>
  );
}

function BoekingenCard({ d }) {
  return (
    <Card title="Boekingen" action={
      <div style={{ display: "flex", gap: 14 }}>
        <Pill color={C.amber} label="Klikgesprek" />
        <Pill color={C.cyan} label="Sessies" />
      </div>
    }>
      <div>
        <div style={{ fontFamily: "Jeko, Inter", fontWeight: 700, fontSize: 30, color: C.ink }}>{d.bookings.total}</div>
        <div style={{ fontFamily: "Wallop, Inter", fontSize: 13, color: C.mute }}>Over {d.bookings.cases} cases</div>
      </div>
      <DualLine series={d.bookingsSeries} />
    </Card>
  );
}

function StatsBoekersCard({ d }) {
  const max = Math.max(...d.bookers.map((b) => b.cases || 0), 1);
  return (
    <Card title="Statistieken per boeker">
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 0.8fr", gap: 12, fontFamily: "Wallop, Inter", fontSize: 12, color: C.mute, textTransform: "uppercase", letterSpacing: "0.06em", paddingBottom: 8, borderBottom: `1px solid ${C.border}` }}>
        <span>Gestart door</span><span>Aantal cases</span><span style={{ textAlign: "right" }}>Uitgaven</span>
      </div>
      {d.bookers.map((b) => (
        <div key={b.name} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 0.8fr", gap: 12, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar initials={b.initials} color={b.color} size={28} />
            <span style={{ fontFamily: "Wallop, Inter", fontSize: 14, color: C.ink }}>{b.name}</span>
          </div>
          {b.invited ? (
            <span style={{ display: "inline-block", padding: "3px 10px", border: `1px solid ${C.amber}`, color: "rgb(196,141,2)", background: C.amberSoft, borderRadius: 999, fontFamily: "Wallop, Inter", fontSize: 12, fontWeight: 500, width: "fit-content" }}>Uitgenodigd</span>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 100 }}><Bar value={b.cases || 0} max={max} color={C.cyan} /></div>
              <span style={{ fontFamily: "Jeko, Inter", fontWeight: 600, fontSize: 14, color: C.ink, minWidth: 14 }}>{b.cases ?? 0}</span>
            </div>
          )}
          <span style={{ fontFamily: "Jeko, Inter", fontWeight: 600, fontSize: 14, color: b.spend ? C.ink : C.mute, textAlign: "right" }}>{b.spend ? `€${b.spend.toLocaleString("nl-NL")}` : "—"}</span>
        </div>
      ))}
    </Card>
  );
}

function StatsExpertsCard({ d }) {
  return (
    <Card title="Statistieken per Expert">
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 1fr", gap: 12, fontFamily: "Wallop, Inter", fontSize: 12, color: C.mute, textTransform: "uppercase", letterSpacing: "0.06em", paddingBottom: 8, borderBottom: `1px solid ${C.border}` }}>
        <span>Expert</span><span>Boekingen</span><span style={{ textAlign: "right" }}>Uitgaven</span>
      </div>
      {d.experts.map((e) => (
        <div key={e.name} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 1fr", gap: 12, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar initials={e.initials} color={e.color} size={28} />
            <span style={{ fontFamily: "Wallop, Inter", fontSize: 14, color: C.ink }}>{e.name}</span>
          </div>
          <span style={{ fontFamily: "Jeko, Inter", fontWeight: 600, fontSize: 14, color: C.ink }}>{e.bookings}</span>
          <span style={{ fontFamily: "Jeko, Inter", fontWeight: 600, fontSize: 14, color: C.ink, textAlign: "right" }}>
            €{e.spend.toLocaleString("nl-NL")} <span style={{ color: C.mute, fontFamily: "Wallop, Inter", fontWeight: 500, fontSize: 13 }}>({e.share}%)</span>
          </span>
        </div>
      ))}
    </Card>
  );
}

Object.assign(window, { AlleCasesCard, LopendeCasesCard, UitgavenCard, BoekingenCard, StatsBoekersCard, StatsExpertsCard });
