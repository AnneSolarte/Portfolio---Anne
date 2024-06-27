import React from 'react'
import { personalSkills } from '../../data/about'
import './PersonalSkills.css'

export const PersonalSkills = () => {
  return (
    <div className='personal-skills-div'>
      <h2>Personal Skills</h2>
      <div className='personal-skills-list'>
        {personalSkills.map((item, index) => (
          <div
            key={index}
            className='personal-skills-item'
            id={'personal-skill-' + index}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
