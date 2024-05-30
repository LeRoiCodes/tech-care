/* eslint-disable react/prop-types */
// import React from 'react'
// import birth from '../assets/icons/BirthIcon.svg'

function DetailsIcon({icon, text, value}) {
  return (
    <div className='flex items-center gap-3 mt-3'>
            <img src={icon} alt='icon'/>
            <div>
                <p className='font-medium text-[14px]'>{text}</p>
                <p className='font-bold text-[14px]'>{value}</p>
            </div>
        </div>
  )
}

export default DetailsIcon