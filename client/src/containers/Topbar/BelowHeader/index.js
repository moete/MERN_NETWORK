import React, { Fragment, Component } from "react";
import "./nav.css";
import {
  Layout,
  Popover,
} from "antd";
import { connect } from "react-redux";
import CustomScrollbars from "util/CustomScrollbars";
import { userSignOut } from "appRedux/actions/Auth";
import languageData from "../languageData";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import MailNotification from "components/MailNotification";
import {
  switchLanguage,
  toggleCollapsedSideNav
} from "../../../appRedux/actions/Setting";
import HorizontalNav from "../HorizontalNav";
import { Link } from "react-router-dom";

const { Header } = Layout;


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
    const { isAuthenticated, loader} = this.props;
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
            </div>
          </div>
        </div>

        <Header className="gx-header-horizontal-main">
          <div className="gx-container">
            <div className="gx-header-horizontal-main-flex">
              <Link to="/" className="">
                <img
                  style={{ maxWidth: "150px", width: "100%" }}
                  alt=""
                  src={require("assets/images/net-logo.png")}
                />
              </Link>

              <ul className="gx-header-notifications gx-ml-auto">
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

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated, loader, locale, navCollapsed } = auth;
  return { isAuthenticated, loader, locale, navCollapsed };
};
export default connect(mapStateToProps, {
  toggleCollapsedSideNav,
  switchLanguage,
  userSignOut
})(BelowHeader);
