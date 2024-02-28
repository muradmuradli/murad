import React from 'react'
import Recommended from './Recommended'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div style={{display:'flex'}}>
       <SideBar></SideBar>
       <Outlet></Outlet>
    </div>
  )
}

export default DashboardLayout
