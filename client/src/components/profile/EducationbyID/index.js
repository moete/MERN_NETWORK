import React, { Fragment } from "react";
import { connect } from "react-redux";
import Widget from "components/Widget/index";
import EducationItem from "./EducationItem";

const Education = ({ profile }) => {
  const data = profile.education;
  console.log(profile);

  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Education</span>
        <p className="gx-text-grey gx-fs-sm gx-mb-0"></p>
      </div>
      <div className="gx-pt-md-3">
        {data.map((data, index) => (
          <EducationItem key={index} data={data} />
        ))}
      </div>
    </Widget>
  );
};

export default connect(null, {})(Education);
