// import React from 'react'
import emily from '../assets/images/emily.png'
import DetailsIcon from './DetailsIcon'
// import birth from '../assets/icons/BirthIcon.svg'

function PatientDetailsCard() {
  return (
    <div className="bg-white border rounded-2xl p-5 text-[#072635]">
        <div className=' flex-col items-center flex gap-3 mb-1'>
            <img src={emily} alt='patient' className='w-[200px] h[200px]' />
            <p className='text-[24px] font-extrabold'>Jessica Taylor</p>
        </div>
        <DetailsIcon />
        <DetailsIcon />
        <DetailsIcon />
        <DetailsIcon />
        <DetailsIcon />
        
        <div className='bg-[#01f0d0] border border-[#01f0d0] rounded-[41px] p-2 mt-4 text-center'>
            Show all Information
        </div>

    </div>
  )
}

export default PatientDetailsCard