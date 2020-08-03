/*
JOSEPH P. PASAOA
APP MAIN Component | Portfolio Site
*/

// blog
// contact
// mobile friendly

/* IMPORTS */
    import React, { useEffect } from 'react';
    import axios from 'axios';
    import { Switch, Route, useRouteMatch } from 'react-router-dom';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faEdit, faFileAlt } from '@fortawesome/free-regular-svg-icons';
    // import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
    import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    import './App.scss';
    import Topbar from './components/Topbar';
    import Sidebar from './components/Sidebar';
    import HomeAboutPage from './pages/HomeAboutPage';
    import ProjectsPage from './pages/ProjectsPage';
    import ContactMePage from './pages/ContactMePage';
    import SkillsPage from './pages/SkillsPage';
    import BlogPage from './pages/BlogPage';
    import PhotographyPage from './pages/PhotographyPage';
    import SiteInfoPage from './pages/SiteInfoPage';

    // const createHistory = require("history").createBrowserHistory;
    // export const history = createHistory();

    // instantiate FontAwesome sitewide icon library
    library.add(faEdit, faFileAlt, faGithubSquare, faLinkedin);

    // // reset scroll position to top every new page visit
    // history.listen((location, action) => {
    //   console.log(action)
    //     if (action === 'PUSH') {
    //       window.scrollTo(0, 0);
    //     }
    // });


/* MAIN */
const App = () => {
  const atHome = useRouteMatch({ exact: true, path: "/" });

  useEffect(() => {
    const serverPings = () => {
      const urlsArray = [
        "https://suit-app.herokuapp.com/static/media/suitApp-Logo-Space.8e54c579.png",
      ];
      const getsArray = urlsArray.map(url => axios.get(url));
      Promise.all(getsArray)
        .then(res => console.log(res))
        .catch(error => console.log("error: ", error))
      ;
    }
    serverPings();
  }, [])


  return (
    <div className="App">
      <div className="app__fadebg" style={atHome ? {opacity: 0} : null}></div>

      <div id="grid-base">
        <Topbar />
        <Sidebar />
        <div className="stage">
          <Switch>
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
