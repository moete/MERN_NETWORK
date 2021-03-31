import React, { Component } from 'react'
<<<<<<< HEAD
import {Col, Card} from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
const Question = props => (
=======
import {Col, Card,Row} from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
const Question = props => (

<Col span={8} >
  <Card title= { <i class="icon icon-alert">{props.question.tags} </i>} extra={<span className="gx-link">More</span>}
   style={{ width: 390 , height: 300 }}>
  
>>>>>>> origin/content
    <div class="gx-user-list">
      <img
        alt="avatar"
        src="https://via.placeholder.com/150x150"
        class="gx-avatar-img gx-avatar-img-lg gx-border-0"
      />
      <div class="gx-description">
  
        <span> <Link to={"/question/question-details/"+props.question._id}>  <h3>{props.question.title} </h3></Link></span>
        <h5>
          By <span class="gx-link">{props.question.owner}</span>
        </h5>
       
        <p class="gx-mb-1"> {props.question.contentText}</p>
        <ul class="gx-list-inline gx-btn-list">
          <li>
            <span class="gx-link gx-meta-like">
              <i class="icon icon-like-o gx-text-red"></i>
              {props.question.views} views
            </span>
          </li>
          <li>
            <span class="gx-link gx-meta-comment">
<<<<<<< HEAD
              <i class="icon icon-chat-new"></i>
              {props.question.answers} comments
            </span>
          </li>
          <li>
            <span class="gx-link gx-meta-tags">
            <i class="icon icon-alert"></i>
              {props.question.tags} 
            </span>
          </li>
          <li>
            <span><Link to={"/question/edit-question/"+props.question._id}>edit</Link></span>
          </li>
        </ul>
      </div>
    </div>
=======
              <i class="icon icon-chat-new"/>
              {props.question.answers} comments
            </span>
          </li>
        </ul>
      </div>
    </div>

 </Card> </Col>
>>>>>>> origin/content
  );
export class FiltreByTags extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          questions: []
        };
      }
     
      componentDidMount() {
        axios
          .get("http://localhost:5000/question/")
          .then(response => {
            this.setState({ questions: response.data })
          })
          .catch(error => {
            console.log(error);
          });
      }
      questionList() {
        return this.state.questions.map(currentquestion => {
<<<<<<< HEAD
          return <Question question={currentquestion} />;
        });
      }
    render() {
        return (
            <Col span={8}>
           <Card title="Basic card" extra={<span className="gx-link">More</span>}>
           {this.questionList()}
          </Card>
          </Col>
=======
          if (currentquestion.confirm ==="true"){
            return <Question question={currentquestion} />;}
          });
        }
    render() {
        return (
          <Row gutter={16}>
         
           {this.questionList()}
           </Row>
>>>>>>> origin/content
        );
    }
}

export default FiltreByTags
