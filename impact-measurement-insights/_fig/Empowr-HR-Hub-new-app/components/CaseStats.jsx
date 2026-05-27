// figma: 261:33990 Case stats
export function CaseStats(_p = {}) {
  const props = { ..._p, expertInvolved: _p.expertInvolved ?? true, relatedCases: _p.relatedCases ?? false };
  return (
    <div className={props.className} style={{
      width: 400,
      height: 398,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      position: "relative",
      ...props.style,
    }}>
      {props.expertInvolved && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 400,
        height: 120,
        display: "flex",
        flexDirection: "row",
        gap: 8,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 400,
          height: 120,
          overflow: "hidden",
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 400,
            height: 120,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "16px 0px 16px 0px",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 16,
              width: 400,
              height: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 400,
                height: 20,
                fontFamily: "Wallop",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "20px",
                color: "rgb(16,24,40)",
              }}>Contactgegevens betrokken expert</span>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 48,
              width: 400,
              height: 72,
              overflow: "hidden",
              borderRadius: 12,
              backgroundColor: "rgb(255,255,255)",
              border: "1px solid rgb(240,240,243)",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "16px 16px 16px 16px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 16,
                top: 16,
                width: 40,
                height: 40,
                borderRadius: "50%",
              }} />
              <div style={{
                position: "absolute",
                left: 64,
                top: 16,
                width: 320,
                height: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 320,
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 99,
                    height: 20,
                    fontFamily: "Wallop",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "rgb(3,3,46)",
                  }}>Marit Krouwels</span>
                  <span style={{
                    position: "absolute",
                    left: 228,
                    top: 0,
                    width: 92,
                    height: 20,
                    fontFamily: "Wallop",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "rgb(117,117,141)",
                  }}>06 12 34 56 78</span>
                </div>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 20,
                  width: 320,
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 76,
                    height: 20,
                    fontFamily: "Wallop",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "rgb(117,117,141)",
                  }}>Psycholoog</span>
                  <span style={{
                    position: "absolute",
                    left: 198,
                    top: 0,
                    width: 122,
                    height: 20,
                    fontFamily: "Wallop",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "rgb(117,117,141)",
                  }}>marit@krouwels.nl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {props.expertInvolved && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 136,
        width: 400,
        height: 1,
        backgroundColor: "rgb(240,240,243)",
      }} />
      )}
      <div style={{
        position: "absolute",
        left: 0,
        top: 153,
        width: 400,
        height: 228,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 400,
          height: 106,
          display: "flex",
          flexDirection: "row",
          gap: 8,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 196,
            height: 106,
            overflow: "hidden",
            borderRadius: 12,
            backgroundColor: "rgb(255,255,255)",
            border: "1px solid rgb(240,240,243)",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 196,
              height: 106,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: "16px 24px 24px 24px",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 24,
                top: 16,
                width: 148,
                height: 20,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 148,
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  gap: 16,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 148,
                    height: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    justifyContent: "center",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 148,
                      height: 20,
                      fontFamily: "Wallop",
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "rgb(16,24,40)",
                    }}>Aantal boekingen</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 24,
                top: 52,
                width: 148,
                height: 30,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 148,
                  height: 30,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  justifyContent: "flex-end",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 16,
                    height: 30,
                    fontFamily: "Jeko",
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: "30px",
                    letterSpacing: "-0.500px",
                    color: "rgb(16,24,40)",
                  }}>0</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 204,
            top: 0,
            width: 196,
            height: 106,
            overflow: "hidden",
            borderRadius: 12,
            backgroundColor: "rgb(255,255,255)",
            border: "1px solid rgb(240,240,243)",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 196,
              height: 106,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: "16px 24px 24px 24px",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 24,
                top: 16,
                width: 148,
                height: 20,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 148,
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  gap: 16,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 148,
                    height: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    justifyContent: "center",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 148,
                      height: 20,
                      fontFamily: "Wallop",
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "rgb(16,24,40)",
                    }}>Totale uitgaven</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 24,
                top: 52,
                width: 148,
                height: 30,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 148,
                  height: 30,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  justifyContent: "flex-end",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 51,
                    height: 30,
                    fontFamily: "Jeko",
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: "30px",
                    letterSpacing: "-0.500px",
                    color: "rgb(16,24,40)",
                  }}>€0,-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 114,
          width: 400,
          height: 114,
          display: "flex",
          flexDirection: "row",
          gap: 8,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 400,
            height: 114,
            overflow: "hidden",
            borderRadius: 12,
            backgroundColor: "rgb(255,255,255)",
            border: "1px solid rgb(240,240,243)",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 400,
              height: 114,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: "24px 24px 24px 24px",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 24,
                top: 24,
                width: 352,
                height: 20,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 352,
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  gap: 16,
                }}>
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 352,
                    height: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    justifyContent: "center",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 352,
                      height: 20,
                      fontFamily: "Wallop",
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "rgb(16,24,40)",
                    }}>Sessies</span>
                  </div>
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 24,
                top: 60,
                width: 352,
                height: 30,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 352,
                  height: 30,
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "flex-end",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 40,
                    height: 30,
                    fontFamily: "Jeko",
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: "30px",
                    letterSpacing: "-0.500px",
                    color: "rgb(16,24,40)",
                  }}>0/0</span>
                  <div style={{
                    position: "absolute",
                    left: 48,
                    top: 12,
                    width: 304,
                    height: 18,
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                    padding: "0px 0px 2px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <span style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 304,
                      height: 16,
                      fontFamily: "Wallop",
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: "rgb(92,92,120)",
                    }}>voltooid / geboekt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 397,
        width: 400,
        height: 1,
        backgroundColor: "rgb(240,240,243)",
      }} />
      {props.relatedCases && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 414,
        width: 400,
        height: 76,
        display: "flex",
        flexDirection: "row",
        gap: 8,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 400,
          height: 76,
          overflow: "hidden",
          borderRadius: 12,
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 400,
            height: 76,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 400,
              height: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 400,
                height: 20,
                fontFamily: "Wallop",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "20px",
                color: "rgb(16,24,40)",
              }}>Eerdere Cases van Jan Jansen</span>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 32,
              width: 400,
              height: 44,
              overflow: "hidden",
              borderRadius: 12,
              backgroundColor: "rgb(255,255,255)",
              border: "1px solid rgb(240,240,243)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "12px 16px 12px 16px",
              alignItems: "center",
            }}>
              <div style={{
                position: "absolute",
                left: 16,
                top: 12,
                width: 20,
                height: 20,
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute",
                  left: 3.333,
                  top: 1.668,
                  width: 13.333,
                  height: 16.667,
                  border: "1.250px solid rgb(0,0,0)",
                }} />
              </div>
              <div style={{
                position: "absolute",
                left: 40,
                top: 12,
                width: 344,
                height: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 344,
                  height: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 78,
                    height: 20,
                    fontFamily: "Wallop",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: "rgb(3,3,46)",
                  }}>Case #0398</span>
                  <span style={{
                    position: "absolute",
                    left: 211,
                    top: 0,
                    width: 133,
                    height: 20,
                    fontFamily: "Wallop",
                    fontWeight: 500,
                    fontSize: 12,
                    lineHeight: "20px",
                    color: "rgb(117,117,141)",
                  }}>Gesloten op 4 okt. 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
export default CaseStats;
