import React from "react";

const HomeComponent3 = () => {
  return (
    <div className="home-component3">
      <video
        src={process.env.PUBLIC_URL + "/sample-video1.mp4"}
        width="100%"
        height="100%"
        loop
        autoPlay
      />

      <div>
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
      </div>
    </div>
  );
};

export default HomeComponent3;
