// import React from 'react'
import birth from '../assets/icons/BirthIcon.svg'

function DetailsIcon() {
  return (
    <div className='flex items-center gap-3 mt-3'>
            <img src={birth} alt='icon'/>
            <div>
                <p className='font-medium text-[14px]'>Date of Birth</p>
                <p className='font-bold text-[14px]'>August 21 1996</p>
            </div>
        </div>
  )
}

export default DetailsIcon