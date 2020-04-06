/*
JOSEPH P. PASAOA
HomeAboutPage Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';


/* MAIN */
const HomeAboutPage = () => {
  const [ toplineDelayFinished, setToplineDelayFinished ] = useState(false);
  const [ nameDelayFinished, setNameDelayFinished ] = useState(false);

  useEffect(() => {
    const toplineDelay = () => {
      setTimeout(() => {
        setToplineDelayFinished(true);
      }, 700);
    }
    const nameDelay = () => {
      setTimeout(() => {
        setNameDelayFinished(true);
      }, 1300);
    }
    toplineDelay();
    nameDelay();
  }, []);

  return (
    <div className="page page--home">

      <div className="home__topline">
        <div className="home__greet">Hello!</div>
        <Fade bottom cascade when={toplineDelayFinished}>
          <div className="home__mynameis">
            <div>My</div>
            <span className="buffer"></span>
            <div>name</div>
            <span className="buffer"></span>
            <div>is</div>
          </div>
        </Fade>
      </div>
      <Fade cascade when={nameDelayFinished}>
        <div className="home__myname">
          Joseph P. Pasaoa
        </div>
      </Fade>

      <Fade cascade when={nameDelayFinished}>
        <div>
          <p className="text para">I studied International Relations and Comparative Politics in college.</p>

          <p className="text para">I've been a dance, fashion, and portrait photographer, plus First Assistant to a New York City high-fashion photographer.</p>

          <p className="text para">I've had a love for computers my whole life but it wasn't until I was chosen into <a href="https://www.pursuit.org/" target="_blank" rel="noopener noreferrer" className="link--homepursuit">Pursuit</a> —a selective yearlong intensive <strong>full-stack web</strong> coding fellowship, that I was able to discover how much I truly enjoy being in the world of software tech.</p>

          <p className="text para">My experiences in the visual arts and political psychology have been a great well to draw from when working on <strong>UI/UX</strong> and front-ends however I'm just as intrigued, if not more, with the <strong>problem solving</strong>, <strong>optimization work</strong>, and <strong>structural architecturing</strong> found in both ends.</p>

          <p className="text para">I'm looking to find an <strong>rich and diverse environment</strong> where I can grow as an engineer and as a <strong>teammate</strong>.</p>

          <p className="text para">Thanks for finding out more about me.</p>
        </div>
      </Fade>

    </div>
  );
}


export default HomeAboutPage;
