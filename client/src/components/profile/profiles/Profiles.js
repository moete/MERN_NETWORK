import React, { Fragment, fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Tabs, Card, Col, Icon, Row } from "antd";
import ProfileItem from "./ProfileItem";
import { connect } from "react-redux";
import CircularProgress from "../../../components/CircularProgress/index";
import { getProfiles } from "../../../appRedux/actions/profile";
const Profiles = ({ getProfiles, profile: { profiles, loader } }) => {
  useEffect(() => {
    getProfiles();
    if (isLoading) {
      setTimeout(() => {
        isLoading = false;
      }, 5000);
    }
  }, []);
  const { TabPane } = Tabs;

  let isLoading = true;
  return (
    <Card className="gx-card" title="Friends">
      <Tabs className="gx-main-content" defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              All friends
            </span>
          }
          key="1"
        >
          {Profiles.length > 0 ? (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h4>No profiles Found ...</h4>
          )}
        </TabPane>
      </Tabs>
    </Card>
  );
};

Profiles.propTypes = {};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
