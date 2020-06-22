import * as React from "react";
import Subcomponent from "./Subcomponent";
import { Route, Switch } from "react-router-dom";
import { store } from "../store";
import { incrementSearches } from "../actions/items";

const About = (props: any) => {
  store.dispatch(incrementSearches());
  let about = (
    <div className="about">
      About
      <Switch>
        <Route path="/about/subroute" component={Subcomponent} />
      </Switch>
      {props.children}
    </div>
  );

  return about;
};

export default About;
