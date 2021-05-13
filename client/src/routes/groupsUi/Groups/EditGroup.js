import React, { Component } from "react";
import axios from "axios";

export default class EditGroup extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangetheme = this.onChangeTheme.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      theme: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://networkymern.herokuapp.com/group/" + this.props.match.params.id
      )
      .then(response => {
        this.setState({
          name: response.data.name,
          theme: response.data.theme
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const group = {
      name: this.state.name,
      theme: this.state.theme
    };

    console.log(group);

    axios
      .post("/grou/update/" + this.props.match.params.id, group)
      .then(res => console.log(res.data));

    window.location = "/group/group-list";
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>theme: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.theme}
              onChange={this.onChangeTheme}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Group"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
