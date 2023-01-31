import React, { useState } from "react";
import HomeComponent2 from "../Home/HomeComponent2";
import HomeComponent4 from "../Home/HomeComponent4";
import HomeComponent1 from "../Home/HomeComponent1";
import HomeComponent3 from "../Home/HomeComponent3";
import "./Navbar.css";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [participants, setParticipants] = useState("1");

  return (
    <div>
      <div className="navbar-position">
        <div>
          <img
            src="https://choira.io/static/media/choria.96439620.svg"
            alt=""
          ></img>
        </div>
        <div className="heading">Friday Night 2AM</div>
        <select
          name="participants"
          className="dropdown-button"
          onChange={(e) => {
            setParticipants(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button className="invite-button">invite</button>
      </div>
      <div className="homeSection-position">
        {participants === "1" ? (
          <HomeComponent1 />
        ) : participants === "2" ? (
          <HomeComponent2 />
        ) : participants === "3" ? (
          <HomeComponent3 />
        ) : participants === "4" && (
          <HomeComponent4 />
        )}
      </div>
      <Footer />

    </div>
  );
};
export default Navbar;
