import React, { Component } from "react";
import {Input ,Button, Card, Col, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import Widget from "components/Widget/index";


const Question = props => (
  <Col>
    <Card>
      <div>
        <div class="gx-wall-content">
          <div class="gx-media gx-wall-user-info gx-flex-nowrap gx-align-items-center">
            <span class="ant-avatar gx-mr-3 gx-mb-2 gx-size-50 ant-avatar-circle ant-avatar-image">
              <img src="https://via.placeholder.com/500x500"></img>
            </span>
            <div class="gx-media-body">
              <h5 class="gx-wall-user-title">By: {props.question.owner}</h5>
              <p class="gx-text-grey gx-fs-sm gx-mb-0">
                {props.question.question_date.substring(0, 10)}
              </p>
            </div>
          </div>
          <p></p>

          <div class="gx-wall-comment-box">
            <div class="gx-media gx-flex-nowrap gx-wall-user-info gx-mb-3">
              <div class="gx-media-body">
                <Link to={"/question/question-details/" + props.question._id}>
                  <h3 class="gx-wall-user-title">{props.question.title}</h3>
                </Link>
                <p class="gx-text-grey gx-fs-sm gx-mb-0">
                  {props.question.question_date.substring(0, 10)}
                </p>
                <p class="gx-mt-2">{props.question.contentText}</p>
              </div>
            </div>
          </div>
          <div class="gx-wall-medialist">
            <div class="gx-gallery-grid gx-gallery-2">
              <div class="gx-gallery-item">
                <img
                  class="gx-img-fluid"
                  src={`/uploads/Screenshot-Post--${props.question.image}`}
                  alt="post"
                ></img>
              </div>
            </div>
          </div>
          <div class="gx-flex-row gx-mb-2 gx-mb-xl-3">
            <p class="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
              <i class="icon icon-view-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"></i>
              <span class="gx-d-inline-flex gx-vertical-align-middle">
                {props.question.views} likes
              </span>
            </p>
            <p class="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
              <i class="icon icon-like-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"></i>
              <span class="gx-d-inline-flex gx-vertical-align-middle">
                {props.question.votes} votes
              </span>
            </p>
            <p class="gx-fs-sm gx-pointer gx-mr-3 gx-text-grey">
              <i class="icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"></i>
              <span class="gx-d-inline-flex gx-vertical-align-middle">
                {props.question.answers.length} comment
              </span>
            </p>
          </div>
          <div class="gx-flex-row">
            <button type="button" class="ant-btn ant-btn-primary ant-btn-sm">
              <span>Like</span>
            </button>
            <button
              type="button"
              class="ant-btn gx-btn-primary-light ant-btn-sm"
            >
              <span>Comment</span>
            </button>
            <button 
            type="button" 
            class="ant-btn ant-btn-danger ant-btn-background-ghost ant-btn-sm">
              <span>Report</span>
              </button>
          </div>
          <div class="gx-wall-comment-box">
            <div class="gx-media gx-mb-2">
              <span class="ant-avatar gx-mr-3 gx-size-36 ant-avatar-circle ant-avatar-image">
                <img src="https://via.placeholder.com/500x500"></img>
              </span>
              <div class="gx-media-body">
                <textarea
                  id="required"
                  class="gx-border-0 ant-input"
                  placeholder="Type Comments"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Col>
);
const Course = props => (
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
          <p className="gx-mb-0">{props.course.requirments}</p>
        </div>
      </div>
    </Widget>
  </Col>
);
const Today = props => (
  <Row>
    <li mode="alternate" class="ant-timeline-item">
      <div class="ant-timeline-item-tail"></div>
      <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
        <span class="ant-avatar gx-size-40 ant-avatar-square ant-avatar-image">
          <img
            class="gx-img-fluid"
            src={`/uploads/Screenshot-Post--${props.question.image}`}
            alt="post"
          ></img>
        </span>
      </div>
      <div class="ant-timeline-item-content">
        <p class="gx-mb-0">
          <span class="gx-link">{props.question.title}</span>
        </p>
      </div>
    </li>

    <div></div>
  </Row>
);
const Yesterday = props => (
  <Row>
    <li mode="alternate" class="ant-timeline-item">
      <div class="ant-timeline-item-tail"></div>
      <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
        <span class="ant-avatar gx-size-40 ant-avatar-square ant-avatar-image">
          <img
            class="gx-img-fluid"
            src={`/uploads/Screenshot-Post--${props.question.image}`}
            alt="post"
          ></img>
        </span>
      </div>
      <div class="ant-timeline-item-content">
        <p class="gx-mb-0">
          <span class="gx-link">{props.question.title}</span>
        </p>
      </div>
    </li>

    <div></div>
  </Row>
);
const User = props => (
  <div>
    <div
      class="gx-wall-scroll"
    >
      <div >
        <div class="gx-profileon">
          <div class="gx-profileon-thumb gx-profileon-thumb-htctrcrop">
            <img src="https://via.placeholder.com/500x500" alt=""></img>
          </div>
          <div class="gx-profileon-content">
            <p class="gx-profileon-title">Chelsea Jones @chelsea</p>
            <span class="gx-fs-sm">Florida, USA</span>
          </div>
        </div>
        <div class="gx-follower gx-text-center">
          <ul class="gx-follower-list">
            <li>
              <span class="gx-follower-title">2k+</span>
              <span>Followers</span>
            </li>
            <li>
              <span class="gx-follower-title">847</span>
              <span>Following</span>
            </li>
            <li>
              <span class="gx-follower-title">327</span>
              <span>project</span>
            </li>
          </ul>
        </div>
        <div class="gx-mb-xl-4 gx-mb-3">
          <p>You are following Chelsea Jones @chelsea</p>
          <button
            type="button"
            class="ant-btn gx-btn-sm gx-mb-0 ant-btn-primary"
          >
            <span>Unfollow</span>
          </button>
        </div>
        <div class="gx-entry-sec">
          <h2 class="gx-entry-title ">
            Interests
            <span class="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
          </h2>
          <ul class="gx-list-inline">
            <li>
              <span class="gx-link gx-btn gx-btn-white gx-mb-10">javaScript</span>
            </li>
            <li>
              <span class="gx-link gx-btn gx-btn-white gx-mb-10">ReactJs</span>
            </li>
            <li>
              <span class="gx-link gx-btn gx-btn-white gx-mb-10">Symfony</span>
            </li>
            <li>
              <span class="gx-link gx-btn gx-btn-white gx-mb-10">
               php
              </span>
            </li>
            <li>
              <span class="gx-link gx-btn gx-btn-white gx-mb-10">Mongoose</span>
            </li>
          </ul>
        </div>
        <div class="gx-entry-sec">
          <h2 class="gx-entry-title ">
            <span>
              Friends - 530
              <span class="gx-text-grey">(27 Mutual)</span>
            </span>
            <span class="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
          </h2>
          <ul class="gx-fnd-list">
            <li class="gx-mb-2">
              <div class="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div class="gx-user-fnd-content">
                  <span class="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span class="ant-badge-status-dot ant-badge-status-success"></span>
                    <span class="ant-badge-status-text"></span>
                  </span>
                  <h6>Chelsea</h6>
                </div>
              </div>
            </li>
            <li class="gx-mb-2">
              <div class="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div class="gx-user-fnd-content">
                  <span class="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span class="ant-badge-status-dot ant-badge-status-error"></span>
                    <span class="ant-badge-status-text"></span>
                  </span>
                  <h6>Kenery Thomson</h6>
                </div>
              </div>
            </li>
            <li class="gx-mb-2">
              <div class="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div class="gx-user-fnd-content">
                  <span class="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span class="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span class="ant-badge-status-text"></span>
                  </span>
                  <h6>Amanda</h6>
                </div>
              </div>
            </li>
            <li class="gx-mb-2">
              <div class="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div class="gx-user-fnd-content">
                  <span class="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span class="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span class="ant-badge-status-text"></span>
                  </span>
                  <h6>Joshua</h6>
                </div>
              </div>
            </li>
            <li class="gx-mb-2">
              <div class="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div class="gx-user-fnd-content">
                  <span class="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span class="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span class="ant-badge-status-text"></span>
                  </span>
                  <h6>Alex Mulski</h6>
                </div>
              </div>
            </li>
            <li class="gx-mb-2">
              <div class="gx-user-fnd">
                <img alt="..." src="https://via.placeholder.com/150x150"></img>
                <div class="gx-user-fnd-content">
                  <span class="ant-badge ant-badge-status ant-badge-not-a-wrapper">
                    <span class="ant-badge-status-dot ant-badge-status-warning"></span>
                    <span class="ant-badge-status-text"></span>
                  </span>
                  <h6>Stella Johnson</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
    
      </div>
      <div class="track-horizontal">
        <div></div>
      </div>
      <div></div>
    </div>
  </div>
);
const { Search } = Input;

const Searchh =  props =>(
/*<Space direction="vertical">
<Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
<Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
<Search placeholder="input search text" onSearch={onSearch} enterButton />
<Search
  placeholder="input search text"
  allowClear
  enterButton="Search"
  size="large"
  onSearch={onSearch}
/>

</Space>
*/
<Search placeholder="Search ..." onSearch={onSearch} />

);

const onSearch = value => console.log(value);
export class AllPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      courses: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/question/")
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/course/find3")
      .then(response => {
        this.setState({ courses: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  questionList() {
    return this.state.questions.map(currentquestion => {
      return <Question question={currentquestion} />;
    });
  }
  CoursesList() {
    return this.state.courses.map(currentcourse => {
      return <Course course={currentcourse} />;
    });
  }
  Today() {
    return this.state.questions.map(currentquestion => {
      return <Today question={currentquestion} />;
    });
  }
  Yesterday() {
    return this.state.questions.map(currentquestion => {
      return <Yesterday question={currentquestion} />;
    });
  }
  User(){
    return <User />
  }
  Search (){
    return <Search />
  }
  render() {
    return (
      <div className="gx-main-content">
       
        <Row gutter={24}>
          <Col className="gutter-row" span={6}>
            
             {this.User()}
           
          </Col>
          <Col className="gutter-row" span={12}>
          <Row>{this.Search()}</Row>
            <div className="gx-module-add-task">
            <div className="gx-testimonial-bg gx-standard gx-slide-item gx-text-left">
      <div className="gx-media">
       
        <div className="gx-media-body">
          <div className="gx-testimonial-des">
             <Link to={"/question/ask-question/"}>
                <h1 className="gx-fs-xxl gx-font-weight gx-text-white">

                Whats in your mind ?
                  </h1>
              </Link>
           
          </div>
        </div>
      </div>
    </div>
             
            </div>
          

            {this.questionList()}
          </Col>
          <Col className="gutter-row" span={6}>
            <div class="ant-col gx-d-none gx-d-lg-block ant-col-xs-24">
              <div class="gx-wall-scroll">
                <div>
                  <div class="gx-entry-sec">
                    <h2 class="gx-entry-title ">
                      <h3>Available Courses</h3>
                      <span class="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
                    </h2>
                    <Row gutter={[16, 24]}>{this.CoursesList()}</Row>
                  </div>
                  <span class="gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4">
                    <Link to={"/courses/courses-list"}> See All Courses </Link>
                    <i class="icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"></i>
                  </span>
                </div>
                <div class="gx-entry-sec">
                  <h2 class="gx-entry-title ">
                    Recent Posts
                    <span class="gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"></span>
                  </h2>
                  <div class="gx-timeline-info">
                    <h4 class="gx-timeline-info-day">Today</h4>
                    {this.Today()}
                  </div>
                  <div class="gx-timeline-info">
                    <h4 class="gx-timeline-info-day">Yesterday</h4>
                    {this.Yesterday()}
                  </div>
                  <span class="gx-link gx-btn-link">Load More</span>
                </div>
                <div class="track-horizontal"></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AllPosts;
