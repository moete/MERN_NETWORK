import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Tabs, Card, Col, Icon, Row } from "antd";
import ProfileItem from "./ProfileItem";
import Followings from "./followings";
import Followers from "./followers";
import { connect } from "react-redux";
import CircularProgress from "../../../components/CircularProgress/index";
import { getProfiles } from "../../../appRedux/actions/profile";
const Profiles = ({
  userfollowings,
  user,
  getProfiles,
  profile: { profiles, loader }
}) => {
  useEffect(() => {
    getProfiles();
    if (isLoading) {
      setTimeout(() => {
        isLoading = false;
      }, 5000);
    }
  }, []);
  const { TabPane } = Tabs;
  const newList = profiles.filter(profile => profile.user._id !== user._id);

  let isLoading = true;

  return (
    <Card className="gx-card" title="Friends">
      <Tabs className="gx-main-content" defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Following
            </span>
          }
          key="1"
        >
          <Row>
            {Profiles.length > 0 ? (
              newList.map(
                profile => (
                  console.log(profile),
                  (<Followings key={profile._id} profile={profile} />)
                )
              )
            ) : (
              <h4>No profiles Found ...</h4>
            )}
          </Row>
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Followers
            </span>
          }
          key="2"
        >
          <Row>
            {Profiles.length > 0 ? (
              newList.map(profile => (
                <Followers key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles Found ...</h4>
            )}
          </Row>
        </TabPane>
      </Tabs>
    </Card>
  );
};

Profiles.propTypes = {};
const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user
  //userfollowings: state.auth.user.following
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
