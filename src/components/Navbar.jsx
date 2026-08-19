import React from 'react'
import "./styles/Navbar.css"
const Navbar = ({toggleDarkMode,darkMode,onHomeClick}) => {
  return (
    <div className='navbar'>
      <h1 className='logo' onClick={onHomeClick}>
        Recipe Finder
      </h1>
      <button onClick={toggleDarkMode} className='dark-btn'>
        {darkMode ? "Light Mode":"Dark Mode"}
        </button>
      
    </div>
  )
}

// toggleDarkMode={toggleDarkMode} darkMode={darkMode}

export default Navbar
