import React, { Component } from "react";
import axios from "axios";
import { Card, Form, Input, Button } from "antd";

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

export class UpdateQuestion extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContentText = this.onChangeContentText.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      contentText: '',
      tags: '',
      id: ''

    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/question/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          contentText: response.data.contentText,
          tags: response.data.tags
        })
      })
      .then(response => console.log("xxx" + this.state.id))
      .catch(function(error) {
        console.log("ERROR IS " + error);
      });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeContentText(e) {
    this.setState({
      contentText: e.target.value
    });
  }
  onChangeTags(e) {
    this.setState({
      tags: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const question = {
      title: this.state.title,
      contentText: this.state.contentText,
      tags: this.state.tags
    };

    console.log(question);

    axios
      .post(
        'http://localhost:5000/question/update/' + this.props.match.params.id,
        question
      )
      .then(res => console.log(res.data));

    window.location = "question/my-posts";
  }

  render() {
    return (
      <Card className="gx-card" title="Edit your post">
        <Form>
          <FormItem
            {...formItemLayout}
            label="Title"
            hasFeedback
            value={this.state.title}
            onChange={this.onChangeTitle}
            //   validateStatus="success"
          >
            <Input
              value={this.state.title}
              placeholder="I'm the title"
              id="success"
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Body"
            hasFeedback
            validateStatus="success"
            value={this.state.contentText}
            onChange={this.onChangeContentText}
          >
            <TextArea rows={6} value={this.state.contentText} id="success" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Tags"
            hasFeedback
            validateStatus="success"
            value={this.state.tags}
            onChange={this.onChangeTags}
          >
            <Input
              value={this.state.tags}
              placeholder="Tags & technologies"
              id="success"
            />
          </FormItem>
        </Form>
        <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
          Edit your post
        </Button>
        <p> XXX {this.state.id}</p>
      </Card>
    );
  }
}

export default UpdateQuestion;
