/* eslint-disable react/prop-types */
// import React from 'react'

import DetailsIcon from './DetailsIcon'
import birth from '../assets/icons/BirthIcon.svg'
import phone from '../assets/icons/PhoneIcon.svg'
import gender from '../assets/icons/FemaleIcon.svg'
import insure from '../assets/icons/InsuranceIcon.svg'

function PatientDetailsCard({patient}) {

  const convertDate = (dateStr) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dateParts = dateStr.split('/');
    const month = months[parseInt(dateParts[0], 10) - 1];
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);

    return `${month} ${day}, ${year}`;
  };

  // Convert the date string
  const formattedDate = convertDate(patient.date_of_birth)
  return (
    <div className="bg-white border rounded-2xl p-5 text-[#072635] h-[736px] flex flex-col justify-between">
        <div className=' flex-col items-center flex gap-3'>
            <img src={patient.profile_picture} alt='patient' className='w-[200px] h[200px]' />
            <p className='text-[24px] font-extrabold'>{patient.name}</p>
        </div>
        <DetailsIcon icon={birth} text="Date Of Birth" value={formattedDate} />
        <DetailsIcon icon={gender} text="Gender" value={patient.gender} />
        <DetailsIcon icon={phone} text="Contact Info" value={patient.phone_number} />
        <DetailsIcon icon={phone} text="Emergency Contacts" value={patient.emergency_contact} />
        <DetailsIcon icon={insure} text="Insurance Provider" value={patient.insurance_type} />
        
        <div className='bg-[#01f0d0] border border-[#01f0d0] rounded-[41px] p-2 mt-4 text-center'>
            Show all Information
        </div>

    </div>
  )
}

export default PatientDetailsCard