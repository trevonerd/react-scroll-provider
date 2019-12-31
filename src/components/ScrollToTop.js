import React from "react";

import "./ScrollToTop.css";

const ScrollToTop = () => {
  return (
    <div
      className="ScrollToTop"
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
      }}
    >
      SCROLL TO TOP
    </div>
  );
};

export default ScrollToTop;
