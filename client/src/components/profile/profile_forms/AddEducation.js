import React, { Component, Fragment } from "react";
import CircularProgress from "components/CircularProgress/index";
import { connect } from "react-redux";
import { addEducation } from "../../../appRedux/actions/profile";

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
class AddEducation extends Component {
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
      message: "Education Added Successfully"
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);

        this.props.addEducation(values);
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
          title="Add Your Education"
        />

        <Card
          className="gx-card "
          title="Add any school or bootcamp that you
          have attended"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="School">
              {getFieldDecorator("school", {
                rules: [{ required: true, message: "Please input School!" }]
              })(<Input placeholder="School or Bootcamp" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Degree">
              {getFieldDecorator("degree", {
                rules: [{ required: true, message: "Please input Degree!" }]
              })(<Input placeholder="Degree or Certificate" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Field of Study">
              {getFieldDecorator("fieldofstudy", {
                rules: [
                  { required: false, message: "Please input Field of Study !" }
                ]
              })(<Input placeholder="Field of Study" />)}
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

const WrappedAddEducation = Form.create()(AddEducation);
const mapStateToProps = state => ({
  authUser: state.auth,
  profile: state.profile.profile,
  loader: state.profile.loader,
  alertMessage: state.profile.alertMessage,
  showMessage: state.profile.showMessage
});
export default connect(mapStateToProps, { addEducation })(WrappedAddEducation);
