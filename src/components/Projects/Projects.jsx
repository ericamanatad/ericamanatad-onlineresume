import React, { useState } from 'react'
import './Projects.css'
import Projects_Data from '../../assets/projects_data'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const groupedProjects = Projects_Data.reduce((groups, project) => {
    const type = project.type?.trim()?.toLowerCase() || 'uncategorized'
    if (!groups[type]) groups[type] = []
    groups[type].push(project)
    return groups
  }, {})

  const openModal = (project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return (
    <div id='projects' className='projects'>
      <div className="projects-title position-relative">
        <h1>Projects</h1>
      </div>

      {Object.entries(groupedProjects).map(([type, projects]) => (
        <div key={type} className="project-type-group">
          <h2 className="type-heading">{type}</h2>
          <div className="projects-horizontal p-2">
            {projects.map((project) => (
              <div key={project.id} className="project-format">
                <h5>{project.title}</h5>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="projects-showmore" onClick={() => openModal(project)}>
                  <span>Show more&nbsp;</span>
                  <span className='bi bi-arrow-right'></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label='Close modal'>×</button>
            <h3>{selectedProject.title}</h3>
            <div className="project-modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="project-modal-content">
              <p>{selectedProject.desc}</p>
              {/* <p className='modal-type'><strong>Type: </strong>{selectedProject.type}</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects