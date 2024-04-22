import React from 'react'

const About = () => {
  return (
    <div className = "aboutSection" id='about'>
        <div className='container left'>
          <h2>Tech stack</h2>
          <div className='images'>
            <img src={require("./img/logo192.png")} alt="react" />
            <img src={require("./img/django-logo.png")} alt="django"/>
            <img src={require("./img/MySQL.png")} alt="mysql"/>
            <img src={require("./img/html-5.png")} alt="html"/>
            <img src={require("./img/css-3.png")} alt="css"/>
          </div>
        </div>
        <div className='container right'>
          <h2>About me</h2>
          <h4>Web Developer,<br/> based in Warsaw, Poland 📍</h4>
          <div className='text'>
            <p>As a developer I really enjoy designing and building responsive websites and web apps. I have experience in HTML, CSS, JavaScript, React.js, Django, RESTful APIs and MySQL. I always aspire to write clean and optimized code.</p>
          </div>
        </div>
    </div>
  )
}

export default About
