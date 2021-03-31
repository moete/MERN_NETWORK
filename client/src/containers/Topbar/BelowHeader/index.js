<<<<<<< HEAD
import React, { Fragment, Component } from "react";
import "./nav.css";
=======
import React, { Component } from "react";
>>>>>>> origin/content
import {
  Button,
  Dropdown,
  Icon,
  Layout,
  Menu,
  message,
  Popover,
  Select
} from "antd";
import { connect } from "react-redux";
import CustomScrollbars from "util/CustomScrollbars";
<<<<<<< HEAD
import { userSignOut } from "appRedux/actions/Auth";
=======

>>>>>>> origin/content
import languageData from "../languageData";
import SearchBox from "components/SearchBox";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import MailNotification from "components/MailNotification";
import {
  switchLanguage,
  toggleCollapsedSideNav
} from "../../../appRedux/actions/Setting";
import HorizontalNav from "../HorizontalNav";
import { Link } from "react-router-dom";
import IntlMessages from "util/IntlMessages";
<<<<<<< HEAD
import { signUserUp } from "../../../appRedux/actions/Auth";
=======
>>>>>>> origin/content

const { Header } = Layout;

const Option = Select.Option;
<<<<<<< HEAD
=======
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Apps</Menu.Item>
    <Menu.Item key="3">Blogs</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  message.info("Click on menu item.");
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
>>>>>>> origin/content

class BelowHeader extends Component {
  state = {
    searchText: ""
  };

  languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language => (
          <li
            className="gx-media gx-pointer"
            key={JSON.stringify(language)}
            onClick={e => this.props.switchLanguage(language)}
          >
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
            <span className="gx-language-text">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  updateSearchChatUser = evt => {
    this.setState({
      searchText: evt.target.value
    });
  };

  render() {
<<<<<<< HEAD
    const { isAuthenticated, loader, locale, navCollapsed } = this.props;
    const authLinks = (
      <ul className="gx-login-list">
        <li onClick={() => this.props.userSignOut()}>Sign out</li>
      </ul>
    );
    const guestLinks = (
      <ul className="gx-login-list">
        <Link to="/signin">
          <li>Login</li>
        </Link>
        <Link to="/signup">
          <li>Signup</li>
        </Link>
      </ul>
    );

    return (
      <div className="mynav">
        <div className="gx-header-horizontal-top">
          <div className="gx-container">
            <div className="gx-header-horizontal-top-flex">
              {!loader && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )}
=======
    const { locale, navCollapsed } = this.props;

    return (
      <div className="gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal">
        <div className="gx-header-horizontal-top">
          <div className="gx-container">
            <div className="gx-header-horizontal-top-flex">
              <ul className="gx-login-list">
                <Link to="/signin">
                  <li>Login</li>
                </Link>
                <li>Signup</li>
              </ul>
>>>>>>> origin/content
            </div>
          </div>
        </div>

        <Header className="gx-header-horizontal-main">
          <div className="gx-container">
            <div className="gx-header-horizontal-main-flex">
<<<<<<< HEAD
              <Link to="/" className="">
                <img
                  style={{ maxWidth: "150px", width: "100%" }}
                  alt=""
                  src={require("assets/images/net-logo.png")}
                />
              </Link>

              <ul className="gx-header-notifications gx-ml-auto">
=======
              <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3">
                <i
                  className="gx-icon-btn icon icon-menu"
                  onClick={() => {
                    this.props.toggleCollapsedSideNav(!navCollapsed);
                  }}
                />
              </div>
              <Link
                to="/"
                className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
              >
                <img alt="" src={require("assets/images/w-logo.png")} />
              </Link>
              <Link
                to="/"
                className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
              >
                <img alt="" src={require("assets/images/logo.png")} />
              </Link>

              <ul className="gx-header-notifications gx-ml-auto">
                <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={
                      <div className="gx-d-flex">
                        <Dropdown overlay={menu}>
                          <Button>
                            Category <Icon type="down" />
                          </Button>
                        </Dropdown>
                        <SearchBox
                          styleName="gx-popover-search-bar"
                          placeholder="Search in app..."
                          onChange={this.updateSearchChatUser.bind(this)}
                          value={this.state.searchText}
                        />
                      </div>
                    }
                    trigger="click"
                  >
                    <span className="gx-pointer gx-d-block">
                      <i className="icon icon-search-new" />
                    </span>
                  </Popover>
                </li>

>>>>>>> origin/content
                <li className="gx-notify">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<AppNotification />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-d-block">
                      <i className="icon icon-notification" />
                    </span>
                  </Popover>
                </li>

                <li className="gx-msg">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<MailNotification />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-status-pos gx-d-block">
                      <i className="icon icon-chat-new" />
                      <span className="gx-status gx-status-rtl gx-small gx-orange" />
                    </span>
                  </Popover>
                </li>
                <li className="gx-user-nav">
                  <UserInfo />
                </li>
              </ul>
            </div>
          </div>
        </Header>
        <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
          <div className="gx-container">
            <div className="gx-header-horizontal-nav-flex">
              <HorizontalNav />
              <ul className="gx-header-notifications gx-ml-auto">
                <li>
                  <span className="gx-pointer gx-d-block">
                    <i className="icon icon-menu-lines" />
                  </span>
                </li>
                <li>
                  <span className="gx-pointer gx-d-block">
                    <i className="icon icon-setting" />
                  </span>
                </li>
                <li>
                  <span className="gx-pointer gx-d-block">
                    <i className="icon icon-apps-new" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = ({ auth }) => {
  const { isAuthenticated, loader, locale, navCollapsed } = auth;
  return { isAuthenticated, loader, locale, navCollapsed };
};
export default connect(mapStateToProps, {
  toggleCollapsedSideNav,
  switchLanguage,
  userSignOut
=======
const mapStateToProps = ({ settings }) => {
  const { locale, navCollapsed } = settings;
  return { locale, navCollapsed };
};
export default connect(mapStateToProps, {
  toggleCollapsedSideNav,
  switchLanguage
>>>>>>> origin/content
})(BelowHeader);
