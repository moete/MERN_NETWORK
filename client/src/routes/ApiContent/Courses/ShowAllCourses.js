import React, { Component } from "react";
import { Col, Row } from "antd";
import ItemFirst from "../../customViews/extras/pricingTable/ItemFirst";
import ItemSecond from "../../customViews/extras/pricingTable/ItemSecond";
import ItemThird from "../../customViews/extras/pricingTable/ItemThird";
import axios from "axios";

const Course = props => (
    <Col xl={8} lg={24} md={8} xs={24}>
  <div class="gx-package">
    <div class="gx-package-header gx-bg-yellow gx-text-black">
      <h2 class="gx-price">
        <i class="icon icon-halfstar"></i>25
      </h2>
      <p class="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mb-0">
        <span>PERSONAL</span>
      </p>
    </div>
    <div class="gx-package-body">
      <ul class="gx-package-items">
        <li>
          <i class="icon icon-translation"></i>
          <span>
            <h3><span>{props.course.title}</span></h3>
          </span>
        </li>
        <li>
        <i className="icon icon-graduation"/>
          <span>
            <span>{props.course.description}</span>
          </span>
        </li>
       
        <li>
        <i className="icon icon-attachment"/>
          <span>
            <span>Requirments : {props.course.requirments} </span>
          </span>
        </li>
        <li>
        <i className="icon icon-custom-view"/>
          <span>
            <span>Number of chapters  :{props.course.chapters.length}</span>
          </span>
        </li>
        <li>
        <i className="icon icon-chat"/>
          <span>
            <span>Chapters : {props.course.chapters}</span>
          </span>
        </li>
      </ul>
      <div class="gx-package-footer">
        <button type="button" class="ant-btn gx-btn-block ant-btn-primary">
          <span>buy now</span>
        </button>
      </div>
    </div>
  </div>
</Col>
);

export class ShowAllCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/course/")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  coursesList() {
    return this.state.courses.map(currentcourse => {
      return <Course course={currentcourse} />;
    });
  }

  render() {
    return (
      <div className="gx-price-tables gx-pt-circle">
        <Row>
         
            {this.coursesList()}
        </Row>
      </div>
    );
  }
}

export default ShowAllCourses;
