<<<<<<< HEAD
import React, { Component } from "react";
import { Card, Icon, Menu } from "antd";
=======
import React, {Component} from "react";
import {Card, Icon, Menu} from "antd";
>>>>>>> origin/content

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

<<<<<<< HEAD
class NavigationTop extends Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
=======

class NavigationTop extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
>>>>>>> origin/content

  render() {
    return (
      <Card className="gx-card" title="Top Navigation">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
<<<<<<< HEAD
            <Icon type="mail" />
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <Icon type="appstore" />
            Navigation Two
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="setting" />
                Navigation Three - Submenu
              </span>
            }
          >
=======
            <Icon type="mail"/>Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled>
            <Icon type="appstore"/>Navigation Two
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting"/>Navigation Three - Submenu</span>}>
>>>>>>> origin/content
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
<<<<<<< HEAD
            <a
              href="http://demo.g-axon.com/jumbo-react/#/app/dashboard/default"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
=======
            <a href="http://demo.g-axon.com/jumbo-react/#/app/dashboard/default" target="_blank"
               rel="noopener noreferrer">Navigation Four - Link</a>
>>>>>>> origin/content
          </Menu.Item>
        </Menu>
      </Card>
    );
  }
<<<<<<< HEAD
}

=======

}


>>>>>>> origin/content
export default NavigationTop;
