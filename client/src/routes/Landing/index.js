import React from "react";
import "./landing.css";
class Landing extends React.Component {
  render() {
    return (
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="">
              <a href="register.html" className="">
                Sign Up
              </a>
              <a href="login.html" className="">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Landing;
