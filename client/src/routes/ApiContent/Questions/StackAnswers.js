import React from 'react';
import { Tag, Row, Card } from "antd";

const StackAnswers = (props) => {
    return (
        <Card>
              <div
        class="question-summary search-result"
        id="question-summary-31079081"
        data-position="1"
      >
        <div class="summary">
          <div class="result-link">
            <h3>
              <a href={props.post.link} class="question-hyperlink">
                {props.post.title}{" "}
              </a>
            </h3>
          </div>
          <div class="excerpt"></div>
          <div class="subcommunities float-left"></div>
          <Row>
            <div>
              {props.post.tags[0] ? (
                <Tag color="#A9D9E3">{props.post.tags[0]}</Tag>
              ) : (
                <div> </div>
              )}
            </div>
            <div>
              {props.post.tags[1] ? (
                <Tag color="#A9D9E3">{props.post.tags[1]}</Tag>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              {props.post.tags[2] ? (
                <Tag color="#A9D9E3">{props.post.tags[2]}</Tag>
              ) : (
                <div> </div>
              )}
            </div>
            <div>
              {props.post.tags[3] ? (
                <Tag color="#A9D9E3">{props.post.tags[3]}</Tag>
              ) : (
                <div> </div>
              )}
            </div>
          </Row>
    
          <div class="started fr">
            asked by{" "}
            <a href="/users/5056/george-mauer">{props.post.owner.display_name}</a>{" "}
          </div>
        </div>
      </div>
        </Card>
      
    );
}
export default StackAnswers;