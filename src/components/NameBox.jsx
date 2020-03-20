/*
JOSEPH P. PASAOA
NameBox Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import { useRouteMatch } from 'react-router-dom';


/* MAIN */
const NameBox = () => {
  const atHome = useRouteMatch({ exact: true, path: "/" });

  let nameStyles = {};
  if (atHome) {
    nameStyles["homeName"] = { opacity: 1 };
    nameStyles["elseName"] = { opacity: 0 };
    nameStyles["homeSubname"] = { opacity: 1 };
    nameStyles["elseSubname"] = { opacity: 0 };
  } else {
    nameStyles["homeName"] = { opacity: 0 };
    nameStyles["elseName"] = { opacity: 1 };
    nameStyles["homeSubname"] = { opacity: 0 };
    nameStyles["elseSubname"] = { opacity: 1 };

  }

  return (
    <div className="namebox">
          <h1 className="namebox__name namebox__name--brand" style={nameStyles.homeName}>
            JP
          </h1>
          <h1 className="namebox__name" style={nameStyles.elseName}>
            Joseph P. Pasaoa
          </h1>
          <h2 className="namebox__subname" style={nameStyles.homeSubname}>
            Welcome!
          </h2>
          <h2 className="namebox__subname" style={nameStyles.elseSubname}>
            software engineer /<br />
            full-stack developer
          </h2>
    </div>
  );
}


export default NameBox;
