import React, { Component, Fragment } from "react";
import "./nav.css";
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
import { userSignOut } from "appRedux/actions/Auth";
import languageData from "../languageData";
import SearchBox from "components/SearchBox";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import MailNotification from "components/MailNotification";

import HorizontalNav from "../HorizontalNav";
import { Link } from "react-router-dom";
import {
  switchLanguage,
  toggleCollapsedSideNav
} from "../../../appRedux/actions/Setting";

const { Header } = Layout;
const Option = Select.Option;
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

class HorizontalDefault extends Component {
  state = {
    searchText: ""
  };

  updateSearchChatUser = evt => {
    this.setState({
      searchText: evt.target.value
    });
  };

  render() {
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
      <div className="mynav gx-header-horizontal">
        <Header className="gx-header-horizontal-main">
          <div className="gx-container">
            <div className="gx-header-horizontal-main-flex">
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
                className="logonetworkymini gx-d-block gx-d-lg-none gx-pointer gx-w-logo"
              >
                <img alt="" src={require("assets/images/w-logo.png")} />
              </Link>
              <Link
                to="/"
                className=" logonetworky gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
              >
                <img alt="" src={require("assets/images/logo.png")} />
              </Link>
              <div className="gx-header-search gx-d-none gx-d-lg-flex">
                <SearchBox
                  styleName="gx-lt-icon-search-bar-lg"
                  placeholder="Search in app..."
                  onChange={this.updateSearchChatUser.bind(this)}
                  value={this.state.searchText}
                />

                <Select
                  defaultValue="lucy"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="jack">Products</Option>
                  <Option value="lucy">Apps</Option>
                  <Option value="Yiminghe">Blogs</Option>
                </Select>
              </div>

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
                          z
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
                  {!loader && (
                    <Fragment>
                      {isAuthenticated ? <UserInfo /> : guestLinks}
                    </Fragment>
                  )}
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

/*const mapStateToProps = ({ settings }) => {
  const { locale, navCollapsed } = settings;
  return { locale, navCollapsed };
};*/
const mapStateToProps = state => {
  const { locale, navCollapsed } = state.settings;
  const { isAuthenticated, loader } = state.auth;

  return { locale, navCollapsed, isAuthenticated, loader };
};
export default connect(mapStateToProps, {
  toggleCollapsedSideNav,
  switchLanguage,
  userSignOut
})(HorizontalDefault);
