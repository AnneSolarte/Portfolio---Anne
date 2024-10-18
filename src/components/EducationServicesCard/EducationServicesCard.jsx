import React from 'react'
import { education, experience } from '../../data/about'
import './EducationServicesCard.css'

export const EducationServicesCard = () => {
  return (
    <div className='education-services-card'>

      <div className='education-div'>
        <h2>EXPERIENCE</h2>
        <hr />
        <div className='education-list'>
          {experience.map((item, index) => (
            <div key={index} className='education-item'>
              <h3>{item.major}</h3>
              <h4>{item.date}</h4>
              <p>{item.place}</p>
            </div>
          ))}
        </div>

      </div>

      <div className='education-div'>
        <h2>EDUCATION</h2>
        <hr />
        <div className='education-list'>
          {education.map((item, index) => (
            <div key={index} className='education-item'>
              <h3>{item.major}</h3>
              <h4>{item.date}</h4>
              <p>{item.place}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
