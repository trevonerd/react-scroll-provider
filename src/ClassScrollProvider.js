import React, { Component } from "react";

export const ScrollContext = React.createContext();
ScrollContext.displayName = "ScrollContext";

let currentPosition = 0;
let ticking = false;

class ScrollProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPosition: 0
    };
  }

  updateScrollPosition = scrollY => {
    this.setState({
      scrollPosition: scrollY
    });
  };

  onScroll = () => {
    currentPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.updateScrollPosition(currentPosition);
        ticking = false;
      });

      ticking = true;
    }
  };

  componentDidMount() {
    this.updateScrollPosition(window.scrollY);
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <ScrollContext.Provider value={this.state.scrollPosition}>
        {this.props.children}
      </ScrollContext.Provider>
    );
  }
}

export default ScrollProvider;
