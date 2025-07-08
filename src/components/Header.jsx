import title from '../assets/logo.jpg'
import Nav from './Nav'
import { useState } from 'react'

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false)
  function toggleMenu() {
    setOpenMenu(prevMenu => !prevMenu)
  }

  return (
    <header>
      <img src={title} alt="restaurant logo" className='title-logo' />
      <button className="hamburger-menu" onClick={toggleMenu} aria-expanded={openMenu} aria-label="Toggle navigation">
        <span className="hamburger-icon"></span>
      </button>
      <Nav className={`main-nav ${openMenu ? 'active' : ''}`} toggleMenu={toggleMenu} />
    </header>
  )

}