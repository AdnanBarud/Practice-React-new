import React from 'react'
import { Outlet } from 'react-router-dom'

const ChildB = () => {
  return (
    <div>
        this is ChildB
        <Outlet />
    </div>
  )
}

export default ChildB