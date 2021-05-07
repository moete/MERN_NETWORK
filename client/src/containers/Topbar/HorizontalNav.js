import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HorizontalNav extends Component {
  getNavStyleSubMenuClass = navStyle => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  render() {
    const { pathname, navStyle } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split("/")[1];
    return (
      <Menu
        defaultOpenKeys={[defaultOpenKeys]}
        selectedKeys={[selectedKeys]}
        mode="horizontal"
      >
        <SubMenu
          className={this.getNavStyleSubMenuClass(navStyle)}
          key="group"
          title="Groups"
        >
          <Menu.Item key="in-built-apps/notes">
            <Link to="/in-built-apps/notes">
              <i className="icon icon-copy" />
              <IntlMessages id="Notifications" />
            </Link>
          </Menu.Item>
          <Menu.Item key="/group">
            <Link to="/group/group-list">
              <i className="  icon icon-chat-bubble -flex-column-reverse" />
              <IntlMessages id="My Groups" />
            </Link>
          </Menu.Item>
          <Menu.Item key="/invitation">
            <Link to="/invitation/add-invitation">
              <i className="icon icon-contacts" />
              <IntlMessages id="Invite" />
            </Link>
          </Menu.Item>
          <Menu.Item key="/invitation">
            <Link to="/invitation/invitation-list">
              <i className="icon icon-contacts" />
              <IntlMessages id="My Sent Invitations" />
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          className={this.getNavStyleSubMenuClass(navStyle)}
          key="components"
          title={"Questions & Posts"}
        >
          <Menu.Item key="/question">
            <Link to="/question/question-list">
              <i className="icon icon-navigation" />
              All Question
            </Link>
          </Menu.Item>
          <Menu.Item key="Tags">
            <Link to="/question/filtre-tags">
              <i className="icon icon-alert" />
              Tags & Technologies
            </Link>
          </Menu.Item>
          <Menu.Item key="My_Posts">
            <Link to="/question/my-posts">
              <i className="icon icon-wysiwyg" /> <IntlMessages id="My Posts" />
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className={this.getNavStyleSubMenuClass(navStyle)}
          key="extraComponents"
          title={"Improve your skills"}
        >
          <Menu.Item key="/courses/courses-list">
            <Link to="/courses/courses-list">
              <i className="icon icon-timeline" />

              <IntlMessages id="Courses for you" />
            </Link>
          </Menu.Item>
          <Menu.Item key="/courses/add-course">
            <Link to="/courses/add-course">
              <i className="icon icon-add" />

              <IntlMessages id="Add a course" />
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className={this.getNavStyleSubMenuClass(navStyle)}
          key="JobBoard"
          title={"JobBoard"}
        >
          <Menu.Item key="job-board">
            <Link to="/job-board/all-jobs">
              <i className="icon icon-alert" />
              <IntlMessages id="Jobs for you" />
            </Link>
          </Menu.Item>
          <Menu.Item key="job-board">
            <Link to="/job-board/all-saved">
              <i className="icon icon-alert" />
              <IntlMessages id="You already applied jobs " />
            </Link>
          </Menu.Item>

          <Menu.Item key="job-board">
            <Link to="/job-board/all-stats">
              <i className="icon icon-alert" />
              <IntlMessages id="View Networky stats Before your search" />
            </Link>
          </Menu.Item>
          <Menu.Item key="job-board">
            <Link to="/job-board/all">
              <i className="  icon icon-chat-bubble -flex-column-reverse" />
              <IntlMessages id="Chat with networky community " />
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

HorizontalNav.propTypes = {};
const mapStateToProps = ({ settings }) => {
  const { themeType, navStyle, pathname, locale } = settings;
  return { themeType, navStyle, pathname, locale };
};
export default connect(mapStateToProps)(HorizontalNav);
