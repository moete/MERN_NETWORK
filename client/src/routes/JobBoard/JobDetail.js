import React, { Component, useState } from "react";
import {
  PageHeader,

  Button,
  Tag,
  Typography,
  Row,
  Card,
  Descriptions,
  Badge 
} from "antd";

import Basic from "../components/navigation/Breadcrumb/Basic";
export default function jobDetail(props,{ match }) {
  const { menu, jobs } = props;

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
      <div style={{ flex: 6 }}>{children}</div>
    </Row>
  );
  if(jobs.length > 0) {
  return (
    <div  className="gx-main-content gx-pb-sm-4">
      <Card className="gx-card" title="Get More Info for your next Job">
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
    <Descriptions title="Job Info" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Actievly recruiting" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
   
  </Descriptions>,

    </div>
  );
        }
        else {
            return     ( <h1> No Details</h1>)
              }
}
