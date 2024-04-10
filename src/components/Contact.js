import React from 'react'

const Contact = () => {


  return (
    <div className='contactSection' id='contact'>
      <div className='formSec'>
        <h1>Contact Me</h1>
        <form>
          <label>E-mail</label>
          <input type='text' required />
          <label>Topic</label>
          <input type='text' required />
          <label>Description</label>
          <textarea required></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
