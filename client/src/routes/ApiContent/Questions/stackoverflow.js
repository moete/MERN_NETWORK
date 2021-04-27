import React, { Component } from "react";
import { Card, Alert, Spin, Input, Row, Tag } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
const { Search } = Input;
const Stack = props => (
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
      <div class="excerpt">answer</div>
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
        asked{" "}
        <span title="2015-06-26 17:38:51Z" class="relativetime">
          {props.post.creation_date}
        </span>{" "}
        by{" "}
        <a href="/users/5056/george-mauer">{props.post.owner.display_name}</a>{" "}
      </div>
    </div>
  </div>
);
export class stackoverflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      search: "",
      items: [],
      isLoaded: true,
      site: "stackoverflow",
      posts: []
    };
  }
  async componentDidMount() {
    fetch(
      "https://api.stackexchange.com/2.2/search/advanced/?" +
        "site=" +
        this.state.site +
        "&title=" +
        this.state.title +
        "&pagesize=100" +
        "&page=100" +
        "&sort=votes" +
        "&order=desc"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ posts: myJson, isLoaded: false });

        console.log(myJson);
      })
      .catch(error => console.error(error)); //If error occurs you will get here
  }

  onSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 100)
    });
  }
  Liste() {
    if (this.state.search == "") {
      return <div>search</div>;
    }
    let filtredPosts = this.state.posts.items.filter(currentPost => {
      return (
        currentPost.title
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    if (filtredPosts.length > 0) {
      return filtredPosts.map(currentPost => {
        return <Stack post={currentPost} />;
      });
    } else
      return (
        <Card>
          <div align="center">
            <h1>
              <i className="icon icon-search-new" />
            </h1>
            <h2>
              We couldn't find anything for <a>{this.state.search}</a>
            </h2>
            <h3>Try different or less specific keywords.</h3>
          </div>
          <Link to={"/question/stackoverflow/"}>
            <h1>autre rep</h1>
          </Link>
        </Card>
      );
  }
  PostsList() {
    if (this.state.search == "") {
      return <div>search</div>;
    } else {
      return this.state.posts.items.map(currentPost => {
        return <Stack post={currentPost} />;
      });
      //return <div> stack</div>
    }
  }
  render() {
    var { isLoaded, search, items } = this.state;
    return (
      <>
        <Row>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton="Search"
            value={this.state.search}
            onChange={this.onSearch.bind(this)}
          />
        </Row>
        <div> {search}</div>
        <Card>
          <div>
            {this.state.isLoaded ? (
              <div>
                <Spin tip="Loading..."></Spin>
              </div>
            ) : (
              <div> {this.Liste()}</div>
            )}
          </div>
        </Card>
      </>
    );
  }
}

export default stackoverflow;
