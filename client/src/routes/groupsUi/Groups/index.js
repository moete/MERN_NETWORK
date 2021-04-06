import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const GroupsViews = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/group`}/>
    <Route path={`${match.url}/group-list`} component={asyncComponent(() => import('./Allgroups'))}/>
    <Route path={`${match.url}/add-group`} component={asyncComponent(() => import('./CreateGroup'))}/>
    <Route path={`${match.url}/enter-group/:id`} component={asyncComponent(() => import('./SelectGroup'))}/>
    <Route path={`${match.url}/edit/:id`} component={asyncComponent(() => import('./EditGroup'))}/>
    
  </Switch>
);

export default GroupsViews;