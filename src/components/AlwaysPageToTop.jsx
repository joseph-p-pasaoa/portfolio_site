/*
JOSEPH P. PASAOA
AlwaysPageToTop Component | Portfolio Site
*/


import { useEffect } from "react";

export default function AlwaysPageToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
