import { EducationServicesCard } from '../../components/EducationServicesCard/EducationServicesCard'
import { IdentificationCard } from '../../components/IdentificationCard/IdentificationCard'
import { PersonalSkills } from '../../components/PersonalSkills/PersonalSkills'
import { SoftwareSkills } from '../../components/SoftwareSkills/SoftwareSkills'
import { services } from '../../data/about'
import './About.css'

export const About = () => {
  return (
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
          <div className='services-div'>
            <h2>SERVICES</h2>
            <hr />
            <div className='services-list'>
              {services.map((item, index) => (
                <div key={index} className='services-item'>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>

  )
}
