import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Tabs, Card, Col, Icon, Row } from "antd";
import ProfileItem from "./ProfileItem";
import Followings from "./followings";
import Followers from "./followers";
import { connect } from "react-redux";
import CircularProgress from "../../../components/CircularProgress/index";
import { getProfiles } from "../../../appRedux/actions/profile";
import { getProfileById } from "../../../appRedux/actions/profile";
const Profiles = ({
  userfollowings,
  getFollowings,
  getFollowers,
  user,
  listfollowings,
  listfollowers,
  getProfiles,
  profile: { profiles, loader }
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getProfiles();

    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  const { TabPane } = Tabs;
  const newList = profiles.filter(profile => profile.user._id !== user._id);
  console.log(listfollowings);
  /*if (user && user.following !== undefined) {
    const array = user.following;
    const promises = array.map(n =>
      fetch(`https://networkymern.herokuapp.com/api/profile/user/${n}`)
        .then(response => response.json())
        .then(user => {
          following.push(user);
          // console.log(following);
        })
    );
  }*/
  return (
    <Card className="gx-card" title="Friends">
      <Tabs className="gx-main-content" defaultActiveKey="1">
        <TabPane tab={<span>All users</span>} key="1">
          <Row style={{ justifyContent: "center" }}>
            {isLoaded && newList.length > 0 ? (
              <Row>
                {newList.map(profile => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))}
              </Row>
            ) : (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            )}
          </Row>
        </TabPane>
        <TabPane tab={<span>Following</span>} key="2">
          <Row>
            {isLoaded && listfollowings.length > 0 ? (
              <Row>
                {listfollowings.map(profile => (
                  <Followings key={profile[0]._id} profile={profile[0]} />
                ))}
              </Row>
            ) : (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            )}
          </Row>
        </TabPane>
        <TabPane tab={<span>Followers</span>} key="3">
          <Row>
            {isLoaded && listfollowers.length > 0 ? (
              <Row>
                {listfollowers.map(profile => (
                  <Followers key={profile[0]._id} profile={profile[0]} />
                ))}
              </Row>
            ) : (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
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
  user: state.auth.user,
  listfollowings: state.profile.followings,
  listfollowers: state.profile.followers
});

export default connect(mapStateToProps, {
  getProfileById,
  getProfiles
})(Profiles);
