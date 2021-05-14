import React, { Component } from "react";
import axios from "axios";
import { Card, Form, Input, Button, Upload, Icon } from "antd";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
const headers = {
  "Content-type": "multipart/form-data; boundary=-------------573cf973d5228"
};
export class CreateQuestion extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContentText = this.onChangeContentText.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      contentText: "",
      tags: "",
      originalname: ""
    };
  }
  onChangeFile(e) {
    this.setState({
      originalname: e.target.files[0]
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeContentText= data => {
    console.log("Called");
    this.setState({
      contentText:  data.getData()
    });
  }
  onChangeTags(e) {
    this.setState({
      tags: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        const formData = new FormData();

        formData.append("title", this.state.title);
        formData.append("contentText", this.state.contentText);
        formData.append("tags", this.state.tags);
        formData.append("image", this.state.originalname);

        console.log(formData);
        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        axios
          .post("http://localhost:5000/question/add", formData, config)
          .then(res => console.log(res.data));
       this.props.history.push("/question/my-posts");
        //window.location = "/question/my-posts";
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Card className="gx-card" title="Ask a question">
          <Form onSubmit={this.onSubmit} encType="multipart/form-data">
            <FormItem
              {...formItemLayout}
              label="Title"
              hasFeedback
              value={this.state.title}
              onChange={this.onChangeTitle}
            >
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Title is missing !"
                  }
                ]
              })(<Input placeholder="I'm the title" />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Body"
              hasFeedback
              value={this.state.contentText}
              onChange={this.onChangeContentText}
            >
              {getFieldDecorator("Body", {
                rules: [
                  {
                    required: true,
                    message: "content text is missing !",
                   
                  }
                ]
              })(
                <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
                onReady={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.onChangeContentText(editor);
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Tags"
              hasFeedback
              value={this.state.tags}
              onChange={this.onChangeTags}
            >
              {getFieldDecorator("tags", {
                rules: [
                  {
                    required: true,
                    message: "Please enter at least one tag !"
                  }
                ]
              })(<Input placeholder="Tags & technologies" id="success" />)}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Screenshot"
              onChange={this.onChangeFile}
            >
              <div className="dropbox">
                {
                  <Upload.Dragger
                    name="files"
                    action="/upload.do"
                    listType="picture"
                  >
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                }
              </div>
            </FormItem>
          </Form>

          <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
            Post your question
          </Button>
        </Card>
      </>
    );
  }
}

export default Form.create()(CreateQuestion);
