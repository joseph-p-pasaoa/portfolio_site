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
    import { Switch, Route } from 'react-router-dom';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faPaperPlane, faList, faFilePdf, faPenSquare } from '@fortawesome/free-solid-svg-icons';
    import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    import './App.css';
    import Sidebar from './components/Sidebar';
    import HomeAboutPage from './pages/HomeAboutPage';
    import ProjectsPage from './pages/ProjectsPage';
    import ContactMePage from './pages/ContactMePage';
    import SkillsPage from './pages/SkillsPage';
    import BlogPage from './pages/BlogPage';
    import PhotographyPage from './pages/PhotographyPage';

    // instantiate Fontawesome sitewide icon library
    library.add(faPaperPlane, faList, faFilePdf, faPenSquare, faGithubSquare, faLinkedin);


/* COMPONENT & EXPORT */
const App = () => {

  return (
    <div className="App">

      <div id="grid-base">
        <Sidebar />
        <div className="stage">
          <Switch>
            <Route path={`/projects`} component={ProjectsPage} />
            <Route path={`/contactme`} component={ContactMePage} />
            <Route path={`/skills`} component={SkillsPage} />
            <Route path={`/blog`} component={BlogPage} />
            <Route path={`/photography`} component={PhotographyPage} />
            <Route path={`/`} component={HomeAboutPage} />
          </Switch>
        </div>
      </div>

    </div>
  );
}


export default App;
