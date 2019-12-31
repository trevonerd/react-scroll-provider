import React from "react";
import ReactDOM from "react-dom";
import ScrollProvider from "./ScrollProvider";
import ScrollToTop from "./components/ScrollToTop";
import ScrollPosition from "./components/ScrollPosition";
import IsScrolling from "./components/IsScrolling";

import "./styles.css";

function App() {
  return (
    <ScrollProvider>
      <div className="App">
        <h1>React Scroll Provider</h1>
        <h2>
          React component that passes scrolling data through the component tree.
        </h2>
        <h3>{`ScrollContext = { scrollPosition, isScrolling }`}</h3>
        <ScrollPosition />
        <IsScrolling />
        <br />
        <br />
        <p>⬇⬇⬇ scroll baby scroll ⬆⬆⬆</p>
        <ScrollToTop />
      </div>
    </ScrollProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
