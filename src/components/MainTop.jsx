// import React from 'react'

import MainChart from "./MainChart"
import VitalsCard from "./VitalsCard"


function MainTop() {
    

  return (
    <div className='bg-white border border-white rounded-2xl p-5'>
      <p className="text-[#072635] text-[24px] font-extrabold mb-8">Diagnosis History</p>
        <MainChart />
        <div className="mt-3 flex justify-between items-center gap-3">
            <VitalsCard />
            <VitalsCard />
            <VitalsCard />
        </div>
        
    </div>
  )
}

export default MainTop



  


