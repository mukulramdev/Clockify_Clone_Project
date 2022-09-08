import React from "react";
import "./Features.css"
export const Timetracker = () => {
  return (
    <>
      <h1>Time Tracker</h1>
      <p>Start and stop timer as you work, or enter hours manually.</p>
      <img
        src="https://clockify.me/assets/images/features/features-tracker-screenshot.svg"
        alt=""
        srcset=""
      />
      <div id="mc">
        <div>
          <h2>Timer</h2>
          <p>Track time using a stopwatch.</p>
        </div>
        <div>
          <h2>Add time</h2>
          <p>Enter and edit hours manually.</p>
        </div>
        <div>
          <h2>Billable</h2>
          <p>Mark hours as billable.</p>
        </div>
        <div>
          <h2>Continue</h2>
          <p>Continue tracking with one click.</p>
        </div>
      </div>
    </>
  );
};
