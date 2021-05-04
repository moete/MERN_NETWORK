import React, { Fragment, useEffect } from "react";
import { Avatar, Button, Icon } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteAccount,
  getCurrentProfile
} from "../../../appRedux/actions/profile";
const ProfileHeader = ({
  deleteAccount,
  getCurrentProfile,
  auth: { authUser, user },
  profile: { profile, loader },
  social: { instagram, twitter, facebook, youtube, linkedin }
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
                <Link to="/edit-profile" className="gx-link">
                  Edit Profile
                </Link>
              </Button>
              <Button type="ghost">
                <Link to="/profile/Add-Experience" className="gx-link">
                  Add Experience
                </Link>
              </Button>
              <Button type="ghost">
                <Link to="/profile/Add-Education" className="gx-link">
                  Add Education
                </Link>
              </Button>
              <Button type="danger" ghost onClick={() => deleteAccount()}>
                Delete My Account
              </Button>
              <h3>Socials :</h3>
              <ul className=" gx-social-link ">
                {instagram ? (
                  <li>
                    <Icon type="instagram" />
                  </li>
                ) : null}
                {linkedin ? (
                  <li>
                    <Icon type="linkedin" />
                  </li>
                ) : null}

                {twitter ? (
                  <li>
                    <Icon type="twitter" />
                  </li>
                ) : null}
                {facebook ? (
                  <li>
                    <Icon type="facebook" />
                  </li>
                ) : null}
                {youtube ? (
                  <li>
                    <Icon type="youtube" />
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
          <div className="gx-profile-banner-top-right">
            <ul className="gx-follower-list">
              <Link to="/profile/profiles" className="gx-link">
                <li>
                  <span className="gx-follower-title gx-fs-lg gx-font-weight-medium">
                    2k+
                  </span>
                  <span className="gx-fs-sm">Followers</span>
                </li>
              </Link>

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
          <div className="gx-tab-list"></div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,

  social: state.profile.profile.social
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  ProfileHeader
);
