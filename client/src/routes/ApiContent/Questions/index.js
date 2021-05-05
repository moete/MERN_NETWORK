import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";
import history from "./../history";
const QuestionsViews = ({match}) => (
  <Switch  history={history}>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/question`}/>
    <Route path={`${match.url}/question-list`} component={asyncComponent(() => import('./AllPosts'))}/>
    <Route path={`${match.url}/ask-question`} component={asyncComponent(() => import('./CreateQuestion'))}/>
    <Route path={`${match.url}/question-details`} component={asyncComponent(() => import('./QuestionDetails'))}/>
    <Route path={`${match.url}/edit-question`} component={asyncComponent(() => import('./EditQuestion'))}/>
    <Route path={`${match.url}/filtre-tags`} component={asyncComponent(() => import('./FiltreByTags'))}/>
    <Route path={`${match.url}/my-posts`} component={asyncComponent(() => import('./My_Posts'))}/>
    <Route path={`${match.url}/stackoverflow`} component={asyncComponent(() => import('./stackoverflow'))}/>

  </Switch>
);

export default QuestionsViews;
