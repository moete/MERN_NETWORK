import React, { Component } from "react";
import { Col, Card, Row, Input } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
const Question = props => (
  <Col span={9}>
    <Card
      title={<i class="icon icon-alert">{props.question.tags} </i>}
      extra={
        <span className="gx-link">
          <Link to={"/question/question-details/" + props.question._id}>
            More
          </Link>
        </span>
      }
      style={{ width: 390 }}
    >
      <div class="gx-user-list">
        <img
          alt="avatar"
          src={props.question.owner.avatar}
          class="gx-avatar-img gx-avatar-img-lg gx-border-0"
        />
        <div class="gx-description">
          <span>
            {" "}
            <Link to={"/question/question-details/" + props.question._id}>
              {" "}
              <h3>{props.question.title} </h3>
            </Link>
          </span>
          <h5>
            By <span class="gx-link">{props.question.owner.name}</span>
          </h5>

          <p class="gx-mb-1"> {props.question.contentText}</p>
          <ul class="gx-list-inline gx-btn-list">
            <li>
              <span class="gx-link gx-meta-like">
                <i class="icon icon-like-o gx-text-red"></i>
                {props.question.views} likes
              </span>
            </li>
            <li>
              <span class="gx-link gx-meta-comment">
                <i class="icon icon-chat-new" />
                {props.question.answers.length} comments
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Card>{" "}
  </Col>
);
const { Search } = Input;

export class FiltreByTags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      search: ""
    };
  }

  componentDidMount() {
    axios
      .get("/question/")
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  questionList() {
    let filtredPosts = this.state.questions.filter(currentquestion => {
      return (
        currentquestion.tags
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return filtredPosts.map(currentquestion => {
      return <Question question={currentquestion} />;
    });
  }
  onSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }
  render() {
    return (
      <>
        <Col>
          <Search
            placeholder="tap a tag ..."
            value={this.state.search}
            onChange={this.onSearch.bind(this)}
          />
        </Col>
        <Row gutter={[32, 48]}>{this.questionList()}</Row>
      </>
    );
  }
}

export default FiltreByTags;
