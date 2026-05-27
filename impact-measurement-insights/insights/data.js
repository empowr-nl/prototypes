// Sample data for GGD Utrecht Insights dashboard
window.INSIGHTS_DATA = {
  org: { name: "GGD Utrecht", logo: "GGD" },

  // Headline impact figures
  impact: {
    totalStarted: 28,
    preventief: 11, // 39%
    curatief: 17,   // 61%
    closed: 17,
    closedReachedGoal: 14, // 82%
    closedPreventief: { reached: 6, total: 6 },   // 100%
    closedCuratief:   { reached: 8, total: 11 },  // 73%
    notReached: 3,
    stillActive: 11,
  },

  // 12-month split: starts per month, preventief vs curatief
  monthly: [
    { m: "Mei '25", p: 1, c: 0 },
    { m: "Jun '25", p: 1, c: 0 },
    { m: "Jul '25", p: 0, c: 1 },
    { m: "Aug '25", p: 0, c: 0 },
    { m: "Sep '25", p: 2, c: 1 },
    { m: "Okt '25", p: 0, c: 4 },
    { m: "Nov '25", p: 0, c: 2 },
    { m: "Dec '25", p: 1, c: 2 },
    { m: "Jan '26", p: 1, c: 1 },
    { m: "Feb '26", p: 2, c: 1 },
    { m: "Mrt '26", p: 3, c: 4 },
    { m: "Apr '26", p: 0, c: 1 },
  ],

  // Lopende cases by type, per month — for stacked area
  runningOverTime: [
    { m: "Mei '25", p: 0, c: 0, u: 0 },
    { m: "Jun '25", p: 1, c: 0, u: 0 },
    { m: "Jul '25", p: 1, c: 1, u: 0 },
    { m: "Aug '25", p: 1, c: 1, u: 0 },
    { m: "Sep '25", p: 3, c: 2, u: 0 },
    { m: "Okt '25", p: 3, c: 6, u: 0 },
    { m: "Nov '25", p: 3, c: 7, u: 1 },
    { m: "Dec '25", p: 4, c: 8, u: 1 },
    { m: "Jan '26", p: 4, c: 7, u: 1 },
    { m: "Feb '26", p: 5, c: 6, u: 1 },
    { m: "Mrt '26", p: 6, c: 7, u: 2 },
    { m: "Apr '26", p: 3, c: 4, u: 1 },
  ],

  // Quarterly shift toward prevention
  quarterly: [
    { q: "Q2 2025", preventief: 2, total: 2 },
    { q: "Q3 2025", preventief: 2, total: 4 },
    { q: "Q4 2025", preventief: 1, total: 9 },
    { q: "Q1 2026", preventief: 6, total: 12 },
  ],

  // Existing dashboard data
  cases: {
    opened:  { total: 1, p: 1, c: 0, u: 0 },
    running: { total: 8, p: 3, c: 4, u: 1 },
    closed:  { total: 4, p: 2, c: 2, u: 0 },
  },
  // Doel-bereikt (only on gesloten)
  closedGoal: { reached: 3, notReached: 1, total: 4 },
  avgRuntime: "2 maanden, 4 dagen",
  topThemes: [
    { name: "Burn-out", value: 0.92 },
    { name: "Stress", value: 0.78 },
    { name: "Patronen doorbreken", value: 0.32 },
    { name: "Depressie", value: 0.28 },
    { name: "Slaapproblemen", value: 0.24 },
    { name: "Werkdruk", value: 0.20 },
  ],
  runningCasesSeries: [
    { d: "5 jan", v: 12 }, { d: "8 jan", v: 12 }, { d: "12 jan", v: 11 },
    { d: "15 jan", v: 10 }, { d: "19 jan", v: 9 }, { d: "22 jan", v: 8 },
    { d: "26 jan", v: 8 }, { d: "30 jan", v: 8 }, { d: "4 feb", v: 8 },
  ],
  spending: { total: 5460, perCase: 606, cases: 9 },
  spendingSeries: [
    { d: "5 jan", v: 300 }, { d: "8 jan", v: 320 }, { d: "12 jan", v: 310 },
    { d: "15 jan", v: 290 }, { d: "19 jan", v: 280 }, { d: "22 jan", v: 270 },
    { d: "26 jan", v: 260 }, { d: "30 jan", v: 4500 }, { d: "4 feb", v: 1450 },
  ],
  bookings: { total: 13, cases: 9 },
  bookingsSeries: [
    { d: "5 jan", k: 1, s: 1 }, { d: "8 jan", k: 0, s: 0 },
    { d: "12 jan", k: 3, s: 1 }, { d: "15 jan", k: 1, s: 0 },
    { d: "19 jan", k: 0, s: 0 }, { d: "22 jan", k: 0, s: 0 },
    { d: "26 jan", k: 0, s: 0 }, { d: "30 jan", k: 0, s: 6 },
    { d: "4 feb",  k: 0, s: 1 },
  ],
  bookers: [
    { initials: "AW", name: "Anneloes Wiersma", color: "#FCE7B5", cases: 3, spend: 1200 },
    { initials: "HL", name: "Hanneke Lodewijks", color: "#C7E0FF", cases: 1, spend: 650 },
    { initials: "GW", name: "Georgia Wijnands",  color: "#FFD8B0", cases: 1, spend: 700 },
    { initials: "LD", name: "Laura van Dunnen",  color: "#D4F1E0", cases: 1, spend: 890 },
    { initials: "AG", name: "Alena Gouse",       color: "#E7D6FF", cases: 0, spend: 0 },
    { initials: "MS", name: "Mariska Scheenen",  color: "#FFD0E0", cases: null, spend: 0, invited: true },
  ],
  experts: [
    { initials: "EB", name: "Edwin Beijersbergen", color: "#C7E0FF", bookings: 22, spend: 12900, share: 19.3 },
    { initials: "LK", name: "Lenneke van der Knaap-Wilmer", color: "#FCE7B5", bookings: 19, spend: 15200, share: 22.7 },
    { initials: "FS", name: "Frederike van Spaendonck", color: "#FFD8B0", bookings: 15, spend: 12350, share: 18.5 },
    { initials: "EK", name: "Evie Kottmann", color: "#D4F1E0", bookings: 15, spend: 15200, share: 22.7 },
    { initials: "MK", name: "Marit Krouwels", color: "#E7D6FF", bookings: 10, spend: 9200, share: 13.7 },
    { initials: "RN", name: "Robine Nederveen", color: "#FFD0E0", bookings: 3, spend: 1200, share: 1.8 },
  ],
};
