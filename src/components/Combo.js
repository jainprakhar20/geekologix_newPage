import React from 'react'
import Image from 'next/image';
import YearPlan from './YearPlan';
import { Row, Col, Container, Button } from 'react-bootstrap'
import ALLicons from './ALLicons';


const Combo = () => {

  const renderLogoHeading = () => (
    <div className='align-items-start p-0 toplogo'>
      <Image src="/Combo.png" alt="OS Image" width={132} height={132} className='logoHeight' />
      <h2 className='fw-bold'>NT Prime + OS</h2>
    </div>
  );


  return (
    <Container className='whiteBox'>

      {/* for mobile  */}
      <div className='d-block d-md-none'>
        {renderLogoHeading()}
      </div>

      <Row>
        <Col xs={12} md={7} className='d-flex flex-column order-2 order-md-1'>


          {/*for laptop*/}

          <div className='d-none d-md-block'>
            {renderLogoHeading()}
          </div>


          <p className='mt-auto smallNote d-block d-md-none'>
            <span className='Note'>Note: </span>
            OS Plan is not part of NT Prime Plan
          </p>

          <p className='allFeatures d-block d-md-none'>
            All features in NT Prime
          </p>


          <ALLicons />


          <div className='d-flex gap-2 align-items-center m-0 p-0'>
            <Image src='/comboIcon.png' alt='Icon image' width={22} height={20}   />
            <p className='ComboIcon mb-0'>Option Simulator</p>
          </div>


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

export default Combo