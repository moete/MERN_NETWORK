import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Tag, BackTop } from "antd";

export class QuestionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contentText: '',
      tags: '',
      answers: [],
      questions: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/question/6063502e12feaf53cc2dfd79`)
      .then(response => {
        this.setState({
          title: response.data.title,
          contentText: response.data.contentText,
          tags: response.data.tags,
          answers: response.data.answer,
          votes: response.data.votes
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
   AnswersList(props) {
    const answers =this.state.answers.map();
    const listItems = answers.map((answer) =>
      <li>{answer}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  render() {
    return (
      <div class="gx-user-list">
        <img
          alt="avatar"
          src="https://via.placeholder.com/150x150"
          class="gx-avatar-img gx-avatar-img-lg gx-border-0"
        />
        <div class="gx-description">
          <span>
            {" "}
            <Link to={"/question/question-details/"}>
              {" "}
              <h3>{this.state.title} </h3>
            </Link>
          </span>
          <h5>
            By <span class="gx-link">{this.state.owner}</span>
          </h5>
          <Tag color="#87d068">{this.state.tags}</Tag>
          <Card
            title={this.state.owner}
            bordered={false}
           
          >
            <div class="gx-mb-1"> {this.state.contentText}</div>
          </Card>
          <ul class="gx-list-inline gx-btn-list">
            <li>
              <span class="gx-link gx-meta-like">
                <i class="icon icon-like-o gx-text-red"></i>
                {this.state.votes} votes
              </span>
            </li>
            <li>
              <span class="gx-link gx-meta-comment">
                <i class="icon icon-chat-new"></i>
                {this.state.answers} comments
              </span>
            </li>
          </ul>
         
          <Card
            id="components-back-top-demo-custom"
            title="User:"
            className="gx-card"
            style={{ width: 600 }}
          >
            <BackTop>

            </BackTop>
            {this.state.answers}
          </Card>{" "}
        </div>
      </div>
    );
  }
}

export default QuestionDetails;
