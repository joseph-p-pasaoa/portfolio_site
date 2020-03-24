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
        <h5 className="home__greet">Hello!</h5>
        <Fade bottom cascade when={toplineDelayFinished}>
          <div className="home__mynameis">
            <span>My</span>
            <span>name</span>
            <span>is</span>
          </div>
        </Fade>
      </div>
      <Fade cascade when={nameDelayFinished}>
        <h3 className="home__name">
          Joseph P. Pasaoa
        </h3>
      </Fade>

      <Fade cascade when={nameDelayFinished}>
        <div>
          <p className="textcopy">I studied International Relations and Comparative Politics in college.</p>

          <p className="textcopy">I've been a freelance photographer and First Assistant to a high-fashion photographer.</p>

          <p className="textcopy">I've had a love for computers my whole life but it wasn't until I was accepted into Pursuit, a selective year-long intensive <strong>full-stack</strong> coding fellowship, that I discovered how much I truly enjoy being in the world of software tech.</p>

          {/* My curriculum was primarily the PERN stack (PostgreSQL, ExpressJS, React, NodeJS) and  */}

          <p className="textcopy">My experience in the visual arts and political psychology has been a great well to draw from when working on <strong>UI/UX</strong> and front-ends but I find myself just as, if not more, intrigued with the <strong>problem solving</strong> and <strong>structural architecturing</strong> in back-end coding.</p>

          <p className="textcopy">I'm looking to find an <strong>rich and diverse environment</strong> where I can grow as an engineer and as a <strong>teammate</strong>.</p>

          <p className="textcopy">Hello world!</p>
        </div>
      </Fade>

    </div>
  );
}


export default HomeAboutPage;
