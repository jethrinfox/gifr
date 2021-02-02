import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="global-bg">
      <nav className="container mx-auto p-8 flex justify-center items-center">
        <Link to="/" >
          item 1
        </Link>
        <Link to="/" >
          item 2
        </Link>
      </nav>
    </div>
  )
}

export default Footer
