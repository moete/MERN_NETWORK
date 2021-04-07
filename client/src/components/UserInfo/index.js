import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Avatar, Popover } from "antd";
import { userSignOut } from "appRedux/actions/Auth";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../appRedux/actions/profile";

const UserInfo = ({
  getCurrentProfile,
  userSignOut,
  auth: { authUser },
  profile: { profile, loader }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Popover
      overlayClassName="gx-popover-horizantal"
      placement="bottomRight"
      content={
        <ul className="gx-user-popover">
          <Link to="/social-apps/profile">
            <li>My Account</li>
          </Link>

          <li>Connections</li>
          <li onClick={() => userSignOut()}>Logout</li>
        </ul>
      }
      trigger="click"
    >
      <Avatar src={authUser.avatar} className="gx-avatar gx-pointer" alt="" />
    </Popover>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile, userSignOut })(
  UserInfo
);
