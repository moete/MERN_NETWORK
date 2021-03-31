import React from "react";
<<<<<<< HEAD
import { Button, Checkbox, Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import "./bg_register.css";

import logonet from "../assets/images/net-logo.png";
import { connect } from "react-redux";
=======
import {Button, Checkbox, Form, Icon, Input} from "antd";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
>>>>>>> origin/content
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
<<<<<<< HEAD
  signUserUp,
=======
  userSignUp,
>>>>>>> origin/content
  userTwitterSignIn
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
<<<<<<< HEAD
import { message } from "antd/lib/index";
=======
import {message} from "antd/lib/index";
>>>>>>> origin/content
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

class SignUp extends React.Component {
<<<<<<< HEAD
  handleSubmit = e => {
=======
  handleSubmit = (e) => {
>>>>>>> origin/content
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        this.props.showAuthLoader();
<<<<<<< HEAD
        this.props.signUserUp(values);
=======
        this.props.userSignUp(values);
>>>>>>> origin/content
      }
    });
  };

  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      email: "demo@example.com",
      password: "demo#123"
    };
=======
      email: 'demo@example.com',
      password: 'demo#123'
    }
>>>>>>> origin/content
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
<<<<<<< HEAD
      this.props.history.push("/");
=======
      this.props.history.push('/');
>>>>>>> origin/content
    }
  }

  render() {
<<<<<<< HEAD
    const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="myreg gx-app-login-wrap">
        <div
          className="gx-app-login-container"
          style={{
            width: "fit-content"
          }}
        >
          <div className="gx-app-login-main-content">
            <div
              style={{
                width: "auto"
              }}
              className="gx-app-login-content"
            >
              <img src={logonet} alt="Nature"></img>
              <Form
                onSubmit={this.handleSubmit}
                className="gx-signup-form gx-form-row0"
              >
                <FormItem>
                  {getFieldDecorator("name", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(<Input placeholder="Username" />)}
                </FormItem>

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
                  <span className="gx-link gx-signup-form-forgot">
                    <IntlMessages id="appModule.termAndCondition" />
                  </span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signUp" />
                  </Button>
                  <span>
                    <IntlMessages id="app.userAuth.or" />
                  </span>{" "}
                  <Link to="/signin">
                    <IntlMessages id="app.userAuth.signIn" />
                  </Link>
=======
    const {getFieldDecorator} = this.props.form;
    const {showMessage, loader, alertMessage} = this.props;
    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src='https://via.placeholder.com/272x395' alt='Neature'/>
              </div>
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="app.userAuth.signUp"/></h1>
                <p><IntlMessages id="app.userAuth.bySigning"/></p>
                <p><IntlMessages id="app.userAuth.getAccount"/></p>
              </div>
              <div className="gx-app-logo">
                <img alt="example" src={require("assets/images/logo.png")}/>
              </div>
            </div>

            <div className="gx-app-login-content">
              <Form onSubmit={this.handleSubmit} className="gx-signup-form gx-form-row0">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{required: true, message: 'Please input your username!'}],
                  })(
                    <Input placeholder="Username"/>
                  )}
                </FormItem>

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                  })(
                    <Input placeholder="Email"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                    <Input type="password" placeholder="Password"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                  )}
                  <span className="gx-link gx-signup-form-forgot"><IntlMessages
                    id="appModule.termAndCondition"/></span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signUp"/>
                  </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signin"><IntlMessages
                  id="app.userAuth.signIn"/></Link>
>>>>>>> origin/content
                </FormItem>
                <div className="gx-flex-row gx-justify-content-between">
                  <span>or connect with</span>
                  <ul className="gx-social-link">
                    <li>
<<<<<<< HEAD
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
=======
                      <Icon type="google" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userGoogleSignIn();
                      }}/>
                    </li>
                    <li>
                      <Icon type="facebook" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userFacebookSignIn();
                      }}/>
                    </li>
                    <li>
                      <Icon type="github" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userGithubSignIn();
                      }}/>
                    </li>
                    <li>
                      <Icon type="twitter" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userTwitterSignIn();
                      }}/>
>>>>>>> origin/content
                    </li>
                  </ul>
                </div>
              </Form>
            </div>
<<<<<<< HEAD
            {loader && (
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            )}
            {showMessage && message.error(alertMessage)}
          </div>
        </div>
      </div>
    );
  }
=======
            {loader &&
            <div className="gx-loader-view">
              <CircularProgress/>
            </div>
            }
            {showMessage &&
            message.error(alertMessage)}
          </div>
        </div>
      </div>

    );
  }

>>>>>>> origin/content
}

const WrappedSignUpForm = Form.create()(SignUp);

<<<<<<< HEAD
const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser };
};

export default connect(mapStateToProps, {
  signUserUp,
=======
const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignUp,
>>>>>>> origin/content
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(WrappedSignUpForm);
