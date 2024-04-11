import React, {useState} from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [topic, setTopic] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const serviceId = 'service_vwb0b0b';
      const templateId = 'template_tig5fmi';
      const publicKey = 'v0XcAdGA0xNvKS1KZ';
      
    

    const templateParams = {
      from_topic: topic,
      from_email: email,
      message: message,
      to_name: "Piotr",
    };

    emailjs.send(serviceId,templateId,templateParams,publicKey).then((response) =>{
      console.log('E-mail sent succesfully!', response);
      setTopic('');
      setEmail('');
      setMessage('');
    }).catch((error) =>{
      console.error("E-mail fail to sent",error);
    });
}

  return (
    
    <div className='contactSection' id='contact'>
      <div className='formSec'>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input type='e-mail' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type='text' placeholder='Topic' value={topic} onChange={(e) => setTopic(e.target.value)}/>
          <textarea value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
