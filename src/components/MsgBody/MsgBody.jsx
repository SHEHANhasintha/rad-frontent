import React from "react";
import "./MsgBody.scss";
import { UserHeader,MsgSender,MsgContainer } from "../"

export const MsgBody = (props) => {
  return (
    <div className="MsgBody">
      <UserHeader />
      <MsgContainer />
      <MsgSender />
    </div>
  );
};

