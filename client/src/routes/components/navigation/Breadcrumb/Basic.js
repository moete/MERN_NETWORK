import React from "react";
import {Breadcrumb, Card} from "antd";
import { Link } from "react-router-dom";


const Basic = () => {
  return (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Link to="all-jobs/Jobs" >
        <Breadcrumb.Item><span className="gx-link">Jobs</span></Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>Job Favorites</Breadcrumb.Item>
      </Breadcrumb>
  );
};

export default Basic;
