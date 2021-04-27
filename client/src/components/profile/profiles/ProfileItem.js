import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//xl={12} lg={24} md={12} sm={24} xs={24}
import { Avatar, Tabs, Card, Col, Icon, Row } from "antd";
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company
  }
}) => {
  const { Meta } = Card;
  return (
    <Col xl={8} lg={12} md={12} sm={24} xs={24}>
      <Link to={`/profile/${_id}`} className="gx-link">
        <Card
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />
          ]}
        >
          <Meta
            avatar={<Avatar src={avatar} />}
            title={name}
            description={status}
          />
        </Card>
      </Link>
    </Col>
  );
};

ProfileItem.propTypes = {};

export default ProfileItem;
