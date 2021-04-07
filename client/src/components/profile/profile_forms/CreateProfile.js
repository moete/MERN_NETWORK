import React, { Component, Fragment, useState } from "react";
import { connect } from "react-redux";
import {
  createProfile,
  getCurrentProfile
} from "../../../appRedux/actions/profile";
import { showAuthLoader } from "../../../appRedux/actions/Auth";
import {
  Button,
  Card,
  Form,
  Icon,
  Row,
  Col,
  InputNumber,
  Radio,
  Rate,
  Select,
  Input,
  Slider,
  Switch,
  Upload,
  AutoComplete
} from "antd";

import "./otherFormControls.less";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const AutoCompleteOption = AutoComplete.Option;
class CreateProfile extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    expand: false
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };
  myFunction = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.showAuthLoader();
        this.props.createProfile(values);
        if (this.props.profile !== null) {
          this.props.history.push("/social-apps/profile");
        }
      }
    });
  };
  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: { xs: 24, sm: 6 },
      wrapperCol: { xs: 24, sm: 14 }
    };
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <Card className="gx-card" title="Edit Your Profile">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Status" hasFeedback>
            {getFieldDecorator("status", {
              rules: [
                { required: true, message: "Please select Professional Status" }
              ]
            })(
              <Select placeholder="Please select Professional Status">
                <Option value="Developer">Developer</Option>
                <Option value="Junior Developer">Junior Developer</Option>
                <Option value="Senior Developer">Senior Developer</Option>
                <Option value="Manager">Manager</Option>
                <Option value="Student or Learning">Student or Learning</Option>
                <Option value="Instructor">Instructor or Teacher</Option>
                <Option value="Intern">Intern</Option>
                <Option value="Other">Other</Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Company">
            {getFieldDecorator("company", {
              rules: [{ required: false, message: "Please input Company!" }]
            })(
              <Input placeholder="Could be your own company or one you work for" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Website">
            {getFieldDecorator("website", {
              rules: [{ required: false, message: "Please input Website!" }]
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
              >
                <Input placeholder="Could be your own or a company website" />
              </AutoComplete>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Location">
            {getFieldDecorator("location", {
              rules: [{ required: false, message: "Please input Location!" }]
            })(<Input placeholder="City & state suggested (eg. Boston, MA)" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Skills">
            {getFieldDecorator("skills", {
              rules: [
                {
                  required: true,
                  message:
                    "Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                }
              ]
            })(
              <Input placeholder="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="GithubUsername">
            {getFieldDecorator("githubusername", {
              rules: [
                { required: false, message: "Please input GithubUsername!" }
              ]
            })(
              <Input
                placeholder="If you want your latest repos and a Github link, include your
            username"
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Bio">
            {getFieldDecorator("bio", {
              rules: [
                { required: true, message: "Tell us a little about yourself" }
              ]
            })(<Input placeholder="A short bio of yourself" />)}
          </FormItem>
          <Row>
            <Col span={20} className="gx-text-right">
              <Button
                type="dashed"
                className="gx-link gx-btn-link gx-ml-2"
                onClick={this.myFunction}
              >
                Add Social Network Links{" "}
                <Icon type={this.state.expand ? "up" : "down"} />
              </Button>
            </Col>
          </Row>
          <div id="myDIV" style={{ display: "none" }}>
            <FormItem {...formItemLayout} label="Twitter">
              {getFieldDecorator("twitter", {
                rules: [{ required: false }]
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                >
                  <Input placeholder="Twitter URL" />
                </AutoComplete>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Instagram">
              {getFieldDecorator("instagram", {
                rules: [{ required: false }]
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                >
                  <Input placeholder="Instagram URL" />
                </AutoComplete>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Facebook">
              {getFieldDecorator("facebook", {
                rules: [{ required: false }]
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                >
                  <Input placeholder="Facebook URL" />
                </AutoComplete>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="LinkedIn">
              {getFieldDecorator("linkedin", {
                rules: [{ required: false }]
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                >
                  <Input placeholder="LinkedIn URL" />
                </AutoComplete>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Youtube">
              {getFieldDecorator("youtube", {
                rules: [{ required: false }]
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                >
                  <Input placeholder="Youtube URL" />
                </AutoComplete>
              )}
            </FormItem>
          </div>
          <FormItem wrapperCol={{ xs: 24, sm: { span: 14, offset: 6 } }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const WrappedCreateProfile = Form.create()(CreateProfile);
const mapStateToProps = state => ({
  authUser: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
  showAuthLoader
})(WrappedCreateProfile);
