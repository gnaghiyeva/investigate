import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarr from '../components/Navbarr'
import Footer from '../components/Footer'

const MainRoot = () => {
  return (
    <>
    
    <Navbarr/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainRoot