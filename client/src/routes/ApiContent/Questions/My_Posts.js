import React, { Component } from "react";
import { Button, Drawer, Dropdown, Menu } from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import axios from "axios";

import AppModuleHeader from "components/AppModuleHeader/index";

import IntlMessages from "util/IntlMessages";
import _ from "lodash";
import { Link } from "react-router-dom";
const menus =  (
    <Menu>
      <Menu.Item>
       <Link to={"/question/edit-question/"}>
        Edit
        </Link>
      </Menu.Item>
      <Menu.Item icon="" disabled>
      <Link to={"/question/edit-question/"}>
        Delete
        </Link>
      </Menu.Item>
    </Menu>
  );
const Question = props => (
  <div className="gx-contact-item">
    <div className="gx-module-list-icon">
      <div className="gx-d-none gx-d-sm-flex" onClick="">
        <i className="gx-icon-btn icon icon-star-o" />
      </div>
      <div className="gx-ml-2 gx-d-none gx-d-sm-flex"></div>
    </div>

    <div className="gx-module-list-info gx-contact-list-info">
      <div className="gx-module-contact-content">
        <p className="gx-mb-1">
          <span className="gx-text-truncate gx-contact-name">
            {props.questions.title}
          </span>
          <span className="gx-toolbar-separator">&nbsp;</span>
          <span className="gx-text-truncate gx-job-title">
            {props.questions.tags}
          </span>
        </p>

        <div className="gx-text-muted">
          <span className="gx-email gx-d-inline-block gx-mr-2">
            {props.questions.views} views ,
          </span>
          <span className="gx-phone gx-d-inline-block">
            {props.questions.vote} votes  
          </span> | published on :
          <span className="gx-phone gx-d-inline-block">
            {props.questions.question_date.substring(0,10)} 
          </span>
        </div>
      </div>

      <div className="gx-module-contact-right">
        <Dropdown
          overlay={menus}
          placement="bottomRight"
          trigger={["click"]}
        >
          <i className="gx-icon-btn icon icon-ellipse-v" />
        </Dropdown>
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
  onContactClose = () => {
    this.setState({ addContactState: false });
  };
  onDeleteContact = () => {
    this.setState({ addContactState: false });
    this.props.onDeleteContact(this.props.id);
  };
  onEditContact = () => {
    this.setState({ addContactState: true });
  };
  

  constructor(props) {
    super(props);
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
      questions: []
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
  }
  questionList() {
    return this.state.questions.map(currentquestion => {
      return <Question questions={currentquestion} />;
    });
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

  addFavourite = (id, data) => {
    let contact = data;
    contact.starred = !data.starred;
    this.props.onUpdateContact(id, contact);
  };

  onAddContact = () => {
    this.setState({ addContactState: true });
  };
  onContactClose = () => {
    this.setState({ addContactState: false });
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
  onSaveContact = (id, data) => {
    if (id) {
      this.props.onUpdateContact(id, data);
    } else {
      this.props.onAddContact(data);
    }
  };
  onDeleteContact = data => {
    this.props.onDeleteContact(data);
  };
  filterContact = userName => {
    const { filterOption } = this.state;
    if (userName === "") {
      this.setState({ contactList: this.state.allContact });
    } else {
      const filterContact = _.filter(
        this.state.allContact,
        contact =>
          contact.name.toLowerCase().indexOf(userName.toLowerCase()) > -1
      );
      if (filterOption === "My posts") {
        this.setState({ contactList: filterContact });
      } else if (filterOption === "Recently published") {
        this.setState({
          contactList: filterContact.filter(contact => contact.frequently)
        });
      }
    }
  };
  handleRequestClose = () => {
    this.setState({
      showMessage: false
    });
  };

  updateContactUser(evt) {
    this.setState({
      searchUser: evt.target.value
    });
    this.filterContact(evt.target.value);
  }

  onToggleDrawer() {
    this.setState({
      drawerState: !this.state.drawerState
    });
  }

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
              onClose={this.onToggleDrawer.bind(this)}
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
                  onClick={this.onToggleDrawer.bind(this)}
                />
              </span>

              <AppModuleHeader
                placeholder="Search posts"
                notification={false}
                apps={false}
                user={this.state.user}
                onChange={this.updateContactUser.bind(this)}
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

export default MyPosts;
