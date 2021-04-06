import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const InvitationsViews = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/group`}/>
    <Route path={`${match.url}/invitation-list`} component={asyncComponent(() => import('./Allinvitations'))}/>
    <Route path={`${match.url}/add-invitation`} component={asyncComponent(() => import('./CreateInvitation'))}/>
   
    
    
  </Switch>
);

export default InvitationsViews;