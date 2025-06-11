import React from 'react'
import './Footer.css'
import profile_img from '../../assets/profile-img.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={profile_img} alt="footer-logo" />
                <p>I am a web developer and designer. I love to create beautiful and functional websites.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <span className="bi bi-envelope"></span>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                © 2025 Erica Manatad. All rights reserved.
            </div>
            <div className="footer-bottom-right">
                <p className='fbr'>Terms of Services</p>
                <p className='fbr'>Privacy Policy</p>
                <p className='fbr'>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer