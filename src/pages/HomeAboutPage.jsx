/*
JOSEPH P. PASAOA
HomeAboutPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import { aboutMeCopy } from '../data/copyData';


/* MAIN */
const HomeAboutPage = () => {

  return (
    <div className="page page--homeabout flex-column">

      <div className="page__textbock">
        <h4 className="greet">Hello!</h4>
        <h3 className="page__name">
          I am a Software Engineer &<br />
          Full-Stack Developer
        </h3>

        <div className="text--copy text__card text__card--home">
          {aboutMeCopy}
        </div>
      </div>

    </div>
  );
}


export default HomeAboutPage;
