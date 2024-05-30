/* eslint-disable react/prop-types */
// import React from 'react'

import LabCard from "./LabCard"
import PatientDetailsCard from "./PatientDetailsCard"

function RightSidebar({patient}) {


  return (
    <div className="w-1/4 h-[1054px]">
      <PatientDetailsCard patient={patient}/>
      <LabCard results={patient.lab_results} />
    </div>
  )
}

export default RightSidebar