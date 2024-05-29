// import React from 'react'
import search from "../assets/icons/search.svg"
import PatientMiniCard from "./PatientMiniCard"
import patients from "../utils/patients.js"

function LeftSidebar() {
  return (
    <div className="w-1/4 bg-white border rounded-2xl h-[98%] overflow-hidden">
      <div className=" flex justify-between m-5">
        <p className="text-[24px] text-[#072635] font-extrabold">Patients</p>
        <img src={search} alt="" className="" />
      </div>
      <div className="overflow-y-scroll h-[91%]">
      {patients ?  patients.map(patient => (<PatientMiniCard key={patient.name} name={patient.name} age={patient.age} imgUrl={patient.imgUrl} gender={patient.gender} />)
        ) : (
        <div> </div>
      )}
      </div>
    </div>
  )
}

export default LeftSidebar