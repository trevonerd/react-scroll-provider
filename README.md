[![CircleCI](https://circleci.com/gh/trevonerd/react-scroll-provider/tree/master.svg?style=svg)](https://circleci.com/gh/trevonerd/react-scroll-provider/tree/master)
[![GuardRails badge](https://badges.guardrails.io/trevonerd/react-scroll-provider.svg?token=2bed8f29e00eaf300080c4e965c035f14f511c2e3190a780b842a3c8f9babe58&provider=github)](https://dashboard.guardrails.io/default/gh/trevonerd/react-scroll-provider)
[![Depfu](https://badges.depfu.com/badges/15868d4cef255f05e959147ed6a7e3cb/overview.svg)](https://depfu.com/github/trevonerd/react-scroll-provider?project_id=10441)


[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# React Scroll Provider

React component that passes scrolling data through the component tree.

Available information are:

* `scrollPosition` (number): current scrollY,
* `isScrolling` (boolean): user is scrolling the page
 
[DEMO (CodeSandbox)](http://bit.ly/CS-ScrollProvider)

### Installation

`yarn add scroll-provider`

or

`npm install --save scroll-provider`

### Usage

* Import component

```javascript
import ScrollProvider from 'scroll-provider'
```

* Wrap the main component

```jsx
<ScrollProvider>
  <div className="App">
   <!-- app content -->
  </div>
</ScrollProvider>
```

* Now all components have access to the scroll information


1. Hook
```jsx
import React, { useContext } from "react";
import { ScrollContext } from "../ScrollProvider";

const Component = () => {
  const { scrollPosition, isScrolling } = useContext(ScrollContext);

  return (
    <div>
      {scrollPosition} - {isScrolling ? "scrolling" : "idle"}
    </div>
  );
};

export default Component;
```

2. Context API
```jsx
import React from "react";
import { ScrollContext } from "../ScrollProvider";

const Component = () => (
  <ScrollsContext.Consumer>
    {({ scrollPosition, isScrolling }) => (
      <div>
        {scrollPosition} - {isScrolling ? "scrolling" : "idle"}
      </div>
    )}
  </ScrollsContext.Consumer>
);

export default ScrollPosition;
```