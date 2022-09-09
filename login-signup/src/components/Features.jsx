import "./Features.css"
import { Heading } from '@chakra-ui/react'
export const Features = () => {
  return (
    <>
      <Heading>Features</Heading>
      <div id="mc">
        <div>
          <Heading  as='h4' size='md'>Time keeping</Heading>
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
          <Heading  as='h4' size='md'>Reporting</Heading>
          <div id="fbutt">
            <button>Dashboard</button>
            <button>Activity </button>
            <button>Reports</button>
            <button>Projects</button>
          </div>
        </div>
        <div>
          <Heading  as='h4' size='md'>Management</Heading>
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
