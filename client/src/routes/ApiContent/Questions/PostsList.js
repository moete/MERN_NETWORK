import React from 'react';
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const PostsList = (props) => {
    return (
        <Col>
        <Card>
          <div>
            <div className="gx-wall-content">
              <div className="gx-media gx-wall-user-info gx-flex-nowrap gx-align-items-center">
                <span className="ant-avatar gx-mr-3 gx-mb-2 gx-size-50 ant-avatar-circle ant-avatar-image">
                  <img src={props.question.owner.avatar}></img>
                </span>
                <div className="gx-media-body">
                  <h5 className="gx-wall-user-title">
                    By: {props.question.owner.name}
                  </h5>
                  <p className="gx-text-grey gx-fs-sm gx-mb-0">
                    {props.question.question_date.substring(0, 10)}
                  </p>
                </div>
              </div>
              <p></p>
    
              <div className="gx-wall-comment-box">
                <div className="gx-media gx-flex-nowrap gx-wall-user-info gx-mb-3">
                  <div className="gx-media-body">
                    <Link to={"/question/question-details/" + props.question._id}>
                      <h3 className="gx-wall-user-title">{props.question.title}</h3>
                    </Link>
                    <p className="gx-text-grey gx-fs-sm gx-mb-0">
                      {props.question.question_date.substring(0, 10)}
                    </p>
                    <p className="gx-mt-2">{parse(props.question.contentText)}</p>
                  </div>
                </div>
              </div>
              <div className="gx-wall-medialist">
                <div className="gx-gallery-grid gx-gallery-2">
                  <div className="gx-gallery-item">
                    <img
                      className="gx-img-fluid"
                      src={`/uploads/Posts/Screenshot-Post--${props.question.image}`}
                      alt="post"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="gx-flex-row gx-mb-2 gx-mb-xl-3">
                <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
                  <i className="icon icon-view-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"></i>
                  <span className="gx-d-inline-flex gx-vertical-align-middle">
                    {props.question.views} likes
                  </span>
                </p>
                <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
                  <i className="icon icon-like-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"></i>
                  <span className="gx-d-inline-flex gx-vertical-align-middle">
                    {props.question.votes} votes
                  </span>
                </p>
                <p className="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
                  <i className="icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"></i>
                  <span className="gx-d-inline-flex gx-vertical-align-middle">
                    {props.question.answers.length} comment
                  </span>
                </p>
              </div>
              <div className="gx-flex-row">
                <button
                  type="button"
                  className="ant-btn ant-btn-primary ant-btn-sm"
                >
                  <span>Like</span>
                </button>
                <Link to={"/question/question-details/" + props.question._id}>
                  <button
                    type="button"
                    className="ant-btn gx-btn-primary-light ant-btn-sm"
                  >
                    <span>Comment</span>
                  </button>
                </Link>
                <button
                  type="button"
                  className="ant-btn ant-btn-danger ant-btn-background-ghost ant-btn-sm"
                >
                  <span>Report</span>
                </button>
              </div>
              <div className="gx-wall-comment-box">
                <div className="gx-media gx-mb-2">
                  <span className="ant-avatar gx-mr-3 gx-size-36 ant-avatar-circle ant-avatar-image"></span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    );
}
export default PostsList;