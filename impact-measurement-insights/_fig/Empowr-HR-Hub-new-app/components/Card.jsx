import { Type } from './Type.jsx';

// figma: 513:50916 Card (2 variants)
const __variants = {

};
const __vkey = (p) => "state=" + p.state;

export function Card(_p = {}) {
  const props = { ..._p, state: _p.state ?? "Default" };
  const __vs = __variants[__vkey(props)] ?? {};
  return (
    <div className={props.className} style={{
      width: 256,
      height: 375,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(254,254,253)",
      border: "1px solid rgb(238,238,241)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      ...__vs, ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 256,
        height: 140,
        overflow: "hidden",
        borderRadius: "12px 12px 20px 20px",
        background: "linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)",
        display: "flex",
        flexDirection: "column",
        padding: "12px 12px 12px 12px",
        justifyContent: "space-between",
      }}>
        <div style={{
          position: "absolute",
          left: 12,
          top: 12,
          width: 232,
          height: 26,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <Type style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 74,
              height: 26,
            }} />
          <div style={{
            position: "absolute",
            left: 74,
            top: 1,
            width: 158,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 8,
            justifyContent: "flex-end",
            alignItems: "center",
          }} />
        </div>
        <div style={{
          position: "absolute",
          left: 12,
          top: 38,
          width: 232,
          height: 90,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "flex-end",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 70,
            width: 137,
            height: 20,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
          }}>
            <div style={{
                position: "absolute",
                left: 0,
                top: 2,
                width: 16,
                height: 16,
              }} data-external={"marker-pin-01"} />
            <span style={{
              position: "absolute",
              left: 20,
              top: 0,
              width: 117,
              height: 20,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(255,255,255)",
            }}>Regio Amsterdam</span>
          </div>
          <div style={{
            position: "absolute",
            left: 141,
            top: 72,
            width: 26,
            height: 18,
            borderRadius: 99,
            border: "1px solid rgba(255,255,255,0.8)",
            backdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "0px 6px 0px 6px",
            alignItems: "center",
          }}>
            <span style={{
              position: "absolute",
              left: 6,
              top: 0,
              width: 14,
              height: 18,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "18px",
              color: "rgba(255,255,255,0.8)",
            }}>+2</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 140,
        width: 256,
        height: 235,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 256,
          height: 235,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "16px 16px 16px 16px",
        }}>
          <div style={{
            position: "absolute",
            left: 16,
            top: 16,
            width: 224,
            height: 88,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 224,
              height: 24,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "22px",
              color: "rgb(23,23,62)",
            }}>Edwin Beijersbergen</span>
            <span style={{
              position: "absolute",
              left: 0,
              top: 30,
              width: 224,
              height: 60,
              fontFamily: "Wallop",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(92,92,120)",
            }}>Versterk emotionele verbindingen tijdens relatie crises of scheiding, en vind balans in werk en privé met persoonlijke begeleiding.</span>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 120,
            width: 224,
            height: 52,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            flexWrap: "wrap",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 70,
              height: 26,
              borderRadius: 99,
              border: "1px solid rgb(230,230,234)",
              backdropFilter: "blur(4px)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 9px 4px 9px",
              alignItems: "center",
            }}>
              <span style={{
                position: "absolute",
                left: 9,
                top: 4,
                width: 52,
                height: 18,
                fontFamily: "Wallop",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "rgb(23,23,62)",
              }}>Burn-out</span>
            </div>
            <div style={{
              position: "absolute",
              left: 74,
              top: 0,
              width: 101,
              height: 26,
              borderRadius: 99,
              border: "1px solid rgb(230,230,234)",
              backdropFilter: "blur(4px)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 9px 4px 9px",
              alignItems: "center",
            }}>
              <span style={{
                position: "absolute",
                left: 9,
                top: 4,
                width: 83,
                height: 18,
                fontFamily: "Wallop",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "rgb(23,23,62)",
              }}>Samenwerking</span>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 30,
              width: 52,
              height: 26,
              borderRadius: 99,
              border: "1px solid rgb(230,230,234)",
              backdropFilter: "blur(4px)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 9px 4px 9px",
              alignItems: "center",
            }}>
              <span style={{
                position: "absolute",
                left: 9,
                top: 4,
                width: 34,
                height: 18,
                fontFamily: "Wallop",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "rgb(23,23,62)",
              }}>Stress</span>
            </div>
            <div style={{
              position: "absolute",
              left: 56,
              top: 30,
              width: 60,
              height: 26,
              borderRadius: 99,
              border: "1px solid rgb(230,230,234)",
              backdropFilter: "blur(4px)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 9px 4px 9px",
              alignItems: "center",
            }}>
              <span style={{
                position: "absolute",
                left: 9,
                top: 4,
                width: 42,
                height: 18,
                fontFamily: "Wallop",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "rgb(23,23,62)",
              }}>Trauma</span>
            </div>
            <div style={{
              position: "absolute",
              left: 120,
              top: 30,
              width: 78,
              height: 26,
              borderRadius: 99,
              backgroundColor: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(4px)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 9px 4px 9px",
              alignItems: "center",
            }}>
              <span style={{
                position: "absolute",
                left: 9,
                top: 4,
                width: 60,
                height: 18,
                fontFamily: "Wallop",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "rgb(117,117,141)",
              }}>+4 thema’s</span>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 16,
            top: 188,
            width: 224,
            height: 31,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 224,
              height: 1,
              border: "1px solid rgb(238,238,241)",
            }} />
            <div style={{
              position: "absolute",
              left: 0,
              top: 13,
              width: 179,
              height: 18,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "0px 2px 0px 2px",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div style={{
                  position: "absolute",
                  left: 2,
                  top: 1,
                  width: 16,
                  height: 16,
                }} data-external={"globe-01"} />
              <span style={{
                position: "absolute",
                left: 22,
                top: 0,
                width: 155,
                height: 18,
                fontFamily: "Wallop",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "20px",
                color: "rgb(117,117,141)",
              }}>Dutch, English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
