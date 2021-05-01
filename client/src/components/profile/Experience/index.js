import React from "react";
import { connect } from "react-redux";
import Widget from "components/Widget/index";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ auth: { authUser }, profile: { profile, loader } }) => {
  const data = profile.experience;

  return (
    <Widget styleName="gx-card-profile">
      <div className="ant-card-head">
        <span className="ant-card-head-title gx-mb-1">Experiences</span>
        <p className="gx-text-grey gx-fs-sm gx-mb-0"></p>
      </div>
      <div className="gx-pt-md-3">
        {data.map((data, index) => (
          <ExperienceItem key={index} data={data} />
        ))}
      </div>
    </Widget>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {})(Experience);
