import { Filters } from '../../components/Filters/Filters'
import { ProjectsList } from '../../components/ProjectsList/ProjectsList'
import './Projects.css'

export const Projects = () => {
  return (
    <div className='page-div'>
      <div className='projects-page-div'>
        <div className='projects-header'>
          <h1>Projects</h1>
          <Filters />
        </div>
        <ProjectsList />
      </div>

    </div>
  )
}
