import React  from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const JOB= ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/job-board`}/>


    <Route path={`${match.url}/all-jobs`} component={asyncComponent(() => import('./Jobs'))}/>

    <Route path={`${match.url}/job-details`} component={asyncComponent(() => import('./JobDetail'))}/>

    <Route path={`${match.url}/job-save`} component={asyncComponent(() => import('./JobSave'))}/>

    
  </Switch>
);

export default JOB;