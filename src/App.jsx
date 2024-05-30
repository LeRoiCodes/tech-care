/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import './App.css'
import axios from "axios"
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import Main from './components/Main'
import RightSidebar from './components/RightSidebar'
// import patients from "../src/utils/patientsData"
import { useEffect, useState } from 'react'

function App() {

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      const username = import.meta.env.VITE_USERNAME;
      const password = import.meta.env.VITE_PASSWORD;
      const token = btoa(`${username}:${password}`); // Base64 encode the credentials

      try {
        const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': `Basic ${token}`
          }
        });
        setPatients(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  let currentPatient = {}
  patients.map((patient) => {
    if (patient.name === "Jessica Taylor"){
      // console.log(patient)
      currentPatient = patient
      // console.log(currentPatient)
    }
  })
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
   <div className='font-manrope bg-custom-bg p-4 h-[1195px]'>
    <Header />
    <div className=' flex gap-8 m-auto w-full mt-5 h-[1054px]'>
      <LeftSidebar patients={patients} />
      <Main patient={currentPatient} />
      <RightSidebar patient={currentPatient} />
    </div>
   </div>
  )
}

export default App
