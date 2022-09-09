import "./Features.css"
import { Heading } from '@chakra-ui/react'
export const Timesheet = () => {
  return (
    <div
      style={{
        backgroundColor: "#F7FCFF",
        padding: "10px",
        margin: "10px"
      }}
    >
      <Heading>Timesheet</Heading>
      <p>Log your weekly activities in less than a minute.</p>
      <img
        src="https://clockify.me/assets/images/features/features-timesheet-screenshot.svg"
        alt="janna"
        srcset=""
      />
      <div id="mc">
        <div>
          <Heading  as='h4' size='md'>Activities</Heading>
          <p>Select activity and enter time.</p>
        </div>
        <div>
          <Heading  as='h4' size='md'>Add time</Heading>
          <p>Enter and edit hours manually.</p>
        </div>
        <div>
          <Heading  as='h4' size='md'>Billable</Heading>
          <p>Mark hours as billable.</p>
        </div>
        <div>
          <Heading  as='h4' size='md'>Continue</Heading>
          <p>Continue tracking with one click.</p>
        </div>
      </div>
    </div>
  );
};
