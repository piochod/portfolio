import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='footer'>
                <h3>Copyright © 2024. All rights are reserved</h3>
                <div className='footerSocials'>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/piochod"><img src={require("./img/github-mark-white.png")} alt="github"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/piotr-chodkowski-2a1271213/"><img src={require("./img/linkedin-white.png")}/></a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
