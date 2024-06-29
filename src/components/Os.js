import React from 'react'
import Image from 'next/image';
import YearPlan from './YearPlan';
import { Row, Col, Container, Button } from 'react-bootstrap'
import { MdOutlineTroubleshoot } from "react-icons/md";
import SingleIcon from "@/components/SingleIcon";

const Os = () => {

  const renderLogoHeading = () => (
    <div className='align-items-start p-0 toplogo'>
      <Image src="/os2.png" alt="OS Image" width={132} height={132} className='logoHeight' />
      <h2 className='fw-bold'>Option Simulator</h2>
    </div>
  );


  return (
    <Container className='whiteBox'>

      {/* for mobile  */}
      <div className='d-block d-md-none'>
        {renderLogoHeading()}
      </div>


      <Row>
        <Col   className=' m-2 p-2 d-flex flex-column order-2 order-md-1'>


          {/*for laptop*/}

          <div className='d-none d-md-block'>
            {renderLogoHeading()}
          </div>

          <p className='mt-auto smallNote d-block d-md-none'>
            <span className='Note'>Note: </span>
            NT Prime Plan is not part of OS Plan
          </p>

          <p className='allFeatures d-block d-md-none'>
            All features in OS
          </p>


          <SingleIcon icon={MdOutlineTroubleshoot} text="Nifty Option Simulator" iconColor="#4399EB" />

          <SingleIcon icon={MdOutlineTroubleshoot} text="BankNifty Option Simulator" iconColor="#04B800" />

          <SingleIcon icon={MdOutlineTroubleshoot} text="FinNifty Option Simulator" iconColor="#D80000" />


          <p className='mt-auto smallNote d-none d-md-block'>
            <span className='Note'>Note: </span>
            NT Prime Plan is not part of OS Plan
          </p>

        </Col>


        <Col xs={12} md={5} className='box align-items-center order-1 order-md-2'>

          <YearPlan isActive={false} />
          <YearPlan isActive={false} />
          <YearPlan isActive={true} />
          <YearPlan isActive={false} />
          <YearPlan isActive={false} />


          <div className='box '>
            <Button className='buttonB mt-2  mx-5'>
              Buy Now
            </Button>
          </div>

        </Col>

      </Row>

    </Container>
  )
}

export default Os
