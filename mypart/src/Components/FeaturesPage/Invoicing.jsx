import React from "react";
import "./Features.css"
export const Invoicing = () => {
  return (
    <>
      <h1>Invoicing</h1>
      <p>Issue invoices based on tracked time, expenses, and hourly rates.</p>
      <img
        src="https://clockify.me/assets/images/features/features-invoicing-screenshot.svg"
        alt=""
        srcset=""
      />
      <div id="mc">
        <div>
          <h2>Create</h2>
          <p>Import time and edit invoices.</p>
        </div>
        <div>
          <h2>PDF</h2>
          <p>Download and send to client.</p>
        </div>
        <div>
          <h2>Customize</h2>
          <p>Mark hours as billable.</p>
        </div>
        <div>
          <h2>Expenses</h2>
          <p>Record and invoice fixed fees.</p>
        </div>
      </div>
    </>
  );
};
