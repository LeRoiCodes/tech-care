/* eslint-disable react/prop-types */
// import React from 'react'
// import download from "../assets/icons/download.svg"

import LabResult from "./LabResult"

function LabCard({results}) {
  return (
    <div className="bg-white border rounded-2xl p-3 text-[#072635] mt-5 h-[296px]">
        <p className="font-extrabold text-[24px]">Lab Results</p>
        <div className="overflow-y-scroll h-[90%] ">
        
        {results.map((result, i) =>{
          return  <LabResult key={i} result={result} />
        })}

        </div>
        
    </div>
  )
}

export default LabCard