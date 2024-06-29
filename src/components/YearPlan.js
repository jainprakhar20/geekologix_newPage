'use client'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


function YearPlan({ isActive }) {
  return (
    <div className={`main ${isActive ? 'active' : ''}`}>

      <div className="d-flex flex-row gap-2">
        <IoIosCheckmarkCircleOutline fontSize={32} className="tick" />

        <h4 className="height">
          1 Year Plan
        </h4>

      </div>

      <div className="save">
        Save 67%
      </div>

      <div className="  d-flex-col     ">
        <h4 className="font-weight-bold  height">₹4617/-</h4>
        {
          isActive ? <span className="popular">Popular</span> : ' '
        }
      </div>

    </div>
  )
}

export default YearPlan
