/* eslint-disable react/prop-types */
// import React from 'react'

import MainChart from "./MainChart"
import VitalsCard from "./VitalsCard"
import lungs from "../assets/icons/respiratory rate.svg"
import heart from "../assets/icons/heartbpm.svg"
import meter from "../assets/icons/temperature.svg"


function MainTop({chartData, currentMonthData}) {

  return (
    <div className='bg-white border border-white rounded-2xl p-5 h-[673px]'>
      <p className="text-[#072635] text-[24px] font-extrabold mb-8 ">Diagnosis History</p>
        <MainChart data={chartData} monthData={currentMonthData} />
        <div className="mt-3 flex justify-between items-center gap-3">
            <VitalsCard icon={lungs} color={"bg-[#E0F3FA]"} value={currentMonthData.respiratory_rate} text="Respiratory Rate" />
            <VitalsCard icon={meter} text="Temperature" color="bg-[#FFE6E9]" value={currentMonthData.temperature} />
            <VitalsCard icon={heart} color="bg-[#FFE6F1]" value={currentMonthData.heart_rate} text="Heart Rate" />
        </div>
        
    </div>
  )
}

export default MainTop



  


