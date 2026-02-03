import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (

    <div className="container"
    style={{padding:"20px",display:"flex",justifyContent:"center",alignItems:"center", background:"black",position:"sticky"}}>
      <div className="nav-link">
        <a >Home</a>
      <a>About</a>
      <a>Achievements</a>
      <a>Skills</a>
      <a>Projects</a>
      <a>Contact</a>
      </div>

    </div>
  )
}

export default Navbar