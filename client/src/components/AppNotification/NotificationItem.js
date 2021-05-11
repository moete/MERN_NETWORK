import React, { useEffect, useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import styled from "styled-components";
import axios from "axios";
const NotificationItem = ({ notification }) => {
  const [result, setResult] = useState();
  useEffect(() => {
    console.log(notification);
    if (notification.to_user === localStorage.getItem("name")) {
      setResult(notification);
    }
    console.log(result);
  }, [result]);
  function AcceptInvitation() {
    axios
      .post(`/invitation/Add/${result._id}`, result)
      .then(
        res =>
          (window.location = `http://localhost:3000/group/enter-group/${res.data._id}`)
      )
      .catch(err => console.log(err));
  }
  function CancelInvitation() {
    axios
      .delete(`/invitation/${result._id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    window.location.reload();
  }
  if (result) {
    return (
      <NotificationContainer>
        <div>
          <li className="gx-media">
            <div className="gx-media-body gx-align-self-center">
              <p className="gx-fs-sm gx-mb-0">
                You are invited to join {result.groupname}
              </p>
              <i />{" "}
              <span className="gx-meta-date">
                <small>Invitaion sent from {result.from_user}</small>
              </span>
            </div>
          </li>
        </div>
        <div>
          <CheckIcon
            style={{ margin: "2px", cursor: "pointer" }}
            onClick={AcceptInvitation}
          />
          <ClearIcon
            style={{ margin: "2px", cursor: "pointer" }}
            onClick={CancelInvitation}
          />
        </div>
      </NotificationContainer>
    );
  } else {
    return <></>;
  }
};

export default NotificationItem;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
