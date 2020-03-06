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

    import Sidebar from './components/Sidebar';
    import './App.css';


/* COMPONENT & EXPORT */
const App = () => {

  return (
    <div className="App">

      <div id="grid-base">
        <Sidebar />
        <div className="stage"></div>
        {/* <p>Here begins my portfolio site.</p> */}
      </div>

    </div>
  );
}


export default App;
