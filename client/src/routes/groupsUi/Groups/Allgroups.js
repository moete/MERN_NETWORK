import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
const Group = props => (
  <InfoContainer>
    <Avatar alt="Group IMG" src={props.group.coverphoto} />

    <h3>{props.group.name}</h3>

    <h1>Group Theme {props.group.theme}</h1>

    <p>
      <u>You are the super admin of this group</u>
    </p>

    <h4>
      <Link to={"/group/enter-group/" + props.group._id}>
        <mark> ==> Group Link </mark>
      </Link>
    </h4>

    <div>
      {" "}
      <Button
        variant="contained"
        color="primary"
        href="#"
        onClick={() => {
          props.deleteGroup(props.group._id);
        }}
      >
        Delete
      </Button>
    </div>
  </InfoContainer>
);

export default class Allgroups extends Component {
  constructor(props) {
    super(props);
    this.deleteGroup = this.deleteGroup.bind(this);

    this.state = {
      groups: [],
      superadmin: "",
      username: localStorage.getItem("name")
    };
  }
  componentDidMount() {
    axios
      .get("/group/")
      .then(response => {
        this.setState({ groups: response.data });
        this.setState({
          groups: this.state.groups.filter(
            gp => gp.superadmin.name === localStorage.getItem("name")
          )
        });
        console.log(this.state.groups);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteGroup(id) {
    axios.delete("/group/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      groups: this.state.groups.filter(el => el._id !== id)
    });
  }

  groupList() {
    return this.state.groups.map(currentgroup => {
      return (
        <Group
          group={currentgroup}
          deleteGroup={this.deleteGroup}
          key={currentgroup._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="gx-main-content gx-pb-sm-4">
        <div>
          {" "}
          <Row>
            <Link to={"/group/add-group/"}>
              <Button variant="contained" color="primary" disableElevation>
                Create a group
              </Button>
            </Link>
          </Row>
        </div>
        <div className="gx-main-content gx-pb">
          {" "}
          <Row>
            <Col span={24}>
              <ContainerHeader title="My groups" />
            </Col>
            <Col span={24}>{this.groupList()} </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const InfoContainer = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  flex-wrap: nowrap;

  align-content: space-between;
  flex-direction: column;
`;
