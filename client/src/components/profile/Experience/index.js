import React from "react";
import { Tag, Col, Row, Tabs, Table } from "antd";

import Widget from "components/Widget";

const TabPane = Tabs.TabPane;

const Experience = ({ experience }) => {
  const { Column, ColumnGroup } = Table;

  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];

  return (
    <Widget
      title="Experience Credentials"
      styleName="gx-card-tabs gx-card-tabs-right gx-card-profile"
    >
      <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <div size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </div>
          )}
        />
      </Table>
    </Widget>
  );
};

export default Experience;
