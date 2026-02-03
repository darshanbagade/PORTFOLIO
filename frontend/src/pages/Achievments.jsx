import React from 'react'

const Achievments = () => {
  const achievements = [
    {
      id: 1,
      title: "Full Stack Developer Certification",
      description: "Completed comprehensive full-stack development course covering React, Node.js, and MongoDB",
      year: "2023"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Contributed to multiple open-source projects with 50+ commits and improvements",
      year: "2023"
    },
    {
      id: 3,
      title: "Award for Innovation",
      description: "Received award for innovative web solution in tech hackathon competition",
      year: "2024"
    },
    {
      id: 4,
      title: "Technical Speaker",
      description: "Delivered talks on modern web development practices at tech conferences",
      year: "2024"
    }
  ]

  return (
    <div id="achievements" style={{
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
        <u>Achievements</u>
      </div>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "30px",
        maxWidth: "1200px",
        width: "100%"
      }}>
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "2px solid white",
              borderRadius: "10px",
              padding: "30px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
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
              {achievement.title}
            </div>
            <div style={{ fontSize: "1rem", color: "#ccc" }}>
              {achievement.description}
            </div>
            <div style={{ fontSize: "0.9rem", color: "#888", marginTop: "auto" }}>
              {achievement.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievments
