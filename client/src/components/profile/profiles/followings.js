import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../../../appRedux/actions/Auth";
import { connect } from "react-redux";

//xl={12} lg={24} md={12} sm={24} xs={24}
import { Avatar, Tabs, Card, Col, Icon, Row, Popconfirm, message } from "antd";
const followings = ({ followUser, unfollowUser, userfollowings, profile }) => {
  const { Meta } = Card;
  const {
    user: { _id, name, avatar },
    status,
    company
  } = profile;
  console.log(profile);
  function confirm(e) {
    console.log(_id);
    unfollowUser(_id);

    message.success("you unfollowed  ");
  }
  console.log(_id);
  function cancel(e) {
    console.log(e);
    message.error("you still following   ");
  }
  // console.log(userfollowings);
  return (
    <Col style={{ width: "auto" }} xl={8} lg={12} md={12} sm={24} xs={24}>
      <Card
        actions={[
          <Popconfirm
            title="you are about to unfollow the selected user hit no to cancel"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Icon type="user-delete" key="edit" />
          </Popconfirm>,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          avatar={
            <Link
              to={`/profile/${_id}`}
              to={{
                pathname: `/profile/${_id}`,
                ownProps: { profile: profile }
              }}
              className="gx-link"
            >
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

followings.propTypes = {};
const mapStateToProps = state => ({
  //userfollowings: state.auth.user.following
});
export default connect(null, { unfollowUser, followUser })(followings);
