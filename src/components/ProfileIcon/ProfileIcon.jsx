import React from "react";
import "./ProfileIcon.scss";

export const ProfileIcon = (props) => {
  return (
    <div className="ProfileIcon">
<div className="flex space-x-2">

    <div className="relative w-16 h-16">
      <img className="rounded-full border border-gray-100 shadow-sm" alt="profileimg" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
      <div className="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
    </div>

    {/* <div class="relative w-16 h-16">
      <img class="rounded-full border border-gray-100 shadow-sm" alt="profileimg"src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
      <div class="absolute top-0 right-0 h-4 w-4 my-1 border-6 border-white rounded-full bg-gray-300 z-0"></div>
    </div> */}

</div>

    </div>
  );
};

