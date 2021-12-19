import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

let headerUser = '';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    // return null;
  },
});

export const setHeaderUser = (user) => {
  headerUser = user;
  // todo: figure out why this does not work
  // whenever you want to update the component:
  lifecycles.update({headerUser: user})
}

export const { bootstrap, mount, unmount } = lifecycles;
