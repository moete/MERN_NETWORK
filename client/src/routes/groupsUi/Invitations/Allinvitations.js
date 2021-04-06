import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Row } from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import { Link } from "react-router-dom";

const Invitation = props => (
  
    
  <tr>
     
    <th scope="row">Sent to  : </th> 
    <td>{props.invitation.to_user}</td>
    <th scope="row">To Join   :</th> 
    <td>{props.invitation.groupname}</td>
    <th scope="row">To become an    :</th> 
    <td>{props.invitation.role[0]}</td>
    
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <td>
        <a href="#" onClick={() => { props.deleteInvitation(props.invitation._id) }}>Cancel</a>
    </td>
  </tr>
)

;
export default class Allinvitations extends Component {
  constructor(props) {
    super(props);
    this.deleteInvitation = this.deleteInvitation.bind(this);

    this.state = {
      invitations: [],
      superadmin: '',
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/invitation/")
      .then(response => {
        this.setState({ invitations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
 
  deleteInvitation(id) {
    axios.delete('http://localhost:5000/invitation/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        invitations: this.state.invitations.filter(el => el._id !== id)
    })
  }
 

  invitationList() {
    return this.state.invitations.map(currentinvitation => {
      return <Invitation invitation={currentinvitation} deleteInvitation={this.deleteInvitation} key={currentinvitation._id}/>;
    })
  }

  render() {
    
    return (
      
      <div className="gx-main-content gx-pb-sm-4">
      <div>  <Row>
      <Link to={"/invitation/add-invitation"}>
          <Button type="primary">Invite</Button>
          </Link>
        </Row>
        </div>
        <div className="gx-main-content gx-pb"> <Row>
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
