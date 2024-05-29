// import React from 'react'
import dots2 from "../assets/icons/dots2.svg"

// eslint-disable-next-line react/prop-types
function PatientMiniCard({ imgUrl, name, gender, age}) {
    // const patient = {"name": "Emily Williams",
    //       "gender": "Female",
    //       "age": 18,
    //       "imgUrl": emily
    //     }
  return (
    <div className="ml-5 flex items-center justify-between mr-2 mt-5 mb-5">
        <div className="flex items-center justify-between gap-2 text-[14px]">
            <img src={imgUrl} alt="patient" className="w-[48px] h-[48px]" />
            <div>
                <p className="font-bold text-[#072635]">{name}</p>
                <p className="font-normal text-[#707070]">{`${gender}, ${age}`}</p>
            </div>
        </div>
        <img src={dots2} alt="dots" className="" />
    </div>
  )
}

export default PatientMiniCard