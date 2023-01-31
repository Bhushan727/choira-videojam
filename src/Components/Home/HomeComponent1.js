import React from 'react'
import "./Home.css"

const Home = () => {
  return (
      <div className='home-component1'>
        <video src={process.env.PUBLIC_URL + '/sample-video1.mp4'} width="100%" height="100%" loop autoPlay>

        </video>
      </div>
  )
}

export default Home