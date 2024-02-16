import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Open Sans', sans-serif",
    titleFontFamily: "'Rosario', sans-serif",
    mainBg: "#fff",

    title: "Mind Map",
    titleColor: "#0ff00",

    data: [
      {
        title: "Clever Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "1px solid #000",
        background: "#D3E4F4",
        shadowBg: "#96B5D3",
      },
      {
        title: "Clever Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "1px solid #000",
        background: "#FF914D",
        shadowBg: "#D8661F",
      },
      {
        title: "Clever Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "1px solid #000",
        background: "#F3F3F3",
        shadowBg: "#ABA4A4",
      },
      {
        title: "Clever Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "1px solid #000",
        background: "#FDCAE1",
        shadowBg: "#E869A2",
      },
      {
        title: "Clever Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "1px solid #000",
        background: "#EF7C8E",
        shadowBg: "#AB273C",
      },
      {
        title: "Clever Idea",
        titleColor: "#000",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        infoColor: "#000",
        border: "1px solid #000",
        background: "#A3C14A",
        shadowBg: "#708F15",
      },
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
