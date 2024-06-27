import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectDetailCard } from '../../components/ProjectDetailCard/ProjectDetailCard'
import { useContextHook } from '../../hooks/contextHook'

export const DetailProject = () => {
  const { projectName } = useParams()
  const { projects } = useContextHook()

  const projectData = projects.find(project => project.name === projectName)
  console.log('params', projectName, 'data', projectData)

  const navigate = useNavigate()

  const OnClick = () => {
    navigate('/projects')
  }

  return (
    <div className='page-div'>

      {projectData
        ? (
          <ProjectDetailCard
            title={projectData.title}
            description={projectData.description}
            behanceLink={projectData.behanceLink}
            image1={projectData.images[0]}
            image2={projectData.images[1]}
            image3={projectData.images[2]}
            image4={projectData.images[3]}
            project={projectData.project}
            categories={projectData.categories}
            OnClick={OnClick}
          />
          )
        : (
          <div>Project not found</div>
          )}
    </div>
  )
}
