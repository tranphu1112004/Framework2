import React from 'react'
import '../css/listadmin.css'
// import Sidebar from './admin/sibar'
import { Outlet } from 'react-router-dom'
import Sidebar from './admin/sibar'
// import Header from './admin/Header'

const LayoutAdmin = () => {
  return (
    <> 

      <Sidebar/>
      <div className='ml-64'>
      <Outlet/>
      </div>
    </>
  )
}

export default LayoutAdmin