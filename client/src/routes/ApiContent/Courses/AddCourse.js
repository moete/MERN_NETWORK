import React, { Component } from "react";
import { Button, Input, Card, Form, Icon, Upload } from "antd";
import axios from "axios";
import "./";

const FormItem = Form.Item;
const { TextArea } = Input;
export class AddCourse extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeRequirments = this.onChangeRequirments.bind(this);
    this.onChangeChapters = this.onChangeChapters.bind(this);
    this.onChangeTechnologies = this.onChangeTechnologies.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      requirements: "",
      chapters: "",
      technologies: "",
      originalname: ""
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeRequirments(e) {
    this.setState({
      requirements: e.target.value
    });
  }
  onChangeChapters(e) {
    this.setState({
      chapters: e.target.value
    });
  }
  onChangeTechnologies(e) {
    this.setState({
      technologies: e.target.value
    });
  }
  onChangeFile(e) {
    this.setState({
      originalname: e.target.files[0]
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        const formData = new FormData();

        formData.append("title", this.state.title);
        formData.append("description", this.state.description);
        formData.append("requirements", this.state.requirements);
        formData.append("technologies", this.state.technologies);
        formData.append("image", this.state.originalname);

        console.log(formData);
        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        axios
          .post("/course/addCourse", formData, config)
          .then(res => console.log(res.data));
        this.props.history.push("/courses/courses-list");

        //   window.location = "/courses/courses-list";
      }
    });
  };
  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const formItemLayout = {
      labelCol: { xs: 24, sm: 6 },
      wrapperCol: { xs: 24, sm: 14 }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Card className="gx-card" title="Create a Course">
          <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
              label="Description"
              hasFeedback
              value={this.state.description}
              onChange={this.onChangeDescription}
            >
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "Description is missing !",
                    min: 6,
                    message: "Description must have 6+ characters long"
                  }
                ]
              })(
                <TextArea rows={6} placeholder="Description .." id="success" />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="requirements"
              hasFeedback
              value={this.state.requirements}
              onChange={this.onChangeRequirments}
            >
              {getFieldDecorator("requirments", {
                rules: [
                  {
                    required: true,
                    message: "requirements is missing !"
                  }
                ]
              })(<Input placeholder="requirments" />)}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="technologies"
              hasFeedback
              value={this.state.technologies}
              onChange={this.onChangeTechnologies}
            >
              {getFieldDecorator("technologies", {
                rules: [
                  {
                    required: true,
                    message: "technologies is missing !"
                  }
                ]
              })(<Input placeholder="technologies" />)}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Image"
              onChange={this.onChangeFile}
            >
              {getFieldDecorator("image", {
                rules: [
                  {
                    required: true,
                    message: "Logo is missing !"
                  }
                ]
              })(
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
              )}
            </FormItem>
          </Form>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
            add
          </Button>
        </Card>
      </>
    );
  }
}

export default Form.create()(AddCourse);
