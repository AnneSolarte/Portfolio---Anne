import React from 'react'
import { education, services } from '../../data/about'
import './EducationServicesCard.css'

export const EducationServicesCard = () => {
  return (
    <div className='education-services-card'>

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
  )
}
