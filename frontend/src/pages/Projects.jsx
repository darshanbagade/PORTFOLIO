import React from 'react'
import evoImage from '../assets/evo.png'

const Projects = () => {
  return (
    <div id="projects" style={{
       display:"flex",
       flexDirection:"column",
        alignItems:"center",
        gap:"50px",
        height:"100vh",
        marginTop:"190px"
        // background:"linear-gradient(135deg, #1a1a1a 0%, #00a083 100%)"
    }}> 
      <div style={{color:"white", fontSize:"28px", paddingTop:"20px"}}><u>Projects</u></div>
      <div className="cards" style={{
        display:"grid",
        gridTemplateColumns:"repeat(2, 1fr)",
        gap:"200px"



      }}>
        <div className="card"
        style={{
          height:"400px",
          width:"450px",
          border:"2px solid white",
          display:"flex",
          flexDirection:"column"

        }}>
            <div className="img-container " style={{
              height:"60%",
              width:"100%",
              background:"blue",
              overflow:"hidden"
            }} >
              <img  src={evoImage}
                alt="Project screenshot"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              /
              >
            </div>
             <div className="title" style={{
              height:"15%",
              borderBottom:"2px solid white",
              color:"white",
              padding:"8px",
              textAlign:'center'
             }}>
              <p>A genome analysis platform</p>
            </div>
            <div className="techstack" style={{

              flex:1,
              borderBottom:"2px solid white",
              display: "flex",
             alignItems: "center",
            justifyContent: "center",
            gap:"10px",
            padding:"0 10px",
            color:"white"
             }}>
              <p>React</p>
              <p>Python</p>
              <p>Solidity</p>
              <p>Postman</p>
              <p>Vercel</p>
              <p>Metamask</p>

            </div>
            <div className="links" style={
              {
                display:"flex",
                justifyContent:'space-between',
                padding:"10px"
              }
            }>
              <a href>Github</a>
              <a href>Website Link</a>

            </div>

        </div>
        <div className="card"
        style={{
          height:"400px",
          width:"450px",
          border:"2px solid white",
          display:"flex",
          flexDirection:"column"

        }}>
            <div className="img-container " style={{
              height:"60%",
              width:"100%",
              background:"blue",
              overflow:"hidden"
            }} >
              <img  src={evoImage}
                alt="Project screenshot"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              /
              >
            </div>
             <div className="title" style={{
              height:"15%",
              borderBottom:"2px solid white",
               padding:"8px",
              textAlign:'center',
              color:'white'
             }}>
              <p>A genome analysis platform</p>
            </div>
            <div className="techstack" style={{

              flex:1,
              borderBottom:"2px solid white",
              display: "flex",
             alignItems: "center",
            justifyContent: "center",
            gap:"10px",
            padding:"0 10px",
            color:'white'
             }}>
              <p>React</p>
              <p>Python</p>
              <p>Solidity</p>
              <p>Postman</p>
              <p>Vercel</p>
              <p>Metamask</p>

            </div>
            <div className="links" style={
              {
                display:"flex",
                justifyContent:'space-between',
                padding:"10px"
              }
            }>
              <a href>Github</a>
              <a href>Website Link</a>

            </div>

        </div>



      </div>
    </div>
  )
}

export default Projects