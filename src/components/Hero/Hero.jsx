import React, { useState } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-img.png'
import resume_img from '../../assets/Erica-Manatad-Resume.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  const handleResumeClick = () => {
    setShowModal(true)
  }

  const handleSaveResume = () => {
    const link = document.createElement('a')
    link.href = resume_img
    link.download = 'Erica-Manatad-Resume.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setShowModal(false)
    setTimeout(() => {
      window.location.hash = '#contact'
    }, 100)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
   <div id='home' className='hero d-flex flex-column align-items-center gap-4'>
    <img src={profile_img} alt="profile_img" width={250} height={250} />

    <h1>
      <span>I'm Erica,</span> a Web Developer & Data Analyst
    </h1>

    <p>
      I'm passionate about building modern, user-friendly web applications and transforming data into meaningful insights that drive smarter decisions.
    </p>

    <div className="hero-action d-flex align-items-center justify-content-center">
      <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
      <div className="hero-resume" onClick={handleResumeClick}>My resume</div>
    </div>

    {showModal && (
      <div className="resume-modal-overlay" onClick={closeModal}>
        <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>
          <img src={resume_img} alt="Resume" className="resume-image" />
          <button className="save-resume-btn" onClick={handleSaveResume}>Save Resume</button>
        </div>
      </div>
    )}
  </div>
  )
}

export default Hero