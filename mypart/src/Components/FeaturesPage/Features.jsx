import React from "react";
import "./Features.css"
export const Features = () => {
  return (
    <>
      <h1>Features</h1>
      <div id="mc">
        <div>
          <h3>Time keeping</h3>
          <div id="fbut">
            <button>Time Tracker</button>
            <button>Kiosk</button>
            <button>Apps</button>
            <button>Timesheet</button>
            <button>Calendar</button>
            <button>Integrations</button>
          </div>
        </div>
        <div>
          <h3>Reporting</h3>
          <div id="fbutt">
            <button>Dashboard</button>
            <button>Activity </button>
            <button>Reports</button>
            <button>Projects</button>
          </div>
        </div>
        <div>
          <h3>Management</h3>
          <div id="fbut">
            <button>Team</button>
            <button>Time off </button>
            <button>Expenses</button>
            <button>Scheduling</button>
            <button>Approval</button>
            <button>Invoicing</button>
          </div>
        </div>
      </div>
    </>
  );
};
