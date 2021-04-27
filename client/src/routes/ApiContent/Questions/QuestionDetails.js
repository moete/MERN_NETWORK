import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Input, Card, Tag, Button, Icon, Col, AutoComplete } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
    md: { span: 16 },
    lg: { span: 12 }
  }
};
const Answer = props => (
  <Card
    id="components-back-top-demo-custom"
    className="gx-card"
    style={{ width: 900 }}
  >
    <div>{props.answer.contentAnswer}</div>
    <div>
      <Card style={{ backgroundColor: "#CBD4D6", width: 700 }}>
        {" "}
        {props.answer.contentCode}
      </Card>
    </div>
    <div> {props.answer.answer_date.substr(0, 10)}</div>
  </Card>
);
export class QuestionDetails extends Component {
  constructor(props) {
    super(props);
    this.onChangeContentCode = this.onChangeContentCode.bind(this);
    this.onChangeContentAnswer = this.onChangeContentAnswer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      contentText: "",
      tags: "",
      questions: [],
      answers: [],
      contentCode: "",
      contentAnswer: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/question/6081f6cc4df0ec11fcedf88d`)
      .then(response => {
        this.setState({
          title: response.data.title,
          contentText: response.data.contentText,
          tags: response.data.tags,
          answers: response.data.answers,
          votes: response.data.votes
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
 
  onChangeContentAnswer(e) {
    this.setState({
      contentAnswer: e.target.value
    });
  }
  onChangeContentCode(e) {
    this.setState({
      contentCode: e.target.value
    });
  }
  AnswersList() {
    return this.state.answers.map(currentanswer => {
      return <Answer answer={currentanswer} />;
    });
  }
  myFunction = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
    var x = document.getElementById("comment");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
    const answer = {
      contentAnswer: this.state.contentAnswer,
      contentCode: this.state.contentCode,
    }

    console.log(answer);
        axios
          .post(
            "http://localhost:5000/question/addAnswer/6081f6cc4df0ec11fcedf88d",
            answer
          )
          .then(res => console.log(res.data));
        this.props.history.push("/question/question-details/6081f6cc4df0ec11fcedf88d");
      }
    }); 
    
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
          <Card title={this.state.owner} bordered={false}>
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
                {this.state.answers.length} answers
              </span>
            </li>
          </ul>

          <Col>
            <h1> {this.state.answers.length} Answers</h1> {this.AnswersList()}
          </Col>
          <>
            <Button
              type="dashed"
              className="gx-link gx-btn-link gx-ml-2"
              onClick={this.myFunction}
            >
              Your Answer <Icon type={this.state.expand ? "up" : "down"} />
            </Button>
            <div id="comment" style={{ display: "none" }}>
              <Form onSubmit={this.onSubmit} >
                <FormItem
                  {...formItemLayout}
                  label="content Text"
                  hasFeedback
                  value={this.state.contentAnswer}
                  onChange={this.onChangeContentAnswer}
                >
                  {getFieldDecorator("contentAnswer", {
                    rules: [{ required: false }]
                  })(<TextArea placeholder="your answer" />)}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  hasFeedback
                  label="Code"
                  value={this.state.contentCode}
                  onChange={this.onChangeContentCode}
                >
                  {getFieldDecorator("contentCode", {
                    rules: [{ required: false }]
                  })(<TextArea placeholder="code source" />)}
                </FormItem>
              </Form>
              <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                submit
              </Button>
            </div>
          </>
        </div>
     </div>
    );
  }
}

export default Form.create()(QuestionDetails);
