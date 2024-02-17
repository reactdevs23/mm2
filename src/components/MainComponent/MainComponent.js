import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({
  titleFontFamily,
  data,
  arrows,
  title,

  titleColor,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div
        className={[classes.wrapper, classes[`wrapper${data.length}`]].join(
          " "
        )}
      >
        {" "}
        <div className={[classes.row1, classes.row].join(" ")}>
          {data.slice(0, 3).map((el, i) => (
            <div
              className={[classes.item, classes[`item-${i + 1}`]].join(" ")}
              key={i}
              style={{
                "--border": el.border,
                "--shadowBg": el.shadowBg,
                "--bg": el.background,
              }}
            >
              <h3
                className={classes.title}
                style={{
                  "--color": el.titlecolor,
                  "--titleFontFamily": titleFontFamily,
                }}
              >
                {el.title}
              </h3>
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {el.info}
              </p>
            </div>
          ))}
        </div>{" "}
        <div className={[classes.row2, classes.row].join(" ")}>
          <div className={classes.midLeftContainer}>
            {data.length > 6 && (
              <div
                className={[classes.item, classes.middleLeft].join(" ")}
                style={{
                  "--border": data[data.length - 1].border,
                  "--shadowBg": data[data.length - 1].shadowBg,
                  "--bg": data[data.length - 1].background,
                }}
              >
                <h3
                  className={classes.title}
                  style={{
                    "--color": data[data.length - 1].titlecolor,
                    "--titleFontFamily": titleFontFamily,
                  }}
                >
                  {data[data.length - 1].title}
                </h3>
                <p
                  className={classes.info}
                  style={{ "--color": data[data.length - 1].infoColor }}
                >
                  {data[data.length - 1].info}
                </p>
              </div>
            )}
          </div>
          <div
            className={[
              data.length > 6 && classes.middleMore,
              classes.middle,
            ].join(" ")}
          >
            <h3
              className={classes.title}
              style={{
                "--color": titleColor,
                "--titleFontFamily": titleFontFamily,
              }}
              dangerouslySetInnerHTML={{ __html: title }}
            ></h3>
            <>
              {arrows.map((arrow, i) => (
                <div
                  className={[classes.arrow, classes[`arrow${i + 1}`]].join(
                    " "
                  )}
                >
                  {arrow}
                </div>
              ))}
            </>
          </div>
          <div className={classes.midRightContainer}>
            {data.length > 6 && (
              <div
                className={[classes.item, classes.middleRight].join(" ")}
                style={{
                  "--border": data[3].border,
                  "--shadowBg": data[3].shadowBg,
                  "--bg": data[3].background,
                }}
              >
                <h3
                  className={classes.title}
                  style={{
                    "--color": data[3].titlecolor,
                    "--titleFontFamily": titleFontFamily,
                  }}
                >
                  {data[3].title}
                </h3>
                <p
                  className={classes.info}
                  style={{ "--color": data[3].infoColor }}
                >
                  {data[3].info}
                </p>
              </div>
            )}
          </div>
        </div>
        {data.length > 4 && (
          <div className={[classes.row3, classes.row].join(" ")}>
            {" "}
            {data
              .slice(
                data.length === 7
                  ? -3
                  : data.length === 5
                  ? -2
                  : data.length === 8
                  ? -4
                  : -3,
                data.length === 7 ? -1 : data.length === 8 ? -1 : undefined
              )
              .map((el, i) => (
                <div
                  className={[classes.item, classes[`item-${i + 1}`]].join(" ")}
                  key={i}
                  style={{
                    "--border": el.border,
                    "--shadowBg": el.shadowBg,
                    "--bg": el.background,
                  }}
                >
                  <h3
                    className={classes.title}
                    style={{
                      "--color": el.titleColor,
                      "--titleFontFamily": titleFontFamily,
                    }}
                  >
                    {el.title}
                  </h3>
                  <p
                    className={classes.info}
                    style={{ "--color": el.infoColor }}
                  >
                    {el.info}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
