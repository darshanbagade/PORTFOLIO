import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" }
  ]

  const handleNavClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="container"
    style={{padding:"20px",display:"flex",justifyContent:"center",alignItems:"center", background:"black",position:"sticky", top: 0, zIndex: 100}}>
      <div className="nav-link">
        {navItems.map((item) => (
          <a 
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar