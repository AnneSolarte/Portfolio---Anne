import { EducationServicesCard } from '../../components/EducationServicesCard/EducationServicesCard'
import { IdentificationCard } from '../../components/IdentificationCard/IdentificationCard'
import { PersonalSkills } from '../../components/PersonalSkills/PersonalSkills'
import { SoftwareSkills } from '../../components/SoftwareSkills/SoftwareSkills'
import './About.css'

export const About = () => {
  return (
    <div className='page-div'>
      <div className='about-page-div'>
        <h1>About Me</h1>

        <div className='about-page-container'>
          <div className='edu-serv-card-desktop'>
            <EducationServicesCard />
          </div>

          <div className='container-right'>
            <IdentificationCard />
            <PersonalSkills />
            <div className='edu-serv-card-mobile'>
              <EducationServicesCard />
            </div>
            <SoftwareSkills />
          </div>
        </div>

      </div>

    </div>
  )
}
