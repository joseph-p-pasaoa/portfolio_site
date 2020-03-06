/*
JOSEPH P. PASAOA
NameLogo Component | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import React from 'react';
// import anime from 'animejs/lib/anime.es.js';
// import Safe from "react-safe" 


// import { connect } from 'react-redux';

import './NameLogo.css';


/* MAIN */
const NameLogo = () => {
  
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js";
  //   // script.async = true;
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);
  

  // anime.timeline({loop: true})
    // .add({
    //   targets: '.ml5 .line',
    //   opacity: [0.5,1],
    //   scaleX: [0, 1],
    //   easing: "easeInOutExpo",
    //   duration: 700
    // }).add({
    //   targets: '.ml5 .line',
    //   duration: 600,
    //   easing: "easeOutExpo",
    //   translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
    // })
    // .add({
    //   targets: '.ml5 .anchor',
    //   opacity: [0,1],
    //   scaleY: [0.5, 1],
    //   easing: "easeOutExpo",
    //   duration: 600,
    //   offset: '-=600'
    // }).add({
    //   targets: '.ml5 .letters-left',
    //   opacity: [0,1],
    //   translateX: ["0.5em", 0],
    //   easing: "easeOutExpo",
    //   duration: 600,
    //   offset: '-=300'
    // }).add({
    //   targets: '.ml5 .letters-right',
    //   opacity: [0,1],
    //   translateX: ["-0.5em", 0],
    //   easing: "easeOutExpo",
    //   duration: 600,
    //   offset: '-=600'
    // }).add({
    //   targets: '.ml5',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1000
    // });

  return (
    <div id="name-marquee">
      <h1 className="animate three">
        <span>J</span>
        <span>o</span>
        <span>s</span>
        <span>e</span>
        <span>p</span>
        <span>h</span>
        &nbsp;
        <span>P</span>
        <span>.</span>
        &nbsp;
        <span>P</span>
        <span>a</span>
        <span>s</span>
        <span>a</span>
        <span>o</span>
        <span>a</span>
      </h1>
      {/* <h1 className="m15"> */}
        {/* <span className="text-wrapper">
          <span className="line line1"></span> */}
          {/* <span className="letters letters-left">Joseph </span>
          <span className="letters anchor">P. </span>
          <span className="letters letters-right">Pasaoa</span> */}
          {/* <span className="line line2"></span>
        </span> */}
      {/* </h1> */}
      {/* <Safe.script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></Safe.script> */}
      {/* <Safe.script>{
        `try{Typekit.load({ async: true });}catch(e){}`
      }
      </Safe.script> */}

      <h2>Software Engineer / Developer</h2>
    </div>
  );
}


export default NameLogo;
