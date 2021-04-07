import React, { Component, useState } from 'react'
import axios from 'axios';
import {Card, Form, Input, Button} from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 5},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 18},
    md: {span: 16},
    lg: {span: 12},
  },
};
  


export  class  CreateInvitation extends Component {
  
    constructor(props) {
        super(props);

        this.onChangeFromuser = this.onChangeFromuser.bind(this);
    this.onChangeTouser = this.onChangeTouser.bind(this);
    this.onChangeGroupname = this.onChangeGroupname.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeAccepted = this.onChangeAccepted.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            from_user: '',
            to_user: '',
            role:[],
            groupname:'',
            accepted: '',
          
          }
          
        }
        
        handleChange = (e)=>{
          // Get the selected value which is a string
          var selectedId = e.target.value;
          console.log(selectedId);
          // Reverse look up on the array to find the full object
          var selected = this.state.admins.find((d)=>(d.id==selectedId));
          console.log(selected);
          // Update state with object
          this.setState({selected});
         
         
        }
    
    componentDidMount(){
      this.setState({
        admins:[
         
        ],
          from_user: 'sender user',
          to_user: 'receiver user',
          groupname: '',
          role: ['membre'],
          accepted: false,
          
      })
  }
    onChangeFromuser(e) {
        this.setState({
            from_user: e.target.value
        })
      }
      onChangeTouser(e) {
        this.setState({
            to_user: e.target.value
        })
      }
      onChangeRole(e) {
        this.setState({
            role: e.target.value
        })
      }
      onChangeGroupname(e) {
        this.setState({
            groupname: e.target.value
        })
      }
      
      onChangeAccepted(e) {
        this.setState({
            accepted: e.target.value
        })
      }
      
      
     
     
      onSubmit(e) {
        e.preventDefault();
    
        const invitation = {
          from_user: this.state.from_user,
          to_user: this.state.to_user,
          groupname: this.state.groupname,
          role: this.state.role,
          accepted: this.state.accepted,
        
        }
    
        console.log(invitation);
    
        axios.post('http://localhost:5000/invitation/add', invitation)
          .then(res => console.log(res.data));
    
        window.location = '/invitation/invitation-list';
      }
      
      
    render() {
         return (
            <Card className="gx-card" title="Invite">
      <Form>
              
     
              <FormItem
          {...formItemLayout}
          label="User "
          hasFeedback
          value={this.state.to_user}
          onChange={this.onChangeTouser}
      
        >
          <Input  placeholder="User to Invite"id="success"/>
          </FormItem>
          <h3>To Join </h3>
       
        <FormItem
          {...formItemLayout}
          label="Group name"
          hasFeedback
          
          value={this.state.groupname}
          onChange={this.onChangeGroupname}
        >
          <Input  placeholder="Group Name" id="success"/>
          </FormItem>
          <h3> As a :</h3>
          
          <FormItem
          {...formItemLayout}
          label="Member or Admin"
          hasFeedback
          
          value={this.state.role}
          onChange={this.onChangeRole}
        >
          <Input  placeholder="Admin / Member "id="success"/>
          </FormItem>
              
      
      </Form>
      <Button type="primary" htmlType="submit" onClick={this.onSubmit}>Invite</Button>
      <br/><br/>
      
    </Card>
         )
    }
}

export default CreateInvitation