import React from "react";

// <NextComponent href="#targetScroll" />
export const NextComponent = ({ href }) => (
  <div className="nextComponent">
    <a href={href}><img id="scrollDown" src={require("../images/arrowdown.png")} alt="downarrowthing" /></a>
  </div>
);
