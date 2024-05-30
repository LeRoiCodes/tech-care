/* eslint-disable react/prop-types */
// import React from 'react'
import download from "../assets/icons/download.svg"

function LabResult({result}) {
  return (
    <div className="p-2">
            <div className="w-full flex items-center justify-between">
                <p className="text-[13px]">{result}</p>
                <img src={download} alt="icon" />
            </div>
        </div>
  )
}

export default LabResult