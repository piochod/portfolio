import React from 'react'
import { ReactTyped } from 'react-typed'
import './Pages.css'

const Home = () => {
  return (
    <div className="homeSection" id='home'>
      <div className='left'>
          <img src="https://raw.githubusercontent.com/piochod/portfolioTemplate/7f1d9f9e888a1c2efb9eb6cc366577356ed23d9d/src/icons/avatar.svg" />
      </div>

      <div className='right'>
          <h1><ReactTyped
          strings ={
            ["Welcome!"]
          }
          typeSpeed={150}
          startDelay={1000}
          backDelay={2000}
          backSpeed={150}
          loop /></h1>
          <p>Hi I'm Piotr Chodkowski. A passionate Front-end React Developer based in Warsaw, Poland 📍
          <div className='socials'>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/piochod"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/piotr-chodkowski-2a1271213/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png" alt="linkedin"/></a>
          </div>
          </p>
          
          
      </div>
      
    </div>
  )
}

export default Home
