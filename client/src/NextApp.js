<<<<<<< HEAD
import React, { useEffect } from "react";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import setAuthToken from "../src/util/setAuthToken";
import "assets/vendors/style";
import "styles/wieldy.less";
import configureStore, { history } from "./appRedux/store";
import "./firebase/firebase";
import App from "./containers/App/index";
import { loadUser } from "./appRedux/actions/Auth";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
export const store = configureStore();

const NextApp = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
=======
import React from "react";
import {ConnectedRouter} from "react-router-redux";
import {Provider} from "react-redux";
import {Route, Switch} from "react-router-dom";

import "assets/vendors/style";
import "styles/wieldy.less";
import configureStore, {history} from "./appRedux/store";
import "./firebase/firebase";
import App from "./containers/App/index";


export const store = configureStore();

const NextApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>;

>>>>>>> origin/content

export default NextApp;
