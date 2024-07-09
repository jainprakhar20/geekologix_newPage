'use client'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SingleIcon from './SingleIcon';

// all icons
import { MdOutlineTroubleshoot } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { MdQueryStats } from "react-icons/md";
import { MdLink } from "react-icons/md";
import { MdOutlineFindInPage } from "react-icons/md";
import { MdTvOff } from "react-icons/md";
import { MdAddChart } from "react-icons/md";
import { MdModelTraining } from "react-icons/md";
import { MdOutlineCalculate } from "react-icons/md";
import { MdSsidChart } from "react-icons/md";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";


const iconData = [
  { icon: MdOutlineTroubleshoot, text: "Advanced Stock Screener", iconColor: "#4399EB", col: 1 },
  { icon: MdQueryStats, text: "Live Market Screener", iconColor: "#FF5952", col: 1 },
  { icon: MdOutlineFindInPage, text: "Options Screener", iconColor: "#FFC145", col: 1 },
  { icon: MdTvOff, text: "AD Free Experience", iconColor: "#FFC145", col: 1 },
  { icon: MdOutlineTroubleshoot, text: "Comprehensive Stock Analysis", iconColor: "#FE7E36", col: 1 },
  { icon: MdAddChart, text: "Run Screeners on Watchlists", iconColor: "#57DCFF", col: 1 },
  { icon: MdOutlineTroubleshoot, text: "Nifty, Bank Nifty & Fin Nifty Analytics", iconColor: "#62E525", col: 1 },
  { icon: IoMdAlarm, text: "Alerts Nifty Traders", iconColor: "#DA89FF", col: 2 },
  { icon: MdLink, text: "Option Chain", iconColor: "#FD2357", col: 2 },
  { icon: MdModelTraining, text: "Option Strategy", iconColor: "#3E80E2", col: 2 },
  { icon: MdOutlineCalculate, text: "Fibonacci Elliott Wave Cluster", iconColor: "#9678F2", col: 2 },
  { icon: MdSsidChart, text: "Multistrike Comparison for Option Chain", iconColor: "#C77B36", col: 2 },
  { icon: MdOutlineBrowserUpdated, text: "Download Option Chain & Max Pain Levels", iconColor: "#16DA4D", col: 2 },
  { icon: MdOutlineHandshake, text: "Live Option Chain & Stock Quotes After", iconColor: "#FB3E82", col: 2 }
];

const   ALLicons = () => {
  return (
    <div>
      <Row>

        <Col xs={12} md={6} className=' d-flex  flex-column p-0'>

        {iconData.filter(item => item.col === 1).map((item, index) => (
            <SingleIcon
              key={index}
              icon={item.icon}
              text={item.text}
              iconColor={item.iconColor}
            />
          ))}

        </Col>

        <Col className='p-0'>

        {iconData.filter(item => item.col === 2).map((item, index) => (
            <SingleIcon
              key={index}
              icon={item.icon}
              text={item.text}
              iconColor={item.iconColor}
            />
          ))}
        </Col>

      </Row>


    </div>
  )
}

export default ALLicons
