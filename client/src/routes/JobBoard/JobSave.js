import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row,Card,Popconfirm ,message} from 'antd';
//import { EllipsisOutlined } from '@ant-design/icons';
import '../../styles/jobs/job.css';
import './index.css'
import React from 'react' ;
import Basic from "../components/navigation/Breadcrumb/Basic";
 export default function JobSave({ match })
    {
        const text = 'Are you sure to delete this job from your favourite ?';

        function confirm() {
            message.info('job deleted.');
          } 

        const { Paragraph } = Typography;

const menu = (
    <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>

    <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">

  <Menu>

    <Menu.Item>

      <a target="_blank" rel="noopener noreferrer" >
        Remove  from Favourites
      </a>
     </Menu.Item>


           </Menu>
  </Popconfirm>
  </div>

);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: 'none',
        padding: 0,
      }}
    >
      
    
    </Button>
  </Dropdown>
);



const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>
      Ant Design interprets the color system into two levels: a system-level color system and a
      product-level color system.
    </Paragraph>
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <div>
      <IconLink width= "80%"
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Easy Apply"
      />
      
  
    </div>
  </>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);
        return (
            <div style={{paddingleft :24}} className="gx-main-content gx-pb-sm-4">
            <Card className="gx-card" title="Apply for one of your favourites jobs">
            <Basic> </Basic>

  <PageHeader
    title="Full stack Enginner"
    className="site-page-header"
    subTitle="Vneuron Company"
    tags={<Tag color="green">Actievly recruiting</Tag>}
    extra={[
     
      <Button key="1" type="primary">
        More info 
      </Button>,
      <DropdownMenu key="more" />,
    ]}
    avatar={{ src: 'https://avatars1.githubusreercontent.com/u/8186664?s=460&v=4' }}
  >
    <Content
      extraContent={
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
          alt="content"
          width="80%"
        />
      }
    >
      {content}
    </Content>
  </PageHeader>
  </Card>
  </div>
 
 
         );
    }