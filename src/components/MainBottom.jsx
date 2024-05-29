// import React from 'react'

import DiagnosisList from "./DiagnosisList"

function MainBottom() {
  return (
    <div className='bg-white border border-white rounded-2xl p-5 mt-7 h-[42.5%]'>
      <p className="text-[#072635] text-[24px] font-extrabold mb-8">Diagnosis List</p>

      <div className=" h-[85%] overflow-hidden">
        <div className=" w-full flex justify-between items-center bg-[#f6f7f8] border border-white rounded-3xl p-3 text-[#072635] text-[14px] font-bold mb-2">
        <p className="w-1/3">Problem/Diagnosis</p>
        <p className="w-1/2">Description</p>
        <p className="w-1/6">Status</p>
        </div>
        <div className=" overflow-y-scroll h-[90%]">
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />
        <DiagnosisList />

        </div>
        
      </div>
    </div>
  )
}

export default MainBottom