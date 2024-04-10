import React from 'react'

const About = () => {
  return (
    <div className = "aboutSection" id='about'>
        <div className='container left'>
          <h2>Tech stack</h2>
          <div className='images'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-django-2-282855.png?f=webp&w=256" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png" />
            <img src={require("./html-5.png")} />
            <img src={require("./css-3.png")} />
          </div>
        </div>
        <div className='container right'>
          <h2>About me</h2>
          <h4>Front-end Developer,<br/> based in Warsaw, Poland 📍</h4>
          <div className='text'>
            <p>As a developer I really enjoy designing and building responsive websites and web apps.<br></br> I have experience in HTML, CSS, JavaScript, React.js, Django, RESTful APIs and MySQL. <br/>I always aspire to write clean and optimized code.</p>
          </div>
        </div>
    </div>
  )
}

export default About
