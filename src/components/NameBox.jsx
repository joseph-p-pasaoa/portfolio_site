/*
JOSEPH P. PASAOA
NameBox Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import './NameBox.css';


/* MAIN */
const NameBox = () => {
  const atHome = useRouteMatch('/');

  return (
    <div className="namebox">
      <h1 className="namebox__name">
        Joseph P. Pasaoa
      </h1>
      { atHome.isExact
          ? (
              <h2 className="namebox__subname">
                Welcome to my<br />
                portfolio site!
              </h2>
            )
          : (
              <h2 className="namebox__subname">
                Software Engineer /<br />
                Full-stack Developer
              </h2>
            )

      }
    </div>
  );
}


export default NameBox;
