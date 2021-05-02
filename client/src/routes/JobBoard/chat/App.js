import React from 'react' ;
import { ChatEngine } from 'react-chat-engine';
//import './App.css';
import {ChatFeed} from './components/ChatFeed' ;

const projectID = '6b91339d-4064-4527-9c33-23ddc1f95ce9';

const App = () => {

  return (
    <>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName= "youzarsif"
      userSecret= "B967C73C"
      
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
     // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      

    />
    </>
  );
};

// infinite scroll, logout, more customizations...

export default App;