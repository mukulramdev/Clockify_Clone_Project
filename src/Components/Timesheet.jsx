import React from "react";
export const Timesheet = () => {
  return (
    <div
      style={{
        backgroundColor: "#F7FCFF",
        padding: "10px",
        margin: "10px"
      }}
    >
      <h1>Timesheet</h1>
      <p>Log your weekly activities in less than a minute.</p>
      <img
        src="https://clockify.me/assets/images/features/features-timesheet-screenshot.svg"
        alt="janna"
        srcset=""
      />
      <div id="mc">
        <div>
          <h2>Activities</h2>
          <p>Select activity and enter time.</p>
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
    </div>
  );
};
