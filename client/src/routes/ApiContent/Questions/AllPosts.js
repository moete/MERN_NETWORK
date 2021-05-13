import React, { Component } from "react";
import { Input, Tag, Card, Col, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from "components/CircularProgress/index";
import GroupList from "./GroupList";
import PostsList from "./PostsList";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../appRedux/actions/profile";
import StackAnswers from "./StackAnswers";
import CoursesListForWall from "./CoursesListForWall";

const User = ({ profile }) => (
  <div>
    <div className="gx-wall-scroll">
      <div>
        <div className="gx-profileon">
          <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop">
            <img src={profile ? profile.user.avatar : ""} alt=""></img>
          </div>
          <div
            className="gx-profileon-content"
            style={{ backgroundColor: "#38424b", opacity: "85%" }}
          >
            <p className="gx-profileon-title">
              {profile ? profile.user.name : ""}{" "}
            </p>
            <span className="gx-fs-sm">{profile ? profile.location : ""}</span>
          </div>
        </div>
        <div className="gx-follower gx-text-center">
          <ul className="gx-follower-list">
            <li>
              <span className="gx-follower-title">2k+</span>
              <span>Followers</span>
            </li>
            <li>
              <span className="gx-follower-title">847</span>
              <span>Following</span>
            </li>
            <li>
              <span className="gx-follower-title">327</span>
              <span>project</span>
            </li>
          </ul>
        </div>
        <div className="gx-mb-xl-4 gx-mb-3">
          <p>You are following Chelsea Jones @chelsea</p>
          <button
            type="button"
            className="ant-btn gx-btn-sm gx-mb-0 ant-btn-primary"
          >
            <span>Unfollow</span>
          </button>
        </div>
        <div className="gx-entry-sec">
          <h2 className="gx-entry-title ">
            Interests
            <span className="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
          </h2>
          <ul className="gx-list-inline">
            <li>
              <span className="gx-link gx-btn gx-btn-white gx-mb-10">
                javaScript
              </span>
            </li>
            <li>
              <span className="gx-link gx-btn gx-btn-white gx-mb-10">
                ReactJs
              </span>
            </li>
            <li>
              <span className="gx-link gx-btn gx-btn-white gx-mb-10">
                Symfony
              </span>
            </li>
            <li>
              <span className="gx-link gx-btn gx-btn-white gx-mb-10">php</span>
            </li>
            <li>
              <span className="gx-link gx-btn gx-btn-white gx-mb-10">
                Mongoose
              </span>
            </li>
          </ul>
        </div>
        <div className="gx-entry-sec">
          <h2 className="gx-entry-title ">
            <span>
              Friends - 530
              <span className="gx-text-grey">(27 Mutual)</span>
            </span>
            <span className="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
          </h2>
          <ul className="gx-fnd-list">
            <li className="gx-mb-2">
              <div className="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div className="gx-user-fnd-content">
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-success"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <h6>Chelsea</h6>
                </div>
              </div>
            </li>
            <li className="gx-mb-2">
              <div className="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div className="gx-user-fnd-content">
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-error"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <h6>Kenery Thomson</h6>
                </div>
              </div>
            </li>
            <li className="gx-mb-2">
              <div className="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div className="gx-user-fnd-content">
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <h6>Amanda</h6>
                </div>
              </div>
            </li>
            <li className="gx-mb-2">
              <div className="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div className="gx-user-fnd-content">
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <h6>Joshua</h6>
                </div>
              </div>
            </li>
            <li className="gx-mb-2">
              <div className="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div className="gx-user-fnd-content">
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <h6>Alex Mulski</h6>
                </div>
              </div>
            </li>
            <li className="gx-mb-2">
              <div className="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div className="gx-user-fnd-content">
                  <span className="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span className="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span className="ant-badge-status-text"></span>
                  </span>
                  <h6>Stella Johnson</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
const { Search } = Input;

export class AllPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      courses: [],
      search: "",
      title: "",
      items: [],
      isLoaded: true,
      site: "stackoverflow",
      posts: [],
      isLoading: true,
      groups: []
    };
  }
  componentDidMount() {
    axios
      .get("https://networkymern.herokuapp.com/question/")
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("https://networkymern.herokuapp.com/group/")
      .then(response => {
        this.setState({ groups: response.data });
        console.log(response.data);
        console.log(this.state.groups);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("https://networkymern.herokuapp.com/course/find3")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    fetch(
      "https://api.stackexchange.com/2.2/search/advanced/?" +
        "site=" +
        this.state.site +
        "&title=" +
        this.state.title +
        "&pagesize=100" +
        "&page=100" +
        "&sort=votes" +
        "&order=desc"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ posts: myJson, isLoaded: false });

        console.log(myJson);
      })
      .catch(error => console.error(error)); //If error occurs you will get here

    this.props.getCurrentProfile();
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
    }
  }
  onSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 100)
    });
    this.props.getCurrentProfile();
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 5000);
    }
  }

  questionList() {
    let filtredPosts = this.state.questions.filter(currentquestion => {
      return (
        currentquestion.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    if (filtredPosts.length > 0) {
      return filtredPosts.map(currentquestion => {
        return (
          <PostsList question={currentquestion} key={currentquestion._id} />
        );
      });
    } else {
      if (this.state.search === "") {
        return  <div className="gx-loader-view">
        <CircularProgress />
      </div>
      }
      let filtredPosts = this.state.posts.items.filter(currentPost => {
        return (
          currentPost.title
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      });
      if (filtredPosts.length > 0) {
        return filtredPosts.map(currentPost => {
          return <StackAnswers post={currentPost} key={currentPost._id} />;
        });
      }
    }
    return (
      <Card>
        <div align="center">
          <h1>
            <i className="icon icon-search-new" />
          </h1>
          <h2>
            We couldn't find anything for <a>{this.state.search}</a>
          </h2>
          <h3>Try different or less specific keywords.</h3>
        </div>
      </Card>
    );
  }

  CoursesList() {
    return this.state.courses.map((currentcourse, idx) => {
      return (
        <CoursesListForWall course={currentcourse} key={currentcourse._id} />
      );
    });
  }
  GroupList() {
    return this.state.groups.map(group => {
      return <GroupList group={group} />;
    });
  }
  User() {
    if (this.state.isLoading) {
      return (
        <div className="gx-loader-view">
          <CircularProgress />
        </div>
      );
    } else {
      return <User profile={this.props.profile.profile} />;
    }
  }
  Search() {
    return <Search />;
  }
  render() {
    return (
      <>
        <div className="gx-main-content">
          <Row gutter={24}>
            <Col className="gutter-row" span={6}>
              {this.User()}
            </Col>
            <Col className="gutter-row" span={12}>
              <Row>
                <Search
                  placeholder="Search ..."
                  value={this.state.search}
                  onChange={this.onSearch.bind(this)}
                />
              </Row>
              <div className="gx-module-add-task">
                <div className="gx-testimonial-bg gx-standard gx-slide-item gx-text-left">
                  <div className="gx-media">
                    <div className="gx-media-body">
                      <div className="gx-testimonial-des">
                        <Link to={"/question/ask-question/"}>
                          <h1 className="gx-fs-xxl gx-font-weight gx-text-white">
                            Whats in your mind ?
                          </h1>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {this.questionList()}
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="ant-col gx-d-none gx-d-lg-block ant-col-xs-24">
                <div className="gx-wall-scroll">
                  <div>
                    <div className="gx-entry-sec">
                      <div className="gx-entry-title ">
                        <h3>Available Courses</h3>
                        <span className="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
                      </div>
                      <Row gutter={[16, 24]}>{this.CoursesList()}</Row>
                    </div>
                    <span className="gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4">
                      <Link to={"/courses/courses-list"}>
                        {" "}
                        See All Courses{" "}
                      </Link>
                      <i className="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"></i>
                    </span>
                  </div>
                  <div className="gx-entry-title ">
                    <h3>Join a Group</h3>
                    <span className="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
                  </div>
                  {this.GroupList()}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile })(AllPosts);
