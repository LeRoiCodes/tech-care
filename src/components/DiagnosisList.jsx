/* eslint-disable react/prop-types */
// import React from 'react'

function DiagnosisList({item}) {
 
  return (
    <div className="">
      <div className="w-full flex justify-between items-center h-[59px] pr-3 pl-3 ">
        <p className="w-1/3">{item.name}</p>
        <p className="w-1/2">{item.description}</p>
        <p className="w-1/6">{item.status}</p>
        </div>
        <hr className="" />
    </div>
  )
}

export default DiagnosisList