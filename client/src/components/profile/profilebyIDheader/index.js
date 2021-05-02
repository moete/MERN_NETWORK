import React, { Fragment, useEffect } from "react";
import { Avatar, Button, Icon } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../../../appRedux/actions/Auth";

import { getProfileById } from "../../../appRedux/actions/profile";
const profilebyIDheader = ({
  followUser,
  profile: { profile, loader },

  social
}) => {
  const user = profile.user;
  return (
    <div className="gx-profile-banner">
      <div className="gx-profile-container">
        <div className="gx-profile-banner-top">
          <div className="gx-profile-banner-top-left">
            <div className="gx-profile-banner-avatar">
              <Avatar className="gx-size-90" alt="..." src={user.avatar} />
            </div>
            <div className="gx-profile-banner-avatar-info">
              <h2 className="gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light">
                {user && user.name}
              </h2>
              <p style={{ paddingBottom: "10px" }} className="gx-mb-0 gx-fs-lg">
                {profile.status}
              </p>

              <Button type="primary" ghost onClick={() => followUser(user._id)}>
                Add friend
              </Button>
              <h3>Socials :</h3>
              <ul className=" gx-social-link ">
                {social && social.instagram ? (
                  <li>
                    <Icon type="instagram" />
                  </li>
                ) : null}
                {social && social.linkedin ? (
                  <li>
                    <Icon type="linkedin" />
                  </li>
                ) : null}

                {social && social.twitter ? (
                  <li>
                    <Icon type="twitter" />
                  </li>
                ) : null}
                {social && social.facebook ? (
                  <li>
                    <Icon type="facebook" />
                  </li>
                ) : null}
                {social && social.youtube ? (
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
export default connect(mapStateToProps, { getProfileById, followUser })(
  profilebyIDheader
);
