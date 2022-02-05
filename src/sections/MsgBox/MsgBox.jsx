import React from "react";
import "./MsgBox.scss";
import { MsgBody,UserNavigation } from "../../components";


export const MsgBox = (props) => {
  return (
    <div className="MsgBox" >

      <div className="MsgHeaderwrapper">
        <UserNavigation />

      </div>
      <div className="MsgBodywrapper">
        <MsgBody />

      </div>


    </div>
  );
};

