import React from 'react'
import './Contact.css'

const Contact = () => {
      const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c9600d0a-4260-4d1d-a370-90e62b0ddba8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
      //reset form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title position-relative">
            <h1>Get in Touch</h1>
        </div> 
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm always happy to talk about anything related to web development, design, or anything else you'd like to know.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <span className='bi bi-envelope'></span>
                        <p>ericaamanatad@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <span className='bi bi-phone'></span>
                        <p>09308569436</p>
                    </div>
                    <div className="contact-detail">
                        <span className='bi bi-linkedin'></span>
                        <p>ericaamanatad</p>
                    </div>
                    <div className="contact-detail">
                        <span className='bi bi-pin-map'></span>
                        <p>Mandaue City</p>
                    </div>
                </div>
            </div>
            <form onSubmit = {onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" id='name' placeholder="Enter your name" name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" id='email' placeholder="Enter your email" name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea placeholder="Enter your message" name='message' id='message' rows={8}></textarea>
                <button type="submit" className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact