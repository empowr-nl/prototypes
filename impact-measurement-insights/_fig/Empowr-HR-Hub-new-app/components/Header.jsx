// figma: 3025:31221 Header
export function Header(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1104,
      height: 42,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "center",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 656,
        height: 42,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 3,
            width: 90,
            height: 36,
          }} data-external={"Size=sm, Hierarchy=Secondary, State=Default, Icon only=False"} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,102,1)",
          transformOrigin: "0 0",
          width: 40,
          height: 0,
          border: "1px solid rgb(238,238,241)",
        }} />
        <div style={{
          position: "absolute",
          left: 114,
          top: 0,
          width: 165,
          height: 42,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}>
          <div style={{
              position: "absolute",
              left: 0,
              top: 5,
              width: 32,
              height: 32,
            }} data-external={"Size=sm, Placeholder=False, Text=True, Status icon=False"} />
          <div style={{
            position: "absolute",
            left: 44,
            top: 0,
            width: 121,
            height: 42,
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 121,
              height: 22,
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 2,
                width: 50,
                height: 18,
                fontFamily: "Wallop",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "18px",
                color: "rgb(68,68,100)",
              }}>Case 001</span>
              <div style={{
                  position: "absolute",
                  left: 56,
                  top: 0,
                  width: 65,
                  height: 22,
                }} data-external={"Size=sm, Type=Badge modern, Icon=False, Color=Gray"} />
            </div>
            <span style={{
              position: "absolute",
              left: 0,
              top: 22,
              width: 70,
              height: 20,
              fontFamily: "Wallop",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: "24px",
              color: "rgb(23,23,62)",
            }}>Jan Jansen</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 680,
        top: 1,
        width: 424,
        height: 40,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
      }}>
        <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 175,
            height: 40,
          }} data-external={"Size=md, Hierarchy=Secondary, State=Disabled, Icon only=False"} />
        <div style={{
            position: "absolute",
            left: 181,
            top: 0,
            width: 127,
            height: 40,
          }} data-external={"Size=md, Hierarchy=Secondary, State=Default, Icon only=False"} />
        <div style={{
            position: "absolute",
            left: 314,
            top: 0,
            width: 110,
            height: 40,
          }} data-external={"Size=md, Hierarchy=Primary, State=Default, Icon only=False"} />
      </div>
    </div>
  );
}
export default Header;
