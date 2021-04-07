import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Tag, BackTop } from "antd";
import {communitiesList, friendList, interestList, photoList, postList, recentActivity, user, userInfo} from "./data"
import PostList from "components/wall/PostList/index";

import CustomScrollbars from "util/CustomScrollbars";


export class SelectGroup extends Component {
  
   


  constructor(props) {
    super(props);
    this.state = {
      name: '',
      theme: '',
      superadmin: '',
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/group/60687adc7ea0621774953760`)
      .then(response => {
        this.setState({
          name: response.data.name,
          theme: response.data.theme,
          superadmin : response.data.superadmin,
          
         
          
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
   
  
  render() {
    return (
      <div class="gx-user-list">
        <img
          alt="avatar"
          src="https://via.placeholder.com/150x150"
          class="gx-avatar-img gx-avatar-img-lg gx-border-0"
        />
        <div class="gx-description">
          <span>
           
              <h1>Group Name :{this.state.superadmin}</h1>
             
              <CustomScrollbars className="gx-wall-scroll">
              <div className="gx-wall-postlist">
                <PostList postList={postList} user={user}/>
              </div>
            </CustomScrollbars>
            
          </span>
          <h5>
            By <span class="gx-link">{this.state.theme}</span>
          </h5>
         
          
        </div>
      </div>
    );
  }
}

export default SelectGroup;
