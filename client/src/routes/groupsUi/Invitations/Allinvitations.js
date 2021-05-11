import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const Invitation = props => (
  <InvContainer>
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2 scope="row">Sent to : </h2>
      <h4>{props.invitation.to_user}</h4>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2 scope="row">To Join :</h2>
      <h4>{props.invitation.groupname}</h4>
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2 scope="row">To become an :</h2>
      <h4>{props.invitation.role[0]}</h4>
    </div>

    <Button
      variant="contained"
      color="primary"
      href="#"
      onClick={() => {
        props.deleteInvitation(props.invitation._id);
      }}
    >
      Cancel
    </Button>
  </InvContainer>
);

export default class Allinvitations extends Component {
  constructor(props) {
    super(props);
    this.deleteInvitation = this.deleteInvitation.bind(this);

    this.state = {
      invitations: [],
      superadmin: ""
    };
  }
  componentDidMount() {
    axios
      .get("/invitation/")
      .then(response => {
        this.setState({ invitations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteInvitation(id) {
    axios.delete("/invitation/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      invitations: this.state.invitations.filter(el => el._id !== id)
    });
  }

  invitationList() {
    return this.state.invitations.map(currentinvitation => {
      return (
        <Invitation
          invitation={currentinvitation}
          deleteInvitation={this.deleteInvitation}
          key={currentinvitation._id}
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
            <Link to={"/invitation/add-invitation"}>
              <Button type="primary">Invite</Button>
            </Link>
          </Row>
        </div>
        <div className="gx-main-content gx-pb">
          {" "}
          <Row>
            <Col span={24}>
              <ContainerHeader title="All Invitations" />
            </Col>
            <Col span={24}>{this.invitationList()} </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const InvContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
