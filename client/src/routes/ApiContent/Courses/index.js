import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const CoursesViews = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/courses`}/>
    <Route path={`${match.url}/courses-list`} component={asyncComponent(() => import('./ShowAllCourses'))}/>
    <Route path={`${match.url}/add-course`} component={asyncComponent(() => import('./AddCourse'))}/>

  </Switch>
);

export default CoursesViews;
