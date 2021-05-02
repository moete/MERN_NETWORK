import React, { Component, Fragment, useEffect } from "react";
import { Col, Row } from "antd";
import Education from "../Education/index";
import Event from "../Events/index";
import About from "../About/index";
import Experience from "../Experience/index";
import ProfileGithub from "../ProfileGithub/index";

import Contact from "../Contact/index";
import { Avatar, Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileById } from "../../../appRedux/actions/profile";

import { friendList } from "../../../routes/socialApps/Profile/data";
import { photoList } from "../../../routes/socialApps/Wall/data";
import Friends from "../Friends/index";
import Photos from "../Photos/index";
import Auxiliary from "../../../util/Auxiliary";
import ProfilebyIDheader from "../profilebyIDheader/index";

import Spinner from "../../Spinner";

const ProfilebyID = ({
  getProfileById,
  auth: { authUser, user },
  profile: { profile, loader },
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);
  return (
    <Fragment>
      {profile !== null ? (
        <Auxiliary>
          <ProfilebyIDheader profile={profile} />
          <div className="gx-profile-content">
            <Row>
              <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                <About profile={profile} />
                <Experience />
                <Education />
              </Col>

              <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                {profile.githubusername && (
                  <ProfileGithub username={profile.githubusername} />
                )}
                <Row>
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
export default connect(mapStateToProps, { getProfileById })(ProfilebyID);
