import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero d-flex flex-column align-items-center gap-4'>
        <img src={profile_img} alt="profile_img" width={250} height={250} />
        <h1><span>I'm Erica Manatad,</span> a Front-End Developer</h1>
        <p>I'm a passionate Front-End Developer who loves to create beautiful and functional websites.</p>
        <div className="hero-action d-flex align-items-center justify-content-center">
            <div className="hero-connect "><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero