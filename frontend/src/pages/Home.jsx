import React from 'react'
import "../styles/Home.css"
import VisitorCount from '../components/VisitorCount'
const Home = () => {
  return (
    <>
    <div id="home" className="Home" style={{display:"flex",
             //flex-item only takes as much as space required
    }}>
      <div className="img-parent" >
        {/* //centering by justify-content center wont align image at center */}
        <div className="image">
        <img
        src="src/assets/me.jpg"
        style={{height:"400px",
        width:"400px",
        border:"2px solid black",
        borderRadius:"50%",


        }}/>
      </div>
      <div className="text" style={{display:"flex",padding:"200px 100px",gap:"30px"}}>
        <div className="title">
          <p style={{color:"black",fontSize:"3rem"}}>Hii!,This is Devid Deshmukh</p>
          </div>
        <div className="description">
      <p style={{color:"purple",fontSize:"2rem"}}>2+ years of crafting innovative web interfaces...</p>
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