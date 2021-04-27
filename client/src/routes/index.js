import React from "react";
import { Route, Switch } from "react-router-dom";
import GroupsViews from "./groupsUi/Groups/index";
import invitationsViews from "./groupsUi/Invitations/index";
import Components from "./components/index";
import CustomViews from "./customViews/index";
import Extensions from "./extensions/index";
import ExtraComponents from "./extraComponents/index";
import InBuiltApps from "./inBuiltApps/index";
import SocialApps from "./socialApps/index";
import Main from "./main/index";
import Documents from "./documents/index";
import QuestionsViews from "./ApiContent/Questions/index";
import CoursesViews from "./ApiContent/Courses/index";
import createprofile from "../components/profile/profile_forms/CreateProfile";
import addexp from "../components/profile/profile_forms/AddExperience";
import addEdu from "../components/profile/profile_forms/AddEducation";
import profiles from "../components/profile/profiles/Profiles";
import editprofile from "../components/profile/profile_forms/EditProfile";
const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}main`} component={Main} />
      <Route path={`${match.url}components`} component={Components} />
      <Route path={`${match.url}custom-views`} component={CustomViews} />
      <Route path={`${match.url}extensions`} component={Extensions} />
      <Route
        path={`${match.url}extra-components`}
        component={ExtraComponents}
      />
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps} />
      <Route path={`${match.url}social-apps`} component={SocialApps} />
      <Route path={`${match.url}documents`} component={Documents} />
      <Route path={`${match.url}question`} component={QuestionsViews} />
      <Route path={`${match.url}courses`} component={CoursesViews} />
      <Route path="/create-profile" component={createprofile} />
      <Route path="/edit-profile" component={editprofile} />
      <Route path="/profile/Add-Experience" component={addexp} />
      <Route path="/profile/Add-Education" component={addEdu} />
      <Route path="/profile/profiles" component={profiles} />
      <Route path={`${match.url}group`} component={GroupsViews} />
      <Route path={`${match.url}invitation`} component={invitationsViews} />
    </Switch>
  </div>
);

export default App;
