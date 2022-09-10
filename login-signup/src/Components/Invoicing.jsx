import "./Features.css"
import { Heading } from '@chakra-ui/react'
export const Invoicing = () => {
  return (
    <>
      <Heading >Invoicing</Heading>
      <p>Issue invoices based on tracked time, expenses, and hourly rates.</p>
      <img
        src="https://clockify.me/assets/images/features/features-invoicing-screenshot.svg"
        alt=""
        srcset=""
      />
      <div id="mc">
        <div>
          <Heading  as='h4' size='md'>Create</Heading>
          <p>Import time and edit invoices.</p>
        </div>
        <div>
          <Heading  as='h4' size='md'>PDF</Heading>
          <p>Download and send to client.</p>
        </div>
        <div>
          <Heading  as='h4' size='md'>Customize</Heading>
          <p>Mark hours as billable.</p>
        </div>
        <div>
          <Heading  as='h4' size='md'>Expenses</Heading>
          <p>Record and invoice fixed fees.</p>
        </div>
      </div>
    </>
  );
};
