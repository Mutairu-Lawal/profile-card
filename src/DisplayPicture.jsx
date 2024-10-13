import React from "react";
import myImage from "./assets/Me.jpg";

const DisplayPicture = () => {
  return (
    <div className="card--img-container">
      <img src={myImage} alt="" className="img-fluid" />
    </div>
  );
};

export default DisplayPicture;
