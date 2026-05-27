// figma: 3304:36790 Contact card (2 variants)
const __variants = {

};
const __vkey = (p) => "state=" + p.state;

export function ContactCard(_p = {}) {
  const props = { ..._p, state: _p.state ?? "Default" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 400,
      height: 136,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(254,254,253)",
      border: "1px solid rgb(238,238,241)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-lg-6)",
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      paddingRight: "var(--spacing-xl-5)",
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 16,
        top: 16,
        width: 368,
        height: 40,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-lg-6)",
        padding: "0px 4px 0px 4px",
        alignItems: "center",
        paddingLeft: "var(--spacing-xs-6)",
        paddingRight: "var(--spacing-xs-6)",
      }}>
        <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 32,
            height: 32,
          }} data-external={"Size=sm, Placeholder=False, Text=True, Status icon=False"} />
        <div style={{
          position: "absolute",
          left: 48,
          top: 0,
          width: 316,
          height: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 316,
            height: 20,
            display: "flex",
            flexDirection: "row",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 193,
              height: 20,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(23,23,62)",
            }}>Jan Jansen</span>
            <span style={{
              position: "absolute",
              left: 193,
              top: 0,
              width: 123,
              height: 20,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(92,92,120)",
            }}>jan@ggdutrecht.nl</span>
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 20,
            width: 316,
            height: 20,
            display: "flex",
            flexDirection: "row",
            gap: "var(--spacing-sm-5)",
            alignItems: "center",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 218,
              height: 20,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(92,92,120)",
            }}>Medewerker</span>
            <span style={{
              position: "absolute",
              left: 224,
              top: 0,
              width: 92,
              height: 20,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(92,92,120)",
            }}>06 12 34 56 78</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 68,
        width: 368,
        height: 0,
        border: "1px solid rgb(238,238,241)",
      }} />
      <div style={{
        position: "absolute",
        left: 16,
        top: 80,
        width: 368,
        height: 40,
        display: "flex",
        flexDirection: "row",
        gap: "var(--spacing-md-5)",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 217,
            height: 40,
          }} data-external={"Size=md, Hierarchy=Secondary, State=Default, Icon only=False"} />
        <div style={{
            position: "absolute",
            left: 225,
            top: 0,
            width: 143,
            height: 40,
          }} data-external={"Size=md, Hierarchy=Primary, State=Default, Icon only=False"} />
      </div>
    </div>
  );
}
export default ContactCard;
