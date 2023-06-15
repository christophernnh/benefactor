import React from 'react'

const Backdrop = ({SideBar}) => {
  return (
    <div className={SideBar ? "fixed inset-0 bg-black bg-opacity-50" : "fixed inset-0 bg-black bg-opacity-50 hidden"}>
      
    </div>
  )
}

export default Backdrop
