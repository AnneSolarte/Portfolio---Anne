import React from 'react'
import { softwareSkills } from '../../data/about'
import './SoftwareSkills.css'

export const SoftwareSkills = () => {
  const DesignSoftwareData = softwareSkills.DesignSoftware
  const DeveloperSoftwareData = softwareSkills.DeveloperSoftware

  return (
    <div className='softaware-skills-div'>
      <div>
        <h1 id='title-software-skills'>SKILLS</h1>
        <div className='white-line' />

        <h3>Design Software</h3>
        <div className='software-list'>
          {DesignSoftwareData.icons.map((item, index) => (
            <div
              key={index}
              className='software-item'
            >
              <img
                src={item}
                alt='Design Software Icon'
              />
            </div>
          ))}
        </div>

        <hr />
      </div>

      <div>
        <h3>Developer Software</h3>
        <div className='software-list'>
          {DeveloperSoftwareData.icons.map((item, index) => (
            <div
              key={index}
              className='software-item'
            >
              <img
                src={item}
                alt='Developer Software Icon'
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
