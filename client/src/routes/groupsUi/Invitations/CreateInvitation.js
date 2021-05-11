import React, { Component, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getProfiles } from "../../../appRedux/actions/profile";

import { Card, Form, Input, Select, Button } from "antd";
const Option = Select.Option;
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

export class CreateInvitation extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.auth);
    console.log(props.profile.profiles);

    this.onChangeFromuser = this.onChangeFromuser.bind(this);
    this.onChangeTouser = this.onChangeTouser.bind(this);
    this.onChangeGroupname = this.onChangeGroupname.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeAccepted = this.onChangeAccepted.bind(this);
    this.props.getProfiles();
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      from_user: "",
      to_user: "",
      role: [],
      groupname: "",
      accepted: "",
      groups: []
    };
  }

  handleChange = e => {
    // Get the selected value which is a string
    var selectedId = e.target.value;
    console.log(selectedId);
    // Reverse look up on the array to find the full object
    var selected = this.state.admins.find(d => d.id == selectedId);
    console.log(selected);
    // Update state with object
    this.setState({ selected });
  };

  componentDidMount() {
    this.setState({
      admins: [],
      from_user: "sender user",
      to_user: "receiver user",
      groupname: "",
      role: ["membre"],
      accepted: false
    });
    this.props.getProfiles();
    axios
      .get("/group")
      .then(res => {
        this.setState({
          admins: [],
          from_user: localStorage.getItem("name"),
          to_user: "receiver user",
          groupname: "",
          role: ["membre"],
          accepted: false,
          groups: res.data
        });
        this.setState({
          groups: this.state.groups.filter(
            gp => gp.superadmin.name === localStorage.getItem("name")
          )
        });
        console.log(this.state);
      })
      .catch(err => alert(err));
  }
  onChangeFromuser(e) {
    this.setState({
      from_user: e.target.value
    });
    console.log(this.state.from_user);
  }
  onChangeTouser(e) {
    this.setState({
      to_user: e
    });
    console.log(this.state.to_user);
  }
  onChangeRole(e) {
    this.setState({
      role: e.target.value
    });
    console.log(this.state.role);
  }
  onChangeGroupname(e) {
    this.setState({
      groupname: e
    });
    console.log(this.state.groupname);
  }

  onChangeAccepted(e) {
    this.setState({
      accepted: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const invitation = {
      from_user: this.state.from_user,
      to_user: this.state.to_user,
      groupname: this.state.groupname,
      role: this.state.role,
      accepted: this.state.accepted
    };

    console.log(invitation);

    axios
      .post("/invitation/add", invitation)
      .then(res => console.log(res.data));
    window.location = "/invitation/invitation-list";
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { profiles } = this.props.profile;
    const Rprofiles = profiles.filter(
      pf => pf.user.name !== localStorage.getItem("name")
    );
    console.log(Rprofiles);
    return (
      <Card className="gx-card" title="Invite">
        <Form>
          <FormItem
            {...formItemLayout}
            label="Members"
            hasFeedback
            value={this.state.to_user}
          >
            {getFieldDecorator("status", {
              rules: [
                {
                  required: false,
                  message: "Please select Professional Status"
                }
              ]
            })(
              <Select placeholder="Please select Professional Status">
                {Rprofiles.map(profile => (
                  <Option
                    value={profile.user.name}
                    onClick={() => this.onChangeTouser(profile.user.name)}
                  >
                    {profile.user.name}
                  </Option>
                ))}
              </Select>
            )}
          </FormItem>
          <h3>To Join </h3>

          <FormItem
            {...formItemLayout}
            label="Group name"
            hasFeedback
            value={this.state.groupname}
          >
            <Select placeholder="Please select Group Name">
              {this.state.groups.map((group, index) => (
                <Option
                  value={group.name}
                  key={index}
                  onClick={() => this.onChangeGroupname(group.name)}
                >
                  {group.name}
                </Option>
              ))}
            </Select>
          </FormItem>
          <h3> As a :</h3>

          <FormItem
            {...formItemLayout}
            label="Member or Admin"
            hasFeedback
            value={this.state.role}
            onChange={this.onChangeRole}
          >
            <Input placeholder="Admin / Member " id="success" />
          </FormItem>
        </Form>
        <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
          Invite
        </Button>
        <br />
        <br />
      </Card>
    );
  }
}
const WrappedCreateInvitation = Form.create()(CreateInvitation);
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getProfiles })(
  WrappedCreateInvitation
);
