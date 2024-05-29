// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import Main from './components/Main'
import RightSidebar from './components/RightSidebar'

function App() {

  return (
   <div className='font-manrope bg-custom-bg p-4 h-[1195px]'>
    <Header />
    <div className=' flex gap-8 m-auto w-full mt-5 border border-yellow-300 h-[93.5%]'>
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
   </div>
  )
}

export default App
