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
// mobile friendly

/* IMPORTS */
    import React from 'react';
    import { Switch, Route, useRouteMatch } from 'react-router-dom';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faFilePdf, faPenSquare, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
    import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    import './App.scss';
    import Sidebar from './components/Sidebar';
    import HomeAboutPage from './pages/HomeAboutPage';
    import ProjectsPage from './pages/ProjectsPage';
    import FullProjectPage from './pages/FullProjectPage';
    import ContactMePage from './pages/ContactMePage';
    import SkillsPage from './pages/SkillsPage';
    import BlogPage from './pages/BlogPage';
    import PhotographyPage from './pages/PhotographyPage';
    import SiteInfoPage from './pages/SiteInfoPage';

    // instantiate FontAwesome sitewide icon library
    library.add(faFilePdf, faPenSquare, faAngleDown, faAngleUp, faGithubSquare, faLinkedin);


/* MAIN */
const App = () => {
  const atProjectsPage = useRouteMatch('/projects');
  const atHome = useRouteMatch({ exact: true, path: "/" });

  return (
    <div className="App">
      <div className="app__fadebg" style={atHome ? {opacity: 0} : null}></div>

      <div id="grid-base">
        <Sidebar />
        <div className="stage">
        {/* <div className={ atProjectsPage && atProjectsPage.isExact ? "stage stage--projects" : "stage"}> */}
          <Switch>
            <Route path={`/projects/:index`} component={FullProjectPage} />
            <Route path={`/projects`} component={ProjectsPage} />
            <Route path={`/contactme`} component={ContactMePage} />
            <Route path={`/skills`} component={SkillsPage} />
            <Route path={`/blog`} component={BlogPage} />
            <Route path={`/photography`} component={PhotographyPage} />
            <Route path={`/siteinfo`} component={SiteInfoPage} />
            <Route path={`/`} component={HomeAboutPage} />
          </Switch>
        </div>
      </div>

    </div>
  );
}


export default App;
