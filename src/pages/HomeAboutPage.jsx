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
        <div className="home__aboutme">
          <p className="text para">I learned <strong>BASIC</strong> on my own when I was small. In college, I studied International Relations and Comparative Politics.</p>

          <p className="text para">I've worked hard as a First Assistant to a high-fashion photographer in NYC for a number of years. I've also been a professional dance, fashion, and portrait photographer, myself.</p>

          <p className="text para">Yet it wasn't until I was selected into <a href="https://www.pursuit.org/" target="_blank" rel="noopener noreferrer" className="link--homepursuit">Pursuit</a> —an intensive, competitive <strong>full-stack</strong> coding Fellowship, that I discovered how much I truly enjoy programming and development.</p>

          <p className="text para">My experiences in the visual arts and political psychology have been a great well to draw from when developing front-ends and building <strong>effective UI/UX</strong> but I'm just as fascinated with the <strong>problem solving</strong>, <strong>optimizing</strong>, and <strong>design processes</strong> found all across the stack.</p>

          <p className="text para">I'm looking to find an <strong>rich and diverse environment</strong> where I can grow doubly as an engineer and as a <strong>teammate</strong>.</p>

          <p className="text para">Thank you for visiting. Please, have a fun look around!</p>
        </div>
      </Fade>

    </div>
  );
}


export default HomeAboutPage;
