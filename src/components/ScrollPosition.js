import React from "react";
import { ScrollContext } from "../ScrollProvider";

import "./ScrollPosition.css";

const ScrollPosition = () => (
  <ScrollContext.Consumer>
    {({ scrollPosition }) => (
      <div
        className="ScrollPosition"
        style={scrollPosition > 2000 ? { backgroundColor: "red" } : null}
      >
        {scrollPosition}
      </div>
    )}
  </ScrollContext.Consumer>
);

export default ScrollPosition;
