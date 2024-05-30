/* eslint-disable react/prop-types */
// import React from 'react'
import arrowdown from "../assets/icons/arrow-down.svg"
import arrowDown from "../assets/icons/ArrowDown.svg"
import arrowUp from "../assets/icons/ArrowUp.svg"

import BloodPressureChart from '../components/BloodPressureChart';

function MainChart({data, monthData}) {

    console.log(monthData)

  const systolicValue = monthData.blood_pressure.systolic.value
  const systolicText = monthData.blood_pressure.systolic.levels
  const diastolicValue  = monthData.blood_pressure.diastolic.value
  const diastolicText = monthData.blood_pressure.diastolic.levels


  return (

<div className='bg-[#f4f0fe] border border-white rounded-xl p-2 flex gap-6 h-[298px]'>

    <div className='w-2/3 mt-2 flex flex-col gap-2'>
        <div className='flex justify-between items-center w-full mb-6'>
        <p className=" font-bold text-[18px] text-[#072635]">Bloop Pressure</p>
        <div className='flex justify-between items-center gap-1 mr-2 text-[14px] text-[#72635]font-normal'>
            <p>Last 6 months</p>
            <img src={arrowdown} alt="icon" />
        </div>
        </div>
    <BloodPressureChart data={data} />
    </div>
    <div className="w-1/3 mt-2">
        <div className="flex items-center gap-3 mb-1">
            <div className="w-[14px] h-[14px] rounded-full border bg-[#e66fd2] "></div>
            <p className="font-bold text-[14px] text-[#072635]">Systolic</p>
        </div>
        <p className="font-bold text-[22px] text-[#072635] mb-1">{systolicValue}</p>
        <div className="flex items-center mb-1 gap-3">
        <img src={arrowUp} alt="arrow" />
            <p className="font-normal text-[14px] text-[#072635]">{systolicText}</p>
        </div>
        <hr className="mb-1" />
        <div className="flex items-center gap-3 mb-1 ">
        <div className="w-[14px] h-[14px] rounded-full border bg-[#8C6FE6] "></div>
            <p className="font-bold text-[14px] text-[#072635]">Diastolic</p>
        </div>
        <p className="font-bold text-[22px] text-[#072635] mb-1">{diastolicValue}</p>
        <div className="flex items-center mb-1 gap-3">
        <img src={arrowDown} alt="arrow" />
            <p className="font-normal text-[14px] text-[#072635]">{diastolicText}</p>
        </div>
        
    </div>
</div>

  )
}

export default MainChart