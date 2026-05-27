// figma: 762:88922 Case Stats
export function CaseStats2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 400,
      height: 108,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 400,
        height: 108,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 196,
            height: 108,
          }} data-external={"Case stats card"} />
        <div style={{
            position: "absolute",
            left: 204,
            top: 0,
            width: 196,
            height: 108,
          }} data-external={"Case stats card"} />
      </div>
    </div>
  );
}
export default CaseStats2;
