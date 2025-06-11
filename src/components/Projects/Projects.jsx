import React from 'react'
import './Projects.css'
import Projects_Data from '../../assets/projects_data'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projects-title position-relative">
            <h1>Projects</h1>
        </div>
        <div className="projects-container row justify-content-center d-flex mt-3 mb-3">
            {Projects_Data.map((project,index)=>{
                return <div key={index} className="project-format col-12 col-sm-6 col-lg-3 d-grid justify-content-center pb-3 pt-1">
                    <h5>{project.title}</h5>
                    {/* <p>{project.desc}</p> */}
                    <div className="project-image-wrapper">
                        <img src={project.image} alt="project-image" width={200} height={700} />
                    </div>
                    <div className="projects-showmore">
                        <span>Show more &nbsp;</span>
                        <span className='bi bi-arrow-right'></span>
                    </div>

                </div>
            })}
        </div>
    </div>
  )
}

export default Projects