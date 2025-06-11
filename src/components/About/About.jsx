import React from 'react'
import './About.css'
import kai_pic from '../../assets/kai-pic.jpg'

const About = () => {
  return (
    <div id='about' className='about d-flex justify-content-between align-items-center p-3'>
        <div className="about-title position-relative">
            <h1>About Me</h1>
            {/* <img src={kai_pic} alt="kai_pic" /> */}
        </div>
        <div className="about-sections d-flex">
            <div className="about-left">
                <img src={kai_pic} alt="kai_pic"  width={400}/>
            </div>
            <div className="about-right d-flex flex-column">
                <div className="about-para d-flex flex-column gap-2">
                    <p>Motivated and detail-oriented <span className='h5'>Bachelor of Science in Information Technology</span> graduate from Mandaue City College, with eight months of hands-on experience in web design and development.</p>
                    <p>I'm a passionate Front-End Developer who loves to create beautiful and functional websites.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%", borderTop: "2px solid #fff"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "60%", borderTop: "2px solid #fff"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "70%", borderTop: "2px solid #fff"}} /></div>
                    <div className="about-skill"><p>C# (.Net)</p><hr style={{width: "60%", borderTop: "2px solid #fff"}} /></div>

                </div>
                <div className="about-achievements mt-3">
                    <div className="about-achievementx"><p style={{'font-size': '1.5rem'}}><b>ACHIEVEMENTS AND EXTRA CURRICULAR</b></p></div>
                    <div className="about-achievement"><p>Research Congress 2025 - 2nd Best Thesis</p></div>
                    <div className="about-achievement"><p>Another Achievement</p></div>
                    <div className="about-achievement"><p>Magnum</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About