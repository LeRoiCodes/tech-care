// import React from 'react'
import arrowdown from "../assets/icons/arrow-down.svg"
import arrowDown from "../assets/icons/ArrowDown.svg"
import arrowUp from "../assets/icons/ArrowUp.svg"

import BloodPressureChart from '../components/BloodPressureChart';

function MainChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Months
        datasets: [
          {
            // label: 'Systolic',
            data: [120, 125, 130, 128, 135, 140, 138], // Example systolic blood pressure readings
            borderColor: '#C26EB4',
            backgroundColor: '#e66fd2',
          },
          {
            // label: 'Diastolic',
            data: [80, 82, 85, 83, 87, 90, 88], // Example diastolic blood pressure readings
            borderColor: '#7e6cab',
            backgroundColor: '#7e6cab',
          },
        ],
      };


  return (

<div className='bg-[#f4f0fe] border border-white rounded-xl p-2 flex gap-6'>

    <div className='w-2/3'>
        <div className='flex justify-between items-center w-full mb-3'>
        <p className=" font-bold text-[18px] text-[#072635]">Bloop Pressure</p>
        <div className='flex justify-between items-center gap-1 mr-2 text-[14px] text-[#72635]font-normal'>
            <p>Last 6 months</p>
            <img src={arrowdown} alt="" />
        </div>
        </div>
    <BloodPressureChart data={data} />
    </div>
    <div className="w-1/3">
        <div className="flex items-center gap-3 mb-1">
            <div className="w-[14px] h-[14px] rounded-full border bg-[#e66fd2] "></div>
            <p className="font-bold text-[14px] text-[#072635]">Systolic</p>
        </div>
        <p className="font-bold text-[22px] text-[#072635] mb-1">160</p>
        <div className="flex items-center mb-1 gap-3">
        <img src={arrowUp} alt="arrow" />
            <p className="font-normal text-[14px] text-[#072635]">Higher than Average</p>
        </div>
        <hr className="mb-1" />
        <div className="flex items-center gap-3 mb-1 ">
        <div className="w-[14px] h-[14px] rounded-full border bg-[#e66fd2] "></div>
            <p className="font-bold text-[14px] text-[#072635]">Diastolic</p>
        </div>
        <p className="font-bold text-[22px] text-[#072635] mb-1">78</p>
        <div className="flex items-center mb-1 gap-3">
        <img src={arrowDown} alt="arrow" />
            <p className="font-normal text-[14px] text-[#072635]">Lower than Average</p>
        </div>
        
    </div>
</div>

  )
}

export default MainChart