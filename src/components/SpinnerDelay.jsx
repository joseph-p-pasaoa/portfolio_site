/*
JOSEPH P. PASAOA
SpinnerDelay Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { OrbitSpinner } from 'react-epic-spinners';


/* MAIN */
const SpinnerDelay = ({ children, delayTime, delayColor, delayMsg }) => {
  const [ isSpinnerActive, setIsSpinnerActive ] = useState(true);

  useEffect(() => {
    const giveSpinnerTime = () => {
      setTimeout(() => {
        setIsSpinnerActive(false);
      }, delayTime);
    }
    giveSpinnerTime();
  })


  return (
      <LoadingOverlay
        active={isSpinnerActive}
        fadeSpeed={900}
        styles={{
          content: () => ({
            position: "fixed",
            top: "40%",
            left: "50%",
            transform: "translateY(-50%)"
          }),
          overlay: (base) => ({
            ...base,
            background: delayColor
          })
        }}
        text={delayMsg}
        spinner={<OrbitSpinner color="#dd9648" size={300} />}
      >
        {children}
      </LoadingOverlay>
  );
}


export default SpinnerDelay;
