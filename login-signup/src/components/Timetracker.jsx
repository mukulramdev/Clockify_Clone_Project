import "./Features.css"
import { Heading } from '@chakra-ui/react'
export const Timetracker = () => {
  return (
    <>
      <Heading>Time Tracker</Heading>
      <p>Start and stop timer as you work, or enter hours manually.</p>
      <img
        src="https://clockify.me/assets/images/features/features-tracker-screenshot.svg"
        alt=""
        srcset=""
      />
      <div id="mc">
        <div>
          <Heading  as='h4' size='md'>Timer</Heading>
          <p>Track time using a stopwatch.</p>
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
    </>
  );
};
