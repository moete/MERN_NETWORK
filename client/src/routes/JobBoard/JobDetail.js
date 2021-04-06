import React, { Component, useState } from "react";
import "antd/dist/antd.css";
import {
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Tag,
  Typography,
  Row,
  Card
} from "antd";
import "../../styles/jobs/job.css";

import Basic from "../components/navigation/Breadcrumb/Basic";
export default function jobDetail({ match }) {
  const { Paragraph } = Typography;

  const IconLink = ({ src, text }) => (
    <a className="example-link">
      <img className="example-link-icon" src={src} alt={text} />
      {text}
    </a>
  );

  const content = (
    <>
      <Paragraph>
        Ant Design interprets the color system into two levels: a system-level
        color system and a product-level color system.
      </Paragraph>
      <Paragraph>
        Ant Design&#x27;s design team preferred to design with the HSB color
        model, which makes it easier for designers to have a clear psychological
        expectation of color when adjusting colors, as well as facilitate
        communication in teams.
      </Paragraph>
      <div>
        <IconLink
          src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
          text="Easy Apply"
        />
      </div>
    </>
  );

  const Content = ({ children }) => (
    <Row>
      <div style={{ flex: 4 }}>{children}</div>
    </Row>
  );
  return (
    <div  className="gx-main-content gx-pb-sm-4">
      <Card className="gx-card" title="Search for your next Job">
        <Basic> </Basic>
        <PageHeader
          title="Full stack Enginner "
          className="site-page-header"
          subTitle="Vneuron Company"
          tags={<Tag color="green">Actievly recruiting</Tag>}
          extra={[
            <Button key="1" type="primary">
              Apply now
            </Button>
          ]}
          avatar={{
            src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
          }}
        >
          <Content>{content}</Content>
        </PageHeader>
        ,
      </Card>

    </div>
  );
}
