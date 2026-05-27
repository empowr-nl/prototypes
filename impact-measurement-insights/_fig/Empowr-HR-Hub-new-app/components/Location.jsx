// figma: 791:95076 Location (5 variants)
const __variants = {
  "type=Desktop Collapsed": { height: 136 },
  "type=Mobile": {
    width: 375,
    height: 800,
    overflow: "revert",
    borderRadius: "revert",
    backgroundColor: "rgba(3,3,46,0.1)",
    border: "revert",
    padding: "8px 8px 12px 8px",
  },
  "type=Mobile Active": {
    width: 375,
    height: 800,
    overflow: "revert",
    borderRadius: "revert",
    backgroundColor: "rgba(3,3,46,0.1)",
    border: "revert",
    padding: "8px 8px 12px 8px",
  },
};
const __vkey = (p) => "type=" + p.type;

export function Location(_p = {}) {
  const props = { ..._p, type: _p.type ?? "Desktop Expanded" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 220,
      height: 412,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,254,253)",
      border: "1px solid rgb(230,230,234)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 0px 12px 0px",
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 220,
        height: 44,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 220,
          height: 44,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 220,
            height: 44,
            border: "1px solid rgb(230,230,234)",
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "12px 16px 12px 16px",
            alignItems: "center",
          }}>
            <span style={{
              position: "absolute",
              left: 16,
              top: 12,
              width: 78,
              height: 20,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(117,117,141)",
            }}>Zoek locatie</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 52,
        width: 220,
        height: 348,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "0px 8px 0px 8px",
      }}>
        <div style={{
            position: "absolute",
            left: 8,
            top: 0,
            width: 204,
            height: 32,
          }} data-external={"type=leading icon, state=default"} />
        <div style={{
          position: "absolute",
          left: 8,
          top: 40,
          width: 204,
          height: 308,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 204,
              height: 32,
            }} data-external={"type=all icons, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 36,
              width: 204,
              height: 26,
            }} data-external={"type=no icon, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 66,
              width: 204,
              height: 32,
            }} data-external={"type=no icon, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 102,
              width: 204,
              height: 32,
            }} data-external={"type=no icon, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 138,
              width: 204,
              height: 32,
            }} data-external={"type=no icon, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 174,
              width: 204,
              height: 26,
            }} data-external={"type=no icon, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 204,
              width: 204,
              height: 32,
            }} data-external={"type=no icon, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 240,
              width: 204,
              height: 32,
            }} data-external={"type=no icon, state=default"} />
          <div style={{
              position: "absolute",
              left: 0,
              top: 276,
              width: 204,
              height: 32,
            }} data-external={"type=no icon, state=default"} />
        </div>
      </div>
    </div>
  );
}
export default Location;
