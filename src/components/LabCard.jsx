// import React from 'react'
// import download from "../assets/icons/download.svg"

import LabResult from "./LabResult"

function LabCard() {
  return (
    <div className="bg-white border rounded-2xl p-3 text-[#072635] mt-5">
        <p className="font-extrabold text-[24px]">Lab Results</p>
        <div className="overflow-y-scroll ">
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />

        <LabResult />

        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />
        <LabResult />

        </div>
        
    </div>
  )
}

export default LabCard