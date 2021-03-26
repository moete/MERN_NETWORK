import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Question = props => (
    <div class="gx-user-list">
      <img
        alt="avatar"
        src="https://via.placeholder.com/150x150"
        class="gx-avatar-img gx-avatar-img-lg gx-border-0"
      />
      <div class="gx-description">
  
        <span> <Link to={"/question/question-details/"}>  <h3>{props.question.title} </h3></Link></span>
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
            <span><Link to={"/question-list/edit-question/"+props.question._id}>edit</Link></span>
          </li>
        </ul>
      </div>
    </div>
  );

export class QuestionDetails extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
            question:''
         
        };
      }
      componentDidMount() {
        axios.get('http://localhost:5000/question/'+this.props.match.params.id)
          .then(response => {
            this.setState({
              title: response.data.title,
              contentText: response.data.contentText,
              tags: response.data.tags
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
        }   
        
        questionDetails() {
            
              return <Question question />;
            
          }
    render() {
        return (
            <div>
                 <div className="form-group"> 
          <label>Title: </label>
          {this.questionDetails()}
              
            
        </div>
            </div>
        )
    }
}

export default QuestionDetails
