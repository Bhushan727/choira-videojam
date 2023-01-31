import React from "react";
import "./Home.css";

const HomeComponent4 = () => {
  return (
    <div className="home-component4">
      <video
        src={process.env.PUBLIC_URL + "/sample-video1.mp4"}
        width="100%"
        height="100%"
        loop
        autoPlay
      />
      <video
        src={process.env.PUBLIC_URL + "/sample-video2.mp4"}
        width="100%"
        height="100%"
        loop
        autoPlay
      />
      <video
        src={process.env.PUBLIC_URL + "/sample-video3.mp4"}
        width="100%"
        height="100%"
        loop
        autoPlay
      />
      <video
        src={process.env.PUBLIC_URL + "/sample-video4.mp4"}
        width="100%"
        height="100%"
        loop
        autoPlay
      />
    </div>
  );
};

export default HomeComponent4;
