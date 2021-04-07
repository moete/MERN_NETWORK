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

          <Menu.Item key="extra-components/sweet-alert">
            <Link to="/extra-components/sweet-alert">
              <i className="icon icon-sweet-alert" />
              <IntlMessages id="Remove" />
            </Link>
          </Menu.Item>

          <Menu.Item key="social-apps/profile">
            <Link to="/social-apps/profile">
              <i className="icon icon-profile2" />
              <IntlMessages id="sidebar.extensions.profile" />
            </Link>
          </Menu.Item>

          <Menu.Item key="social-apps/wall">
            <Link to="/social-apps/wall">
              <i className="icon icon-avatar -flex-column-reverse" />
              <IntlMessages id="sidebar.wall" />
            </Link>
          </Menu.Item>

          <Menu.Item key="in-built-apps/firebase-crud">
            <Link to="/in-built-apps/firebase-crud">
              <i className="icon icon-icon" />
              <IntlMessages id="sidebar.crud" />
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          className={this.getNavStyleSubMenuClass(navStyle)}
          key="components"
          title={"Questions & Posts"}
        >
          <SubMenu
            className="gx-menu-horizontal"
            key="general"
            title={
              <span>
                <i className="icon icon-all-contacts" />
                Questions
              </span>
            }
          >
            <Menu.Item key="/question">
              <Link to="/question/question-list">All Question</Link>
            </Menu.Item>
            <Menu.Item key="Tags">
              <Link to="/question/filtre-tags">Tags & Technologies</Link>
            </Menu.Item>
            <Menu.Item key="My_Posts">
              <Link to="/question/my-posts">My Posts</Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            className="gx-menu-horizontal"
            key="navigation"
            title={
              <span>
                <i className="icon icon-navigation" />
                <IntlMessages id="sidebar.components.navigation" />
              </span>
            }
          >
            <Menu.Item key="components/navigation/affix">
              <Link to="/components/navigation/affix">
                <IntlMessages id="sidebar.navigation.affix" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/breadcrumb">
              <Link to="/components/navigation/breadcrumb">
                <IntlMessages id="sidebar.navigation.breadcrumb" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/dropdown">
              <Link to="/components/navigation/dropdown">
                <IntlMessages id="sidebar.navigation.dropdown" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/menu">
              <Link to="/components/navigation/menu">
                <IntlMessages id="sidebar.navigation.menu" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/pagination">
              <Link to="/components/navigation/pagination">
                <IntlMessages id="sidebar.navigation.pagination" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/navigation/steps">
              <Link to="/components/navigation/steps">
                <IntlMessages id="sidebar.navigation.steps" />
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            className="gx-menu-horizontal"
            key="dataEntry"
            title={
              <span>
                <i className="icon icon-data-entry" />
                <IntlMessages id="sidebar.components.dataEntry" />
              </span>
            }
          >
            <Menu.Item key="components/dataEntry/autoComplete">
              <Link to="/components/dataEntry/autoComplete">
                <IntlMessages id="sidebar.dataEntry.autoComplete" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/checkbox">
              <Link to="/components/dataEntry/checkbox">
                <IntlMessages id="sidebar.dataEntry.checkbox" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/cascader">
              <Link to="/components/dataEntry/cascader">
                <IntlMessages id="sidebar.dataEntry.cascader" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/datePicker">
              <Link to="/components/dataEntry/datePicker">
                <IntlMessages id="sidebar.dataEntry.datePicker" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/form">
              <Link to="/components/dataEntry/form">
                <IntlMessages id="sidebar.dataEntry.form" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/inputNumber">
              <Link to="/components/dataEntry/inputNumber">
                <IntlMessages id="sidebar.dataEntry.inputNumber" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/input">
              <Link to="/components/dataEntry/input">
                <IntlMessages id="sidebar.dataEntry.input" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/mention">
              <Link to="/components/dataEntry/mention">
                <IntlMessages id="sidebar.dataEntry.mention" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/rate">
              <Link to="/components/dataEntry/rate">
                <IntlMessages id="sidebar.dataEntry.rate" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/radio">
              <Link to="/components/dataEntry/radio">
                <IntlMessages id="sidebar.dataEntry.radio" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/switch">
              <Link to="/components/dataEntry/switch">
                <IntlMessages id="sidebar.dataEntry.switch" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/slider">
              <Link to="/components/dataEntry/slider">
                <IntlMessages id="sidebar.dataEntry.slider" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/select">
              <Link to="/components/dataEntry/select">
                <IntlMessages id="sidebar.dataEntry.select" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/treeSelect">
              <Link to="/components/dataEntry/treeSelect">
                <IntlMessages id="sidebar.dataEntry.treeSelect" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/transfer">
              <Link to="/components/dataEntry/transfer">
                <IntlMessages id="sidebar.dataEntry.transfer" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/timePicker">
              <Link to="/components/dataEntry/timePicker">
                <IntlMessages id="sidebar.dataEntry.timePicker" />
              </Link>
            </Menu.Item>
            <Menu.Item key="components/dataEntry/upload">
              <Link to="/components/dataEntry/upload">
                <IntlMessages id="sidebar.dataEntry.upload" />
              </Link>
            </Menu.Item>
          </SubMenu>

          <SubMenu
            className="gx-menu-horizontal"
            key="Posts"
            title={
              <span>
                <i className="icon icon-all-contacts" />
                <IntlMessages id="Posts" />
              </span>
            }
          >
            <Menu.Item key="My_Posts">
              <Link to="/question/my-posts">
                <IntlMessages id="My Posts" />
              </Link>
            </Menu.Item>
          </SubMenu>
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
