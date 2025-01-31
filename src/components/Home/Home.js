import React from "react";
import { useTheme } from "../../context/ThemeContext";
import ImageContainer from "../ImageContainer/ImageContainer";
import Nav from "../Nav/Nav";
import Content from "../Content/Content";
import "./Home.css";

function Home() {
  const { isDark } = useTheme();
  return (
    <div className={`resume-page ${isDark ? "dark" : "light"}`}>
      <div className="image-side">
        <ImageContainer />
      </div>
      <div className="content-side">
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default Home;
