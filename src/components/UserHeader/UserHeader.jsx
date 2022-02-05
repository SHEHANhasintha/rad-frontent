import React from "react";
import "./UserHeader.scss";
import { ProfileIcon } from "../";

export const UserHeader = (props) => {
  return (
    <div className="UserHeader">
      {/* UserHeader */}
      <div className="profile-icon">
        <ProfileIcon />
      </div>
      <div className="user-name">
          <span>Alex Free</span>
          <span>typing...</span>
      </div>
    </div>
  );
};

