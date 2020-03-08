/*
JOSEPH P. PASAOA
APP MAIN Component | Portfolio Site
*/

// blog
// projects
  // technologies used
  // my role
  // solution
  // notable features
// contact
// links to github, linkedin
// resume
// about
// mobile friendly

/* IMPORTS */
    import React from 'react';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faPaperPlane, faList, faFilePdf, faPenSquare } from '@fortawesome/free-solid-svg-icons';
    import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    import Sidebar from './components/Sidebar';
    import './App.css';

    library.add(faPaperPlane, faList, faFilePdf, faPenSquare, faGithubSquare, faLinkedin);


/* COMPONENT & EXPORT */
const App = () => {

  return (
    <div className="App">

      <div id="grid-base">
        <Sidebar />
        <div className="stage">
        </div>
      </div>

    </div>
  );
}


export default App;
