// figma: 485:45296 Tooltip intake
export function TooltipIntake(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 280,
      height: 64,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 280,
          height: 64,
        }} data-external={"Base Tooltip"} />
    </div>
  );
}
export default TooltipIntake;
