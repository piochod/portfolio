import React from 'react'
import { ReactTyped } from 'react-typed'
import './Pages.css'
import { useTranslation } from 'react-i18next'

const Home = () => {

  const {t} = useTranslation();

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

          <p>Hi I'm Piotr Chodkowski. A passionate Software Engineer based in Warsaw, Poland 📍
          </p>
          <div className='socials'>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/piochod"><img src={require("./img/github-mark.png")} alt="github"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/piotr-chodkowski-2a1271213/"><img src={require("./img/linkedin.png")} alt="linkedin"/></a>
          </div>
          

          
          
      </div>
      
    </div>
  )
}

export default Home
