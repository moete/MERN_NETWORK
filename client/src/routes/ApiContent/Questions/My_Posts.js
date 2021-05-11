import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import axios from "axios";

import AppModuleHeader from "components/AppModuleHeader/index";

import IntlMessages from "util/IntlMessages";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../appRedux/actions/profile";
import CircularProgress from "components/CircularProgress/index";

const Question = props => (
  <div className="gx-contact-item">
    <div className="gx-module-list-icon">
      <div className="gx-d-none gx-d-sm-flex">
        {props.questions.confirm === "true" ? (
          <div className="gx-icon-views">
            <i className="icon icon-check-cricle" />
          </div>
        ) : (
          <div className="gx-icon-views">
            <i className="icon icon-close-circle" />
          </div>
        )}
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
            <i className="icon icon-alert">{props.questions.tags}</i>
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
        <a
          onClick={() => {
            props.deleteQuestion(props.questions._id);
          }}
        >
          Delete
        </a>
      </div>
      <div className="gx-module-contact-right">
        <Link to={"/question/edit-question/" + props.questions._id}>Edit</Link>
      </div>
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
      searchUser: "",
      filterOption: "My posts",
      questions: [],
      isLoading: true,
      owner: []
    };
  }

  componentDidMount() {
    axios
      .get("/question/")
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
    axios.delete("/question/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      questions: this.state.questions.filter(el => el._id !== id)
    });
  }
  questionList(profile) {
    if (this.state.isLoading) {
      return (
        <div className="gx-loader-view">
          <CircularProgress />
        </div>
      );
    } else {
      return this.state.questions.map(currentquestion => {
        if (
          currentquestion.owner.user === this.props.profile.profile.user._id
        ) {
          this.props.getCurrentProfile();
          return (
            <Question
              questions={currentquestion}
              deleteQuestion={this.deleteQuestion}
              key={currentquestion._id}
            />
          );
        }
      });
    }
  }

  SideBar = user => {
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
  render() {
    const { questions, user, noContentFoundMessage } = this.state;
    return (
      <div className="gx-main-content">
        <div className="gx-app-module">
          <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
            {this.SideBar(user)}
          </div>

          <div className="gx-module-box">
            <div className="gx-module-box-header">
              <AppModuleHeader
                placeholder="Search posts"
                notification={false}
                apps={false}
                user={this.state.user}
                onChange={this.onSearch.bind(this)}
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
export default connect(mapStateToProps, { getCurrentProfile })(MyPosts);
