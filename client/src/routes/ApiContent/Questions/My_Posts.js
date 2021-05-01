import React, { Component } from "react";
import { Button, Drawer, Col } from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import axios from "axios";

import AppModuleHeader from "components/AppModuleHeader/index";

import IntlMessages from "util/IntlMessages";
import _ from "lodash";
import { Link } from "react-router-dom";
import CircularProgress from "components/CircularProgress/index";

import { connect } from "react-redux";
import { getCurrentProfile } from "../../../appRedux/actions/profile";

const Question = props => (
  <div className="gx-contact-item">
    <div className="gx-module-list-icon">
      <div className="gx-d-none gx-d-sm-flex">
      {
            (props.questions.confirm) === "true" ? 
            <div className="gx-icon-views">
            <i className="icon icon-check-cricle"/>
           
          </div>
            :

            <div className="gx-icon-views">
            <i className="icon icon-close-circle"/>
           
          </div>
            }
      </div>
      <div className="gx-ml-2 gx-d-none gx-d-sm-flex"></div>
    </div>

    <div className="gx-module-list-info gx-contact-list-info">
      <div className="gx-module-contact-content">
        <p className="gx-mb-1">
          <span className="gx-text-truncate gx-contact-name">
            {props.questions.title}
          </span>
          <span className="gx-toolbar-separator"></span>
          <span className="gx-text-truncate gx-job-title">
          <i className="icon icon-alert">
            {    props.questions.tags}</i>
           
          </span>
        </p>

        <div className="gx-text-muted">
          <span className="gx-email gx-d-inline-block gx-mr-2">
            {props.questions.views} views ,
          </span>
          <span className="gx-phone gx-d-inline-block">
            {props.questions.vote} votes
          </span>{" "}
          | requested on :
          <span className="gx-phone gx-d-inline-block">
            {props.questions.question_date.substring(0, 10)}
          </span>
        </div>
      </div>
      <div className="gx-module-contact-right">
      <a onClick={() => 
        { props.deleteQuestion(props.questions._id) }}>Delete</a>

      </div>
      <div className="gx-module-contact-right">
      <Link to={"/question/edit-question/"+props.questions._id}>Edit</Link>
      </div>
    </div>
  </div>
);
const User = ({ profile }) => (
  <div>
    <div className="gx-wall-scroll">
      <div>
        <div className="gx-profileon">
          <div className="gx-profileon-thumb gx-profileon-thumb-htctrcrop">
            <img src={profile.user.avatar} alt=""></img>
          </div>
          <div
            className="gx-profileon-content"
            style={{ backgroundColor: "#38424b", opacity: "85%" }}
          >
            <p className="gx-profileon-title">{profile.user.name} </p>
            <span className="gx-fs-sm">{profile.location}</span>
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
      <div className="track-horizontal">
        <div></div>
      </div>
      <div></div>
    </div>
  </div>
);
const filterOptions = [
  {
    id: 1,
    name: "My posts",
    icon: "all-contacts"
  },
  {
    id: 2,
    name: "Recently published",
    icon: "frequent"
  }
];
class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);

    this.state = {
      noContentFoundMessage: "No Posts found",
      alertMessage: "",
      showMessage: false,
      selectedSectionId: 1,
      drawerState: false,
      searchUser: "",
      filterOption: "My posts",
      allContact: [],
      contactList: [],
      selectedContact: null,
      addContactState: false,
      questions: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/question/")
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch(error => {
        console.log(error);
      });
      this.props.getCurrentProfile();
      if (this.state.isLoading) {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 5000);
      }
  }
  deleteQuestion(id) {
    axios.delete('http://localhost:5000/question/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      questions: this.state.questions.filter(el => el._id !== id)
    })
  }
  questionList() {
    return this.state.questions.map(currentquestion => {
      return <Question questions={currentquestion} deleteQuestion={this.deleteQuestion} key={currentquestion._id}/>;
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
  ContactSideBar = user => {
    return (
      <div className="gx-module-side">
        <div className="gx-module-side-header">
          <div className="gx-module-logo">
            <i className="icon icon-contacts gx-mr-4" />
            <span>
              <IntlMessages id="My Posts" />
            </span>
          </div>
        </div>

        <div className="gx-module-side-content">
          <CustomScrollbars className="gx-module-side-scroll">
            <div className="gx-module-add-task">
              <Link to={"/question/ask-question/"}>
                <Button
                  className="gx-btn-block ant-btn"
                  type="primary"
                  aria-label="add"
                >
                  <i className="icon icon-add gx-mr-2" />

                  <span>Ask a question</span>
                </Button>
              </Link>
            </div>
            <div className="gx-module-side-nav">
              <ul className="gx-module-nav">
                {filterOptions.map(option => (
                  <li key={option.id} className="gx-nav-item">
                    <span
                      className={`gx-link ${
                        option.id === this.state.selectedSectionId
                          ? "active"
                          : ""
                      }`}
                      onClick={this.onFilterOptionSelect.bind(this, option)}
                    >
                      <i className={`icon icon-${option.icon}`} />
                      <span>{option.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </CustomScrollbars>
        </div>
      </div>
    );
  };

  onFilterOptionSelect = option => {
    switch (option.name) {
      case "My posts": {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name
        });
        break;
      }
      case "Recently published": {
        this.setState({
          selectedSectionId: option.id,
          filterOption: option.name,
          contactList: _.filter(
            this.state.allContact,
            (contact, key) => contact.frequently
          )
        });
        break;
      }
      default:
        break;
    }
  };
 
  render() {
    const { questions, user, drawerState, noContentFoundMessage } = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-d-block gx-d-lg-none">
            <Drawer
              placement="left"
              closable={false}
              visible={drawerState}
            /*  onClose={this.onToggleDrawer.bind(this)}*/
            ></Drawer>
            
          </div>
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.ContactSideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <span className="gx-drawer-btn gx-d-flex gx-d-lg-none">
                <i
                  className="icon icon-menu gx-icon-btn"
                  aria-label="Menu"
              /*    onClick={this.onToggleDrawer.bind(this)}*/
                />
              </span>

              <AppModuleHeader
                placeholder="Search posts"
                notification={false}
                apps={false}
                user={this.state.user}
                /*onChange={this.updateContactUser.bind(this)}*/
                value={this.state.searchUser}
              />
            </div>
            <div className="gx-module-box-content">
              <div className="gx-module-box-topbar"></div>
              <CustomScrollbars className="gx-module-content-scroll">
                {questions.length === 0 ? (
                  <div className="gx-h-100 gx-d-flex gx-align-items-center gx-justify-content-center">
                    {noContentFoundMessage}
                  </div>
                ) : (
                  
                  this.questionList()
                )}
              </CustomScrollbars>
              <Col className="gutter-row" span={6}>
            {this.User()}
          </Col>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, { getCurrentProfile }) (MyPosts);
