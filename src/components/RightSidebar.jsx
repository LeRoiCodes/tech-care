// import React from 'react'

import LabCard from "./LabCard"
import PatientDetailsCard from "./PatientDetailsCard"

function RightSidebar() {
  return (
    <div className="w-1/4 h-[98%]">
      <PatientDetailsCard />
      <LabCard />
    </div>
  )
}

export default RightSidebar