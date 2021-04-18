import React, { Component } from "react";
import axios from "axios";
import { Card, Form, Input, Button,  Upload, Icon } from "antd";

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
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      contentText: '',
      tags: '',
      originalname: ''
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/question/',this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          contentText: response.data.contentText,
          tags: response.data.tags,
          originalname: response.data.originalname,
        });
      })
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
  onChangeFile(e) {
    this.setState({
      originalname: e.target.files[0]
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("contentText", this.state.contentText);
    formData.append("tags", this.state.tags);
    formData.append("image", this.state.originalname);

    console.log(formData);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  };
    axios
      .post(
        'http://localhost:5000/question/update/',this.props.match.params.id,formData,config
      )
      .then(res => console.log(res.data));
      window.location = "/question/my-posts";
    }

  render() {
    return (
      <>
        <Card className="gx-card" title="Edit your post">
        <Form onSubmit={this.onSubmit} encType="multipart/form-data">
            <FormItem
              {...formItemLayout}
             
              label="Title"
              hasFeedback
              value={this.state.title}
              onChange={this.onChangeTitle}
            >
              <Input
              required
               value={this.state.title}
               onChange={this.onChangeTitle}
               />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Body"
              hasFeedback
              value={this.state.contentText}
              onChange={this.onChangeContentText}
            >
              <TextArea
               value={this.state.contentText}
               onChange={this.onChangeContentText}
                rows={6}
                required
              />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Tags"
              hasFeedback
              value={this.state.tags}
              onChange={this.onChangeTags}
            >
              <Input 
              value={this.state.tags}
              onChange={this.onChangeTags}
             required/>
            </FormItem>
          
        <FormItem
            {...formItemLayout}
            label="Screenshot"
            onChange={this.onChangeFile}
          >
            <div className="dropbox">
              {(
                <Upload.Dragger name="files" action="/upload.do" listType="picture">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox"/>
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>
                
              )}
            </div>
          </FormItem>

        
          </Form>
 <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
           Edit
          </Button>
       </Card>
      </>
    );
  }
}

export default UpdateQuestion;
