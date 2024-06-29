'use client'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import NtPrime from './NtPrime';
import Os from './Os';
import Combo from './Combo';

function TabsExample() {

  const [activeKey, setActiveKey] = useState('/home');

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };


  return (
    <div className='w-100'>

      <Nav variant="tabs" className=' tabClass ' defaultActiveKey="/home" activeKey={activeKey} onSelect={handleSelect}>
        <Nav.Link className='PlanSelect' eventKey="/home">NT Prime</Nav.Link>
        <Nav.Item className=' '>
          <Nav.Link className='PlanSelect' eventKey="link-1">OS</Nav.Link>
        </Nav.Item>
        <Nav.Item className="position-relative" >
          <span className='popularTop absolute'>Popular</span>
          <Nav.Link className='PlanSelect' eventKey="link-2">Combo</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="mt-4  ">
        {activeKey === '/home' && <div> <NtPrime /></div>}
        {activeKey === 'link-1' && <div> <Os /> </div>}
        {activeKey === 'link-2' && <div> <Combo />  </div>}
      </div>


    </div>

  );
}

export default TabsExample;