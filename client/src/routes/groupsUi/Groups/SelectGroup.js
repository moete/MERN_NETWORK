import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Tag, BackTop } from "antd";
import {
  communitiesList,
  friendList,
  interestList,
  photoList,
  postList,
  recentActivity,
  user,
  userInfo
} from "./data";
import PostList from "components/wall/PostList/index";

import CustomScrollbars from "util/CustomScrollbars";

export class SelectGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      theme: "",
      superadmin: "",
      coverphoto: ""
    };
  }
  componentDidMount() {
    axios
      .get(`/group/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          theme: response.data.theme,
          superadmin: response.data.superadmin,
          coverphoto: response.data.coverphoto
        });
        console.log(response.data);
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
          src={
            this.state.coverphoto
              ? this.state.coverphoto
              : "https://via.placeholder.com/150x150"
          }
          class="gx-avatar-img gx-avatar-img-lg gx-border-0"
        />
        <div class="gx-description">
          <span>
            <h1>Group Name {this.state.name}</h1>

            <CustomScrollbars className="gx-wall-scroll">
              <div className="gx-wall-postlist">
                <PostList postList={postList} user={user} />
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
