/*
JOSEPH P. PASAOA
PageHeader Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';


/* MAIN */
const PageHeader = ({pagename}) => {
  const [ delayFinished, setDelayFinished ] = useState(false);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setDelayFinished(true);
      }, 800);
    }
    delay();
  }, []);


  return (
    <h3 className="page__header">
      <Fade cascade when={delayFinished}>
        {pagename}
      </Fade>
    </h3>
  );
}


export default PageHeader;
