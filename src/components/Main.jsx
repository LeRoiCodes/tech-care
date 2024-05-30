/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import MainBottom from "./MainBottom"
import MainTop from "./MainTop"

function Main({patient}) {

  const diagnosisHistory = patient.diagnosis_history.slice(0,6)
  const months = []
  const systolicData = []
  const diastolicData = []
  const currentMonthData = diagnosisHistory[0]
  const diagnosticList = patient.diagnostic_list

  diagnosisHistory.map((item) => {
    let date = item.month.slice(0,3) + " " + item.year
    months.push(date)
    systolicData.push(item.blood_pressure.systolic.value)
    diastolicData.push(item.blood_pressure.diastolic.value)
  })
  
  const chartData = {
    labels: months.reverse(),
    datasets: [
      {
        data: systolicData.reverse(),
        borderColor: '#e66fd2',
        backgroundColor: '#e66fd2',
      },
      {
        data: diastolicData.reverse(),
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
      },
    ],
  };

  return (
    <div className="w-1/2 h-[1054px]">
      <MainTop chartData={chartData} currentMonthData={currentMonthData} />
      <MainBottom diagnosticList={diagnosticList} />
    </div>
  )
}

export default Main