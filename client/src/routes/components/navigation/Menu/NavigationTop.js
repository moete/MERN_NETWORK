import React, { Component } from "react";
import { Card, Icon, Menu } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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

  render() {
    return (
      <Card className="gx-card" title="Top Navigation">
   
     
      </Card>
    );
  }
}

export default NavigationTop;
