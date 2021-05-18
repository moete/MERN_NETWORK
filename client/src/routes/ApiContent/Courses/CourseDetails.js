import React, { Component } from "react";
import { Avatar, Card, Button, Form, Input, Icon, Col, Upload } from "antd";
import axios from "axios";

const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
    md: { span: 16 },
    lg: { span: 12 }
  }
};
const Chapter = props => (
  <Card >
    <div>
    {" "}
    
    {props.chapter.ChapterTitle}
  </div>
 <div> <video  src={`/uploads/courses/chapters/Chapter--${props.chapter.source.originalname}`}
  controls poster="/uploads/courses/Logo/Capture.png" width="600"></video>
</div>
<small >{props.chapter.creation_date.substring(0, 10)}</small>

  </Card>
  
);
class CourseDetals extends Component {
  constructor(props) {
    super(props);
    this.onChangeChapterTitle = this.onChangeChapterTitle.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      requirements: [],
      technologies: [],
      chapters: [],
      owner: "",
      creation_date: "",
      image: "",
      ChapterTitle: "",
      source: ""
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/course/${"60948a27b7c6321d34f8bf03"}`  )
      .then(response => {
        this.setState({
          _id: response.data._id,
          title: response.data.title,
          description: response.data.description,
          requirements: response.data.requirements,
          technologies: response.data.technologies,
          language: response.data.language,
          owner: response.data.owner,
          creation_date: response.data.creation_date,
          image: response.data.image,
          chapters: response.data.chapters
        });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  onChangeChapterTitle(e) {
    this.setState({
      ChapterTitle: e.target.value
    });
  }
  onChangeSource(e) {
    this.setState({
      source: e.target.files[0]
    });
  }
  ChaptersList() {
    return this.state.chapters.map(currentchapter => {
      return <Chapter chapter={currentchapter} key= {currentchapter._id} />;
    });
  }
  myFunction = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
    var x = document.getElementById("chapter");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
          const formData = new FormData();
  
          formData.append("ChapterTitle", this.state.ChapterTitle);
          formData.append("source", this.state.source);
          
          console.log(formData);
          const config = {
            headers: {
              "content-type": "multipart/form-data"
            }
          };
          axios
          .post(
            "http://localhost:5000/course/addChapter/"+ this.state._id,
            formData, config)
            .then(res => console.log(res.data))
          
        this.props.history.push("/courses/course-details/" + this.state._id );
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Card>
          <div className="gx-testimonial">
            <center>
              <span className="gx-testimonial-quote">
                <i className="icon icon-quote-backward" />{" "}
              </span>
              <blockquote>{this.state.title}</blockquote>
              <Avatar
                className="gx-size-120 gx-mb-3"
                alt="avatar"
                src={`/uploads/courses/Logo/Course--${this.state.image}`}
              />
              <h4 className="gx-text-primary">{this.state.requirements[0]}</h4>
              <h4 className="gx-text-primary">{this.state.requirements[1]}</h4>
            </center>
            <h3 className="gx-description">{this.state.description}</h3>
            <small className="gx-description">
              {this.state.creation_date.substring(0, 10)}
            </small>
          </div>
          <Col> <h1> {this.state.chapters.length} Chapters</h1>{this.ChaptersList()}</Col>
          <Button
            type="dashed"
            className="gx-link gx-btn-link gx-ml-2"
            onClick={this.myFunction}
          >
            Add a Chapter <Icon type={this.state.expand ? "up" : "down"} />
          </Button>
          <div id="chapter" style={{ display: "none" }}>
            <Form onSubmit={this.onSubmit} encType="multipart/form-data">
              <FormItem
                {...formItemLayout}
                label="Chapter description"
                hasFeedback
                value={this.state.ChapterTitle}
                onChange={this.onChangeChapterTitle}
              >
                {getFieldDecorator("ChapterTitle", {
                  rules: [
                    {
                      required: true,
                      message: "please enter a litle description"
                    }
                  ]
                })(<TextArea placeholder="description .." />)}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="source"
                onChange={this.onChangeSource}
              >
                {getFieldDecorator("source", {
                  rules: [{ required: true, message: "Chpapter in missing !" }]
                })(
                  <Upload name="logo" action="/upload.do" listType="file">
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </FormItem>
            </Form>
            <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
              submit
            </Button>
          </div>
        </Card>
      </>
    );
  }
}

export default Form.create()(CourseDetals);
