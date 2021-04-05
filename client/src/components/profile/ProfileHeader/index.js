import React, { Fragment, useEffect } from "react";
import { Avatar } from "antd";
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
              <p className="gx-mb-0 gx-fs-lg">
                {profile !== null ? (
                  <Fragment>{profile.bio}</Fragment>
                ) : (
                  <Fragment>
                    <p>
                      you have not yet setup a profile , please add some info
                    </p>
                    <Link to="/create-profile" className="gx-link">
                      Create Profile
                    </Link>
                  </Fragment>
                )}
              </p>
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
              <li>
                <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                  327
                </span>
                <span className="gx-fs-sm">Friends</span>
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
                <span className="gx-link">
                  Friends <span className="gx-fs-xs">287</span>
                </span>
              </li>
              <li>
                <span className="gx-link">More</span>
              </li>
            </ul>
          </div>
          <span className="gx-link gx-profile-setting">
            <i className="icon icon-setting gx-fs-lg gx-mr-2 gx-mr-sm-3 gx-d-inline-flex gx-vertical-align-middle" />
            <span className="gx-d-inline-flex gx-vertical-align-middle gx-ml-1 gx-ml-sm-0">
              Setting
            </span>
          </span>
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
