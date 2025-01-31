import React from "react";
import "./ImageContainer.css";
import image from "../../images/image11.png";

function ImageContainer() {
  return (
    <div className="image-container">
      <img src={image} alt="Portrait" className="portrait" />
    </div>
  );
}

export default ImageContainer;
