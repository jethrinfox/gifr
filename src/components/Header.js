import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="global-bg">
      <div className="container mx-auto flex justify-between items-center p-10">
        <Link to="/" className="text-4xl font-bold text-white">
          gifr
        </Link>
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-lg mr-4 text-white">
            Link 1
          </Link>
          <Link to="/" className="text-lg text-white">
            Link 2
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
