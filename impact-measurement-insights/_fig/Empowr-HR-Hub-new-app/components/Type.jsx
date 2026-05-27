// figma: 518:46191 Type (2 variants)
const __variants = {
  "variant=Coach": { width: 74 },
};
const __vkey = (p) => "variant=" + p.variant;

export function Type(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "Psycholoog", verified: _p.verified ?? false };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 103,
      height: 26,
      borderRadius: 99,
      backgroundColor: "rgb(254,254,253)",
      backdropFilter: "blur(4px)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 9px 4px 9px",
      alignItems: "center",
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 9,
          top: 5,
          width: 16,
          height: 16,
        }} data-external={"psychology"} />
      <span style={{
        position: "absolute",
        left: 29,
        top: 4,
        width: 65,
        height: 18,
        fontFamily: "Wallop",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        color: "rgb(23,23,62)",
      }}>Psycholoog</span>
    </div>
  );
}
export default Type;
