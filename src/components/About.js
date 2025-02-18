import React from 'react'

const About = () => {
  return (
    <div className = "aboutSection" id='about'>
        <div className='container left'>
          <h2>Technologies I use</h2>
          <div className='images'>
            <img src={require("./img/html-5.png")} alt="python"/>
            <img src={require("./img/logo192.png")} alt="react" />
            <img style={{height: 60 +'px', width: 190+'px'}}src={require("./img/jenkins.png")} alt="jenkins"/>
            <img src={require("./img/MySQL.png")} alt="postgresql"/>
            <img src={require("./img/css-3.png")} alt="typescript"/>
          </div>
        </div>
        <div className='container right'>
          <h2>About me</h2>
          <h4>Software Engineer,<br/> based in Warsaw, Poland 📍</h4>
          <div className='text'>
            <p>During my engineering career I worked on big worldwide products in agile environments. I have experience in test automation and developing CI/CD tools. I am hard working and always aspire to write the best code possible.</p>
          </div>
        </div>
    </div>
  )
}

export default About
