import React from "react";
import ReactDOM from "react-dom";

<<<<<<< HEAD
import NextApp from "./NextApp";
import registerServiceWorker from "./registerServiceWorker";
// Add this import:
import { AppContainer } from "react-hot-loader";
=======
import NextApp from './NextApp';
import registerServiceWorker from './registerServiceWorker';
// Add this import:
import {AppContainer} from 'react-hot-loader';
>>>>>>> origin/content

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
<<<<<<< HEAD
      <NextApp />
    </AppContainer>,
    document.getElementById("root")
=======
      <NextApp/>
    </AppContainer>,
    document.getElementById('root')
>>>>>>> origin/content
  );
};

// Do this once
registerServiceWorker();

// Render once
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
<<<<<<< HEAD
  module.hot.accept("./NextApp", () => {
=======
  module.hot.accept('./NextApp', () => {
>>>>>>> origin/content
    render(NextApp);
  });
}
