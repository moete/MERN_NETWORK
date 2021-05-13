import React, { Component, useState } from "react";
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

export class CreateGroup extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTheme = this.onChangeTheme.bind(this);
    this.onChangeCoverphoto = this.onChangeCoverphoto.bind(this);
    this.onChangePrivacy = this.onChangePrivacy.bind(this);
    this.onChangeAdmins = this.onChangeAdmins.bind(this);
    this.onChangeMembers = this.onChangeMembers.bind(this);
    this.onChangeSuperadmin = this.onChangeSuperadmin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      theme: "",
      privacy: "",
      admins: [],
      members: [],
      coverphoto: "",
      superadmin: "",
      selected: null
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
      username: "test user",

      members: ["ali", "ahmed", "ayoub"],
      admins: ["ali", "ahmed", "ayoub"]
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }
  onChangeCoverphoto(e) {
    this.setState({
      coverphoto: e.target.value
    });
  }
  onChangePrivacy(e) {
    this.setState({
      privacy: e.target.value
    });
  }

  onChangeMembers(e) {
    this.setState({
      members: e.target.value
    });
  }
  onChangeAdmins(e) {
    this.setState({
      admins: e.target.value
    });
  }
  onChangeSuperadmin(e) {
    this.setState({ superadmin: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const group = {
      name: this.state.name,
      theme: this.state.theme,
      coverphoto: this.state.coverphoto,
      privacy: this.state.privacy,
      superadmin: this.state.superadmin,
      admins: this.state.admins,
      members: this.state.members
    };

    console.log(group);

    axios
      .post("https://networkymern.herokuapp.com/group/add", group)
      .then(res => console.log(res.data));

    window.location = "/group/group-list";
  }

  render() {
    return (
      <Card className="gx-card" title="Add Group">
        <Form>
          <FormItem
            {...formItemLayout}
            label="Name"
            hasFeedback
            value={this.state.name}
            onChange={this.onChangeName}
          >
            <Input placeholder="Name this group" id="success" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Theme"
            hasFeedback
            value={this.state.theme}
            onChange={this.onChangeTheme}
          >
            <Input
              placeholder="Web development,Mobile development,Informations security ..."
              id="success"
            />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Cover Photo"
            hasFeedback
            value={this.state.coverphoto}
            onChange={this.onChangeCoverphoto}
          >
            <Input type="file" id="success" />
          </FormItem>

          <br />
          <FormItem
            {...formItemLayout}
            label="Privacy"
            hasFeedback
            value={this.state.privacy}
            onChange={this.onChangePrivacy}
          >
            <Input
              placeholder="type private to create a private group"
              id="success"
            />
            <h4>the default value of privacy is public .</h4>
          </FormItem>
        </Form>
        <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
          Create
        </Button>
        <br />
        <br />
        The Super Admin of this group will be you.
      </Card>
    );
  }
}

export default CreateGroup;
