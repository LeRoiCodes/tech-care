// import React from 'react'
import dots2 from "../assets/icons/dots2.svg"

// eslint-disable-next-line react/prop-types
function PatientMiniCard({ imgUrl, name, gender, age}) {
    const test = name === "Jessica Taylor"
    let className = " flex items-center justify-between  mt-3 mb-3 pt-1 pb-1"
    if (test) {
      className += " bg-[#D8FCF7]"
    }
  return (
    <div className={className}>
        <div className=" ml-5 flex items-center justify-between gap-2 text-[14px] ">
            <img src={imgUrl} alt="patient" className="w-[48px] h-[48px]" />
            <div>
                <p className="font-bold text-[#072635]">{name}</p>
                <p className="font-normal text-[#707070]">{`${gender}, ${age}`}</p>
            </div>
        </div>
        <img src={dots2} alt="dots" className="mr-2" />
    </div>
  )
}

export default PatientMiniCard