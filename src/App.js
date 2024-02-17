import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Arrow1 from "./images/arrows/Arrow1";
import Arrow2 from "./images/arrows/Arrow2";
import Arrow3 from "./images/arrows/Arrow3";
import Arrow4 from "./images/arrows/Arrow4";
import Arrow5 from "./images/arrows/Arrow5";
import Arrow6 from "./images/arrows/Arrow6";
import Arrow7 from "./images/arrows/Arrow7";
import Arrow8 from "./images/arrows/Arrow8";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Open Sans', sans-serif",
    titleFontFamily: "'Rosario', sans-serif",
    mainBg: "#fff",

    title: "Mind <br/> Map",
    titleColor: "#0ff00",

    data: [
      {
        title: "Creative Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#D3E4F4",
        shadowBg: "#96B5D3",
      },
      {
        title: "Fresh Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#FF914D",
        shadowBg: "#D8661F",
      },
      {
        title: "Modern Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#F3F3F3",
        shadowBg: "#ABA4A4",
      },
      {
        title: "Unique Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#EF7C8E",
        shadowBg: "#AB273C",
      },
      {
        title: "Simple Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#FBD160",
        shadowBg: "#FFBE10",
      },
      {
        title: "Simple Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#FBD160",
        shadowBg: "#FFBE10",
      },
      {
        title: "Bright Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#A3C14A",
        shadowBg: "#708F15",
      },
      {
        title: "Original Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "2px solid #000",
        background: "#FDCAE1",
        shadowBg: "#E869A2",
      },
    ],

    arrows: [
      <Arrow1 color="#000" />,
      <Arrow2 color="#000" />,
      <Arrow3 color="#000" />,
      <Arrow4 color="#000" />,
      <Arrow5 color="#000" />,
      <Arrow6 color="#000" />,
      <Arrow7 color="#000" />,
      <Arrow8 color="#000" />,
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} titleFontFamily={allData.titleFontFamily} />
      </div>
    </>
  );
}

export default App;
