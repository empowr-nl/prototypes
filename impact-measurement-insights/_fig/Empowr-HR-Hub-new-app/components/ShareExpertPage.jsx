// figma: 307:118720 Share expert page
export function ShareExpertPage(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 409,
      height: 76,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 12px 40px 0px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 409,
        height: 76,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "16px 24px 16px 24px",
        alignItems: "center",
      }}>
        <div style={{
          position: "absolute",
          left: 24,
          top: 16,
          width: 20,
          height: 44,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "2px 0px 2px 0px",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 20,
            height: 20,
            borderRadius: 99,
            backgroundColor: "rgb(55,165,66)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
                position: "absolute",
                left: 4,
                top: 4,
                width: 12,
                height: 12,
              }} data-external={"check"} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 56,
          top: 16,
          width: 329,
          height: 44,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
          <span style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 329,
            height: 22,
            fontFamily: "Wallop",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "22px",
            color: "rgb(3,3,46)",
          }}>Link naar publieke expert pagina gekopieerd</span>
          <span style={{
            position: "absolute",
            left: 0,
            top: 24,
            width: 329,
            height: 20,
            fontFamily: "Wallop",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            color: "rgb(92,92,120)",
          }}>Je kunt deze delen met een collega of werknemer</span>
        </div>
      </div>
    </div>
  );
}
export default ShareExpertPage;
