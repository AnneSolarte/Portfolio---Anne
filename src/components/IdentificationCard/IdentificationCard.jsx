import React from 'react'
import './IdentificationCard.css'
import characterImg from '../../assets/character.png'
import { dataIdentification, socialNetworks } from '../../data/about'
import identCardMobile from '../../assets/card-identification-mobile.png'
import identCardDesktop from '../../assets/card-identification-desktop.png'
import identCardCode from '../../assets/code-ic.png'

export const IdentificationCard = () => {
  return (
    <div className='identification-card-div'>

      <img
        src={identCardMobile}
        className='mobile-card-img'
      />
      <img
        src={identCardDesktop}
        className='desktop-card-img'
      />

      <div className='info-card-div'>

        <div className='img-character-div'>
          <img
            src={characterImg}
            alt='Character'
          />
        </div>

        <div className='info-div'>

          <h3>ANNE SOLARTE</h3>

          <div className='data-identification-div'>
            {dataIdentification.map((data, index) => (
              <div
                key={index}
                className='data-identification-item'
              >
                <p className='bold-text'>
                  {data.key}
                </p>
                <p>{data.value}</p>
              </div>
            ))}
          </div>

          <img src={identCardCode} id='code-img' />

          <div className='social-networks-div-desktop'>
            {socialNetworks.map((network, index) => (
              <div
                key={index}
                className='social-networks-item'
              >
                <img src={network.icon} />
                <p>{network.value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='social-networks-div-mobile'>
        {socialNetworks.map((network, index) => (
          <div
            key={index}
            className='social-networks-item'
          >
            <img src={network.icon} />
            <p>{network.value}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
