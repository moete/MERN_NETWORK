import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../../../appRedux/actions/Auth";
import { connect } from "react-redux";

//xl={12} lg={24} md={12} sm={24} xs={24}
import { Avatar, Tabs, Card, Col, Icon, Row } from "antd";
const followers = ({
  followUser,
  unfollowUser,
  userfollowers,
  profile: {
    user: { _id, name, avatar },
    status,
    company
  }
}) => {
  console.log(userfollowers);
  const { Meta } = Card;
  return (
    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
      <Card
        actions={[
          <Icon
            type="user-add"
            key="edit"
            onClick={() => {
              followUser(_id);
            }}
          />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          avatar={
            <Link to={`/profile/${_id}`} className="gx-link">
              <Avatar src={avatar} />
            </Link>
          }
          title={<p>{name}</p>}
          description={
            <p>
              {status} -- At {company}
            </p>
          }
        />
      </Card>
    </Col>
  );
};

followers.propTypes = {};
const mapStateToProps = state => ({
  userfollowers: state.auth.user.followers
});
export default connect(mapStateToProps, { unfollowUser, followUser })(
  followers
);
