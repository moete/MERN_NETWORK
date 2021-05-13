import React, { useEffect, useState } from "react";
import NotificationItem from "./NotificationItem";
import { notifications } from "./data";
import CustomScrollbars from "util/CustomScrollbars";
import Auxiliary from "util/Auxiliary";
import axios from "axios";

const AppNotification = () => {
  const [invitations, setInvitations] = useState();
  useEffect(() => {
    axios
      .get("/invitation")
      .then(res => {
        setInvitations(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
    axios
      .get("https://networkymern.herokuapp.com/api/profile/me")
      .then(res => localStorage.setItem("name", res.data.user.name))
      .catch(err => console.log(err));
  }, []);
  return (
    <Auxiliary>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Notifications</h3>
        <i className="gx-icon-btn icon icon-charvlet-down" />
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {invitations ? (
            invitations.map((invitation, index) => (
              <NotificationItem key={index} notification={invitation} />
            ))
          ) : (
            <></>
          )}
        </ul>
      </CustomScrollbars>
    </Auxiliary>
  );
};

export default AppNotification;
