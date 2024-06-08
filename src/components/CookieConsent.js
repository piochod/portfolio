import React from 'react'
import {useCookies} from 'react-cookie'
import './CookieConsent.css'

const CookieConsent = () => {

    const [cookies,setCookie] = useCookies(["cookieConsent"]);
    const giveCookieConsent = () =>{
        setCookie("cookieConsent",true, {path: "/"});
    };

  return (
    <div className='cookieConsent'>
      <p>
        We use cookies to enhance your user experience. By using our website, you agree to our use of cookies.{" "}
        <a href="https://commission.europa.eu/cookies-policy_en">Learn more.</a>
      </p>
      <button onClick={giveCookieConsent}>Accept</button>
    </div>
  )
}

export default CookieConsent
