import React from 'react'
import "../styles/Home.css"
import VisitorCount from '../components/VisitorCount'
import meImage from '../assets/me.jpg'
const Home = () => {
  return (
    <>
    <div id="home" className="home-container" style={{backgroundColor:"transparent"}}>
      <div className="img-parent" >
        <div className="image">
        <img
        src={meImage}
        alt="Devid Deshmukh"
        style={{height:"470px",
        width:"400px",
        border:"4px solid #ffffff",
        borderRadius:"100px",
        }}/>
      </div>
      <div className="text" style={{display:"flex",padding:"200px 100px",gap:"30px"}}>
        <div className="title">
          <p style={{color:"white",fontSize:"3rem", fontStyle:"bold"}}>Hii!,This is Devid Deshmukh</p>
          </div>
        <div className="description">
      <p style={{color:"#15ff00",fontSize:"2rem"}}>2+ years of crafting innovative web interfaces...</p>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
         <VisitorCount/>
      </div>
      </div>


      </div>

    </div>

    </>
  )
}

export default Home