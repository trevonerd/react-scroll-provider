import React, { useContext } from "react";
import { ScrollContext } from "../ScrollProvider";

import "./IsScrolling.css";

const IsScrolling = () => {
  const { isScrolling } = useContext(ScrollContext);

  return (
    <div
      className="IsScrolling"
      style={isScrolling ? { backgroundColor: "orange" } : null}
    >
      {isScrolling ? "scrolling" : "idle"}
    </div>
  );
};

export default IsScrolling;
