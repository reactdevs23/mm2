import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({
  titleFontFamily,
  data,
  centerIcon,
  title,
  titleSpark,
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
          </div>
          <div className={classes.midRightContainer}>
            {data.length > 6 && (
              <div
                className={[classes.item, classes.middleRight].join(" ")}
                style={{
                  "--border": data[4].border,
                  "--shadowBg": data[4].shadowBg,
                  "--bg": data[4].background,
                }}
              >
                <h3
                  className={classes.title}
                  style={{
                    "--color": data[4].titlecolor,
                    "--titleFontFamily": titleFontFamily,
                  }}
                >
                  {data[4].title}
                </h3>
                <p
                  className={classes.info}
                  style={{ "--color": data[4].infoColor }}
                >
                  {data[4].info}
                </p>
              </div>
            )}
          </div>
        </div>
        {data.length > 4 && (
          <div className={[classes.row3, classes.row].join(" ")}>
            {" "}
            {data
              .slice(data.length === 7 ? -2 : data.length === 5 ? -2 : -3)
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
