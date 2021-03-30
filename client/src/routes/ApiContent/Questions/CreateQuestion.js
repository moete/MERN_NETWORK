import React, { Component } from 'react'
import axios from 'axios';
import {Card, Form, Input, Button} from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 5},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 18},
    md: {span: 16},
    lg: {span: 12},
  },
};
  


export class CreateQuestion extends Component {
    constructor(props) {
        super(props);

        this.onChangeTile = this.onChangeTile.bind(this);
    this.onChangeContentText = this.onChangeContentText.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            title: '',
            contentText: '',
            tags:'',
         //   users: []
          }
    }
    onChangeTile(e) {
        this.setState({
            title: e.target.value
        })
      }
      onChangeContentText(e) {
        this.setState({
            contentText: e.target.value
        })
      }
      onChangeTags(e) {
        this.setState({
            tags: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();
    
        const question = {
            title: this.state.title,
          contentText: this.state.contentText,
          tags: this.state.tags,
        
        }
    
        console.log(question);
    
        axios.post('http://localhost:5000/question/add', question)
          .then(res => console.log(res.data));
    
        window.location = '/question/my-posts';
      }
    render() {
         return (
            <Card className="gx-card" title="Ask a question">
      <Form>
              <FormItem
          {...formItemLayout}
          label="Title"
          hasFeedback
          value={this.state.title}
          onChange={this.onChangeTile}
       //   validateStatus="success"
        >
          <Input placeholder="I'm the title" id="success"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Body"
          hasFeedback
          validateStatus="success"
          value={this.state.contentText}
          onChange={this.onChangeContentText}
        >
           <TextArea rows={6} placeholder="I'm the content text" id="success"/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Tags"
          hasFeedback
          validateStatus="success"
          value={this.state.tags}
          onChange={this.onChangeTags}
        >
          <Input placeholder="Tags & technologies" id="success"/>
        </FormItem>
      </Form>
      <Button type="primary" htmlType="submit" onClick={this.onSubmit}>Post your question</Button>
    </Card>
         )
    }
}

export default CreateQuestion
