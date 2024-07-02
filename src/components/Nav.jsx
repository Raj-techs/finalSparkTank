import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="logo"><h1>BloodDrop</h1></div>
        <div className="opts">
            <ul>
                <Link to='/' style={{color:"white",textDecoration:"none"}}><li>Home</li></Link>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Blood</li>
            </ul>
        </div>
        <div className="more">
            <ul>
                <h5>Login</h5>
                <h5>SignUp</h5>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
