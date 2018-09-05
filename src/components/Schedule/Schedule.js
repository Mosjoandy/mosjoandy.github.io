import React from "react";
import "./Schedule.css";
import Events from "./Events"

const Schedule = () => (
  <div className="schedule" id="scheduleScroll">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
        {/* Crazy wierd CSS interaction, won't allow :hover or become clickable in productcards.js or products.js */}
        <a href="#productScroll"><img id="productScrollTop" src={require("../images/arrowup.png")} alt="arrowupthing" /></a>

          <div className="scheduleTitle">
            <hr />
            Schedule
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="scheduleBody">
            <Events />
          </div>
        </div>
      </div>
    </div>
    <div className="nextComponent">
      <a href="#contactScroll"><img id="scrollDown" src={require("../images/arrowdown.png")} alt="downarrowthing" /></a>
    </div>
  </div>
);

export default Schedule;
