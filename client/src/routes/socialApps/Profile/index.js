import React, { Component, Fragment, useEffect } from "react";
import { Col, Row, Avatar, Button } from "antd";
import Education from "../../../components/profile/Education/index";
import About from "../../../components/profile/About/index";
import Experience from "../../../components/profile/Experience/index";
import Friends from "../../../components/profile/Friends/index";
import Photos from "../../../components/profile/Photos/index";
import Contact from "../../../components/profile/Contact/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../../appRedux/actions/profile";
import { friendList } from "./data";
import { photoList } from "../Wall/data";
import Auxiliary from "../../../util/Auxiliary";
import ProfileHeader from "../../../components/profile/ProfileHeader/index";

import Spinner from "../../../components/Spinner";

const Profile = ({
  getCurrentProfile,
  auth: { authUser, user },
  profile: { profile, loader }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <Fragment>
      {profile !== null ? (
        <Auxiliary>
          <ProfileHeader />
          <div className="gx-profile-content">
            <Row>
              <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                <About profile={profile} />
                <Experience />
                <Education />
              </Col>

              <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                <Photos photoList={photoList} />

                <Row>
                  <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                    <Contact socials={profile.social} />
                  </Col>
                  <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                    <Friends friendList={friendList} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Auxiliary>
      ) : (
        <Fragment>
          <p>you have not yet setup a profile , please add some info</p>
          <Button type="dashed">
            <Link to="/create-profile" className="gx-link">
              Create Profile
            </Link>
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(Profile);
