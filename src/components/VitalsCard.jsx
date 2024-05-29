// import React from 'react'
import lungs from "../assets/icons/respiratory rate.svg"
import arrowDown from "../assets/icons/ArrowDown.svg"

function VitalsCard() {
  return (
    <div className="w-1/3 bg-[#E0f3fa] border border-white rounded-xl p-2 text-[072635]">
        <img src={lungs} alt="lungs" />
        <p className=" text-[16px] font-medium mt-4">Respiratory Rate</p>
        <p className="text-[30px] font-extrabold">20 bpm</p>
        <div className="flex items-center mt-4 mb-1 gap-3">
        <img src={arrowDown} alt="arrow" />
            <p className="font-normal text-[14px] text-[#072635]">Lower than Average</p>
        </div>
        {/* <p className="text-[14px] font-normal">Normal</p> */}
    </div>
  )
}

export default VitalsCard