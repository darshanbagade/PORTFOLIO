import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Python", "REST APIs"]
    },
    {
      category: "Tools & Tech",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Docker"]
    },
    {
      category: "Other",
      skills: ["Solidity", "Web3", "Metamask", "Vercel", "AWS"]
    }
  ]

  return (
    <div id="skills" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: "100vh",
      padding: "50px 20px",
      gap: "50px"
    }}>
      <div style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
        <u>Skills</u>
      </div>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "30px",
        maxWidth: "1200px",
        width: "100%"
      }}>
        {skillCategories.map((skillGroup, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "2px solid white",
              borderRadius: "10px",
              padding: "30px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
              e.currentTarget.style.transform = "translateY(-5px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#15ff00" }}>
              {skillGroup.category}
            </div>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px"
            }}>
              {skillGroup.skills.map((skill, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "rgba(21, 255, 0, 0.2)",
                    border: "1px solid #15ff00",
                    color: "#15ff00",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills