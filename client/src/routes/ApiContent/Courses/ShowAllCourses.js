import React, { Component } from "react";
import { Col, Row } from "antd";
import axios from "axios";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
const Course = props => (
  <Col xl={8} lg={24} md={8} xs={24}>
    <Link to="/courses/course-details">
      <div class="gx-package">
        <div class="gx-package-header border-radius: 50%">
          <Avatar
            size={200}
            class="gx-img-fluid"
            src={`/uploads/courses/Logo/Course--${props.course.image}`}
            alt="course"
          ></Avatar>
        </div>
        <div class="gx-package-body">
          <ul class="gx-package-items">
            <li>
              <h3>
                <i class="icon icon-translation"></i>
                <span>{props.course.title}</span>
              </h3>
            </li>
            <li>
              <h5>
                <i className="icon icon-graduation" />

                <span>{props.course.description}</span>
              </h5>
            </li>

            <li>
              <h5>
                <i className="icon icon-attachment" />

                <span>Requirments : {props.course.requirments} </span>
              </h5>
            </li>
            <li>
              <h5>
                <i className="icon icon-custom-view" />

                <span>Number of chapters :{props.course.chapters.length}</span>
              </h5>
            </li>
            <li></li>
          </ul>
          <div class="gx-package-footer">
            <button type="button" class="ant-btn gx-btn-block ant-btn-primary">
              <span>Show</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
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
      .get("/course/")
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
        <Row>{this.coursesList()}</Row>
      </div>
    );
  }
}

export default ShowAllCourses;
