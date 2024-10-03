import React from 'react'
import { NavLink } from 'react-router-dom'

const Nevbar = () => {
  return (
    <div className='flex flex-row gap-3 place-content-evenly'>
  <NavLink to="/">
  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
     Home
    </button>
  </NavLink>

  <NavLink to="/pastes">
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Paste
    </button>
  </NavLink>
</div>

  )
}

export default Nevbar
