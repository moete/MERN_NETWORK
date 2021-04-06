import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Row } from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import { Link } from "react-router-dom";


const Group = props => (
  
    
  <tr>
    <th scope="row">Group Name  | </th> 
    <td>{props.group.name}</td>
    <th scope="row">Group Theme   |</th> 
    <td>{props.group.theme}</td>
    <th scope="row">Group Super Admin   |</th> 
    <td>{props.group.superadmin}</td> 
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

    <td><span> <Link to={"/group/enter-group/"+props.group._id}><p> <mark>Group Link</mark></p></Link></span>
    </td>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <td>
       <Link to={"/edit/"+props.group._id}>Join</Link> | <a href="#" onClick={() => { props.deleteGroup(props.group._id) }}>|Delete|</a>
    </td>
  </tr>
 

)

;
export default class Allgroups extends Component {
  constructor(props) {
    super(props);
    this.deleteGroup = this.deleteGroup.bind(this);

    this.state = {
      groups: [],
      superadmin: '',
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/group/")
      .then(response => {
        this.setState({ groups: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
 
  deleteGroup(id) {
    axios.delete('http://localhost:5000/group/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      groups: this.state.groups.filter(el => el._id !== id)
    })
  }
 

  groupList() {
    return this.state.groups.map(currentgroup => {
      return <Group group={currentgroup} deleteGroup={this.deleteGroup} key={currentgroup._id}/>;
    })
  }

  render() {
    
    return (
      
      <div className="gx-main-content gx-pb-sm-4">
      <div>  <Row>
      <Link to={"/group/add-group/"}>
          <Button type="primary">Create a group</Button>
          </Link>
        </Row>
        
        </div>
        <div className="gx-main-content gx-pb"> <Row>
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
