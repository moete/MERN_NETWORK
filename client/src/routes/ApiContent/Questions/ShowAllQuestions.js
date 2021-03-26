import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Row } from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import { Link } from "react-router-dom";

const Question = props => (
  <div class="gx-user-list">
    <img
      alt="avatar"
      src="https://via.placeholder.com/150x150"
      class="gx-avatar-img gx-avatar-img-lg gx-border-0"
    />
    <div class="gx-description">

      <span> <Link to={"/question/question-details/"+props.question._id}>  <h3>{props.question.title} </h3></Link></span>
      <h5>
        By <span class="gx-link">{props.question.owner}</span>
      </h5>
     
      <p class="gx-mb-1"> {props.question.contentText}</p>
      <ul class="gx-list-inline gx-btn-list">
        <li>
          <span class="gx-link gx-meta-like">
            <i class="icon icon-like-o gx-text-red"></i>
            {props.question.views} views
          </span>
        </li>
        <li>
          <span class="gx-link gx-meta-comment">
            <i class="icon icon-chat-new"></i>
            {props.question.answers} comments
          </span>
        </li>
        <li>
          <span class="gx-link gx-meta-tags">
          <i class="icon icon-alert"></i>
            {props.question.tags} 
          </span>
        </li>
        <li>
          <span><Link to={"/question/edit-question/"+props.question._id}>edit</Link></span>
        </li>
      </ul>
    </div>
  </div>
);
export default class ShowAllQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/question/")
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  questionList() {
    return this.state.questions.map(currentquestion => {
      return <Question question={currentquestion} />;
    });
  }

  render() {
    return (
      <div className="gx-main-content gx-pb-sm-4">
      <div>  <Row>
      <Link to={"/question/ask-question/"}>
          <Button type="primary">Ask a Question</Button>
          </Link>
        </Row>
        </div>
        <div className="gx-main-content gx-pb"> <Row>
          <Col span={24}>
            <ContainerHeader title="All Questions" />
          </Col>
          <Col span={24}>{this.questionList()}</Col>
        </Row>
        </div>
      </div>
    );
  }
}
