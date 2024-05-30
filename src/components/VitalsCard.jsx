/* eslint-disable react/prop-types */
// import React from 'react'
import arrowDown from "../assets/icons/ArrowDown.svg"

function VitalsCard({icon, color, value, text}) {

  const className = `w-1/3 ${color} border border-white rounded-xl p-2 text-[072635]`
  const check = value.levels === "Normal"

  return (
    <div className={className}>
        <img src={icon} alt="lungs" />
        <p className=" text-[16px] font-medium mt-4">{text}</p>
        <p className="text-[30px] font-extrabold">{value.value}</p>
        <div className="flex items-center mt-4 mb-1 gap-3">
        {!check && <img src={arrowDown} alt="arrow" />}
            <p className="font-normal text-[14px] text-[#072635]">{value.levels}</p>
        </div>
        {/* <p className="text-[14px] font-normal">Normal</p> */}
    </div>
  )
}

export default VitalsCard