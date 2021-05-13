import React, { useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
//import './App.css';
import { ChatFeed } from "./components/ChatFeed";
import { connect } from "react-redux";
import { getProfiles } from "../../../appRedux/actions/profile";
import { get } from "lodash";

const projectID = "6b91339d-4064-4527-9c33-23ddc1f95ce9";

const App = ({ getProfiles, profile: { profiles } }) => {
  useEffect(() => {

    getProfiles();
  }, []);
  const data = profiles ;
  console.log(data)
  console.log(localStorage.getItem('email'))
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('email')}
      userSecret={localStorage.getItem('email')}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

// infinite scroll, logout, more customizations...

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(App);
