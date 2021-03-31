import React from "react";
import { Button, Checkbox, Form, Icon, Input, message } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import "./bg_register.css";
import { Col, Row } from "antd";
import land from "../assets/images/landing.jpg";
import BelowHeader from "./Topbar/BelowHeader";
=======

>>>>>>> origin/content
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
<<<<<<< HEAD
  fetchUser,
=======
  userSignIn,
>>>>>>> origin/content
  userTwitterSignIn
} from "appRedux/actions/Auth";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

class SignIn extends React.Component {
<<<<<<< HEAD
  state = {
    email: "",
    password: ""
  };
  handleOnChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };
=======
>>>>>>> origin/content
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.showAuthLoader();
<<<<<<< HEAD
        this.props.fetchUser(values);
      }
    });
  };
=======
        this.props.userSignIn(values);
      }
    });
  };

>>>>>>> origin/content
  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push("/");
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;

    return (
<<<<<<< HEAD
      <div className="myreg gx-app-login-wrap">
        <div style={{ margin: "0 5%", justifyItems: "center" }} className=" ">
          <Row>
            <Col xs={24} xl={12}>
              <Row>
                <h1 className="mytitle">
                  Welcome to your
                  <br />
                  Social Collaborative Network
                </h1>
              </Row>
              <div
                style={{ height: "auto", padding: "2%" }}
                className="gx-app-login-wrap"
              >
                <div
                  className="gx-app-login-container"
                  style={{
                    width: "fit-content",
                    marginLeft: "0",
                    marginRight: "auto"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#28aaeb21",
                      borderRadius: "30px"
                    }}
                    className="gx-app-login-main-content"
                  >
                    <div
                      style={{
                        width: "auto"
                      }}
                      className="gx-app-login-content"
                    >
                      <Form
                        onSubmit={this.handleSubmit}
                        className="gx-signin-form gx-form-row0"
                      >
                        <FormItem
                          onSubmit={this.handleSubmit}
                          className="gx-signin-form gx-form-row0"
                        >
                          <FormItem>
                            {getFieldDecorator("email", {
                              rules: [
                                {
                                  required: true,
                                  type: "email",
                                  message: "The input is not valid E-mail!"
                                }
                              ]
                            })(<Input placeholder="Email" />)}
                          </FormItem>
                          <FormItem>
                            {getFieldDecorator("password", {
                              rules: [
                                {
                                  required: true,
                                  message: "Please input your Password!"
                                }
                              ]
                            })(
                              <Input type="password" placeholder="Password" />
                            )}
                          </FormItem>
                          <FormItem>
                            {getFieldDecorator("remember", {
                              valuePropName: "checked",
                              initialValue: true
                            })(<Checkbox>Remember me</Checkbox>)}
                            <span className="gx-signup-form-forgot gx-link">
                              <IntlMessages id="appModule.termAndCondition" />
                            </span>
                          </FormItem>
                          <FormItem>
                            <Button
                              type="primary"
                              className="gx-mb-0"
                              htmlType="submit"
                            >
                              <IntlMessages id="app.userAuth.signIn" />
                            </Button>
                            <span>
                              <IntlMessages id="app.userAuth.or" />
                            </span>{" "}
                            <Link to="/signup">
                              <IntlMessages id="app.userAuth.signUp" />
                            </Link>
                          </FormItem>
                          <div className="gx-flex-row gx-justify-content-between">
                            <span>or connect with</span>
                            <ul className="gx-social-link">
                              <li>
                                <Icon
                                  type="google"
                                  onClick={() => {
                                    this.props.showAuthLoader();
                                    this.props.userGoogleSignIn();
                                  }}
                                />
                              </li>
                              <li>
                                <Icon
                                  type="facebook"
                                  onClick={() => {
                                    this.props.showAuthLoader();
                                    this.props.userFacebookSignIn();
                                  }}
                                />
                              </li>
                              <li>
                                <Icon
                                  type="github"
                                  onClick={() => {
                                    this.props.showAuthLoader();
                                    this.props.userGithubSignIn();
                                  }}
                                />
                              </li>
                              <li>
                                <Icon
                                  type="twitter"
                                  onClick={() => {
                                    this.props.showAuthLoader();
                                    this.props.userTwitterSignIn();
                                  }}
                                />
                              </li>
                            </ul>
                          </div>
                          <span className="gx-text-light gx-fs-sm">
                            {" "}
                            demo user email: 'demo@example.com' and password:
                            'demo#123'
                          </span>
                        </FormItem>
                      </Form>
                    </div>
                    {loader ? (
                      <div className="gx-loader-view">
                        <CircularProgress />
                      </div>
                    ) : null}
                    {showMessage
                      ? message.error(alertMessage.toString())
                      : null}
                  </div>
                </div>
              </div>
            </Col>
            <Col
              style={{
                marginTop: "70px"
              }}
              xs={24}
              xl={12}
            >
              <img
                style={{
                  width: "60%",

                  borderRadius: "30px"
                }}
                src={land}
                alt="Nature"
                className="responsive animation center"
              ></img>
            </Col>
          </Row>
=======
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-login-content">
              <Form
                onSubmit={this.handleSubmit}
                className="gx-signin-form gx-form-row0"
              >
                <FormItem>
                  {getFieldDecorator("email", {
                    initialValue: "demo@example.com",
                    rules: [
                      {
                        required: true,
                        type: "email",
                        message: "The input is not valid E-mail!"
                      }
                    ]
                  })(<Input placeholder="Email" />)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("password", {
                    initialValue: "demo#123",
                    rules: [
                      { required: true, message: "Please input your Password!" }
                    ]
                  })(<Input type="password" placeholder="Password" />)}
                </FormItem>
                <FormItem>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(
                    <Checkbox>
                      <IntlMessages id="appModule.iAccept" />
                    </Checkbox>
                  )}
                  <span className="gx-signup-form-forgot gx-link">
                    <IntlMessages id="appModule.termAndCondition" />
                  </span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signIn" />
                  </Button>
                  <span>
                    <IntlMessages id="app.userAuth.or" />
                  </span>{" "}
                  <Link to="/signup">
                    <IntlMessages id="app.userAuth.signUp" />
                  </Link>
                </FormItem>
                <div className="gx-flex-row gx-justify-content-between">
                  <span>or connect with</span>
                  <ul className="gx-social-link">
                    <li>
                      <Icon
                        type="google"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userGoogleSignIn();
                        }}
                      />
                    </li>
                    <li>
                      <Icon
                        type="facebook"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userFacebookSignIn();
                        }}
                      />
                    </li>
                    <li>
                      <Icon
                        type="github"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userGithubSignIn();
                        }}
                      />
                    </li>
                    <li>
                      <Icon
                        type="twitter"
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userTwitterSignIn();
                        }}
                      />
                    </li>
                  </ul>
                </div>
                <span className="gx-text-light gx-fs-sm">
                  {" "}
                  demo user email: 'demo@example.com' and password: 'demo#123'
                </span>
              </Form>
            </div>

            {loader ? (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            ) : null}
            {showMessage ? message.error(alertMessage.toString()) : null}
          </div>
>>>>>>> origin/content
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignIn);

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser };
};

export default connect(mapStateToProps, {
<<<<<<< HEAD
  fetchUser,
=======
  userSignIn,
>>>>>>> origin/content
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(WrappedNormalLoginForm);
