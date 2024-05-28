// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LeftSidebar from './components/LeftSidebar'
import Main from './components/Main'
import RightSidebar from './components/RightSidebar'

function App() {

  return (
   <div className='font-manrope bg-custom-bg min-h-screen p-4'>
    <Header />
    <div className='min-h-screen flex gap-8 m-auto w-full mt-5'>
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
   </div>
  )
}

export default App
