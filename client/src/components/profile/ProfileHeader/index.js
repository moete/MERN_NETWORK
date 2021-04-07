import React, { Fragment, useEffect } from "react";
import { Avatar, Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../../appRedux/actions/profile";
const ProfileHeader = ({
  getCurrentProfile,
  auth: { authUser, user },
  profile: { profile, loader }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..." src={authUser.avatar} />
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">
                {user && user.name}
              </h2>
              <p style={{ paddingBottom: "10px" }} className="gx-mb-0 gx-fs-lg">
                {profile.status}
              </p>
              <Button type="default">
                <Link to="/create-profile" className="gx-link">
                  Edit Profile
                </Link>
              </Button>
              <Button type="ghost"> Add Experience</Button>
              <Button type="ghost"> Add Education</Button>
            </div>
          </div>
          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  2k+
                </span>
                <span className="gx-fs-sm">Followers</span>
              </li>
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  847
                </span>
                <span className="gx-fs-sm">Following</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="gx-profile-banner-bottom">
          <div className="gx-tab-list">
            <ul className="gx-navbar-nav">
              <li>
                <span className="gx-link">Timeline</span>
              </li>
              <li>
                <span className="gx-link">About</span>
              </li>
              <li>
                <span className="gx-link">Photos</span>
              </li>
              <li>
                <span className="gx-link">More</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(ProfileHeader);
