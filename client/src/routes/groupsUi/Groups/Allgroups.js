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
    <h2>Group Name </h2>
    <h4>{props.group.name}</h4>
    <h2>Group theme </h2>
    <h4>{props.group.theme}</h4>
    <h2>Group Super Admin </h2>
    <h4>{props.group.superadmin.name}</h4>
    <h4>
      <Link to={"/group/enter-group/" + props.group._id}>Group Link</Link>
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
      .get("http://localhost:5000/group/")
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
    axios.delete("http://localhost:5000/group/" + id).then(response => {
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
              <Button type="primary">Create a group</Button>
            </Link>
          </Row>
        </div>
        <div className="gx-main-content gx-pb">
          {" "}
          <Row>
            <Col span={24}>
              <ContainerHeader title="All groups" />
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
  flex-direction: column;
  margin: 100px;
  flex-wrap: wrap;
`;
