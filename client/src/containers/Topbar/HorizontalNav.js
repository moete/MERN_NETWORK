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
          key="components"
          title={<IntlMessages id="Questions & Posts" />}
        >
          <SubMenu
            className="gx-menu-horizontal"
            key="general"
            title={
              <span>
                <i className="icon icon-all-contacts" />
                <IntlMessages id="Questions" />
              </span>
            }
          >
            <Menu.Item key="/question">
              <Link to="/question/question-list">
                <IntlMessages id="All Questions" />
              </Link>
            </Menu.Item>
            <Menu.Item key="Tags">
              <Link to="/question/filtre-tags">
                <IntlMessages id="Tags & Technologies" />
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
          title={<IntlMessages id="Improve your skills" />}
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
