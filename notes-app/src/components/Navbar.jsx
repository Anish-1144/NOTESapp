import React from 'react'
import { NavLink } from 'react-router-dom'

const Nevbar = () => {
  return (
    <div className='flex flex-row gap-3 place-content-evenly'>
      <NavLink
      to = "/">
        Home
      </NavLink>

      <NavLink 
       to = "/pastes">
        Paste
      </NavLink>
     

       
    </div>
  )
}

export default Nevbar
