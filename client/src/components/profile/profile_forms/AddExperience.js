import React, { Component, Fragment } from "react";
import CircularProgress from "components/CircularProgress/index";
import { connect } from "react-redux";
import { addExperience } from "../../../appRedux/actions/profile";

import {
  Button,
  Card,
  Form,
  Row,
  Tooltip,
  Col,
  notification,
  PageHeader,
  DatePicker,
  Select,
  Switch,
  Checkbox,
  Input,
  Icon,
  AutoComplete,
  message
} from "antd";

import "./otherFormControls.less";

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
class AddExperience extends Component {
  state = {
    disabled: false
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled
    });
  };
  openNotificationWithIcon = type => {
    notification[type]({
      message: "Experience Added Successfully"
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);

        this.props.addExperience(values);
        this.openNotificationWithIcon("success");
        this.props.history.push("/social-apps/profile");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;

    const formItemLayout = {
      labelCol: { xs: 24, sm: 6 },
      wrapperCol: { xs: 24, sm: 14 }
    };
    const formTailLayout = {
      wrapperCol: { xs: 24, sm: 14 }
    };

    return (
      <Fragment>
        <PageHeader
          className="gx-card"
          onBack={() => this.props.history.push("/social-apps/profile")}
          title="Add An Experience"
        />

        <Card
          className="gx-card"
          title="Add any developer/programming
        positions that you have had in the past"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="Job Title">
              {getFieldDecorator("title", {
                rules: [{ required: true, message: "Please input Job Title!" }]
              })(<Input placeholder="" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Company">
              {getFieldDecorator("company", {
                rules: [{ required: true, message: "Please input Company!" }]
              })(
                <Input placeholder="Could be your own company or one you work/worked for" />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="Location">
              {getFieldDecorator("location", {
                rules: [{ required: false, message: "Please input Location!" }]
              })(
                <Input placeholder="City & state suggested (eg. Boston, MA)" />
              )}
            </FormItem>
            <Form.Item {...formItemLayout} label="From Date">
              {getFieldDecorator("from", {
                rules: [
                  {
                    required: true,
                    message: "Please select From date!"
                  }
                ]
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label={
                <span>
                  Current&nbsp;
                  <Tooltip title="Is this your current Job?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator("current", { valuePropName: "checked" })(
                <Switch onClick={this.toggle} />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="To Date">
              {getFieldDecorator("to", {
                rules: [
                  {
                    required: false,
                    message: "Please select To date!"
                  }
                ]
              })(<DatePicker disabled={this.state.disabled} />)}
            </Form.Item>
            <FormItem {...formItemLayout} label="Job Description">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: false
                  }
                ]
              })(
                <TextArea
                  placeholder="Tell us more about it"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              )}
            </FormItem>
            <FormItem wrapperCol={{ xs: 24, sm: { span: 14, offset: 6 } }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItem>
          </Form>
        </Card>
      </Fragment>
    );
  }
}

const WrappedAddExperience = Form.create()(AddExperience);
const mapStateToProps = state => ({
  authUser: state.auth,
  profile: state.profile.profile,
  loader: state.profile.loader,
  alertMessage: state.profile.alertMessage,
  showMessage: state.profile.showMessage
});
export default connect(mapStateToProps, { addExperience })(
  WrappedAddExperience
);
