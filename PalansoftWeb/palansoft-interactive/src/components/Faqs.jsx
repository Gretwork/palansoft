import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

function Faqs() {
  return (
    <div className='faq-con-main'>
      <div className='container'>
        <h1 className='text-white'>Frequently Asked Questions</h1>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, veniam, quis nostrud est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, veniam, quis nostrud est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, veniam, quis nostrud est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default Faqs
