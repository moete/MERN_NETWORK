import React  from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";
import ReactDOM from 'react-dom';


const JOB= ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/job-board`}/>
    <Route path={`${match.url}/all-jobs`} component={asyncComponent(() => import('./Jobs'))}/>
    <Route path={`${match.url}/all`} component={asyncComponent(() => import('./chat/App'))}/>
    <Route path={`${match.url}/all-stats`} component={asyncComponent(() => import('./chart/Chart'))}/>
    <Route path={`${match.url}/all-saved`} component={asyncComponent(() => import('./SavedJob'))}/>


 
    
  </Switch>
);

export default JOB;