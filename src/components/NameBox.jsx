/*
JOSEPH P. PASAOA
NameBox Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './NameBox.css';


/* MAIN */
const NameBox = () => {

  return (
    <div className="namebox">
      <h1 className="namebox__name">
        Joseph P. Pasaoa
      </h1>
      <Switch>
        <Route exact path="/">
          <h2 className="namebox__subname">
            Welcome to my<br />
            portfolio site!
          </h2>
        </Route>
        <Route>
          <h2 className="namebox__subname">
            Software Engineer /<br />
            Full-stack Developer
          </h2>
        </Route>
      </Switch>
    </div>
  );
}


export default NameBox;
