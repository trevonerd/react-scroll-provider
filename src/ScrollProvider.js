import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ScrollContext = React.createContext();
ScrollContext.displayName = "ScrollContext";

let currentPosition = 0;
let ticking = false;
let scrollingEndsTimeout = null;

const ScrollProvider = props => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = () => {
    refreshIsScrolling();
    refreshScrollPosition();
  };

  const refreshScrollPosition = () => {
    currentPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrollPosition(currentPosition);
        ticking = false;
      });

      ticking = true;
    }
  };

  const refreshIsScrolling = () => {
    window.clearTimeout(scrollingEndsTimeout);
    setIsScrolling(true);

    scrollingEndsTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 66);
  };

  useEffect(() => {
    refreshScrollPosition();
    window.addEventListener("scroll", onScroll);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <ScrollContext.Provider value={{ scrollPosition, isScrolling }}>
      {props.children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node
};

export default ScrollProvider;
