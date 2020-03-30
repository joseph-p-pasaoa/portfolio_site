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
        "https://greenlist-registry.herokuapp.com/static/media/logo_200228.ca07d05d.png",
        "https://bingebook.herokuapp.com/images/uploaded-avatars/avatar-sporty-her.svg"
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
