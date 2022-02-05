import React from "react";
import "./ProfileInfoWithStatus.scss";
import { ProfileIcon } from "..";

export const ProfileInfoWithStatus = (props) => {
  return (
    <div className="ProfileInfoWithStatus">
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

