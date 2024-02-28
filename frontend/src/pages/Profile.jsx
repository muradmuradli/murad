import React, { useState } from "react";
import "../css/profile.css";
import profilepic from "../images/profilepicture.webp";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-components">
        <div className="profile-up">
          <div className="up-image">
            <img src={profilepic}></img>
          </div>
          <input placeholder="Your name"></input>
        </div>
      </div>
    </div>
  );
};

export default Profile;
