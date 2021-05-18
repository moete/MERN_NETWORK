import React from 'react';
import { Col } from "antd";
import Widget from "components/Widget/index";

const CoursesListForWall = (props) => {
    return (
        <Col className="gutter-row" span={24}>
        <Widget styleName={`gx-card-full gx-p-2 gx-bg-cyan gx-text-white`}>
          <div className="gx-media gx-align-items-center gx-flex-nowrap">
            <div className="gx-mr-2 gx-mr-xxl-3">
              <i className={`icon icon-diamond gx-fs-icon-lg`} />
            </div>
            <div className="gx-media-body">
              <h1 className="gx-fs-xxl gx-font-weight gx-text-white">
                {props.course.title}
              </h1>
              <p className="gx-mb-0">{props.course.requirements}</p>
            </div>
          </div>
        </Widget>
      </Col>
    );
}
export default CoursesListForWall;