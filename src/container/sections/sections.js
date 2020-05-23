import React from "react";
import "./sections.css";
import { NavLink, Route, Switch } from "react-router-dom";

import ImageSection from "../section 1/section 1";
import Form from "../section 2/form";

class Sections extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="section-container">
          <b>Our Section</b>
          <ul className="section-list">
            <li>
              <NavLink to="/section1/" className="section-1">
                Section 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/section2/" className="section-2">
                Section 2
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/section1" component={ImageSection} />
          <Route path="/section2" component={Form} />
        </Switch>
      </div>
    );
  }
}
export default Sections;
