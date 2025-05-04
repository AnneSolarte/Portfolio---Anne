import React from 'react'
import backIcon from '../../assets/back-icon.png'
import behanceIcon from '../../assets/behance-icon.png'
import siteIcon from '../../assets/site-icon.png'
import gitIcon from '../../assets/git-icon.png'
import PropTypes from 'prop-types'
import './ProjectDetailCard.css'
import { useNavigate } from 'react-router-dom'

export const ProjectDetailCard = ({ title, description, behanceLink, siteLink, gitLink, image1, image2, image3, image4, OnClick, project, categories }) => {
  const navigate = useNavigate()

  const HandleGoBackPage = () => {
    navigate('/projects')
  }
  const getCategoryText = () => {
    const { uxdesign, uidesign, frontend } = categories
    const categoryList = []

    if (uxdesign) categoryList.push('UX')
    if (uidesign) categoryList.push('UI')
    if (frontend) categoryList.push('FRONT')

    if (categoryList.length === 0) return ''
    if (categoryList.length === 1 && categoryList[0] === 'FRONT') return 'FRONT'

    if (categoryList.includes('FRONT')) {
      return categoryList.join(' / ')
    }

    return categoryList.join(' / ') + ' DESIGN'
  }

  const category = getCategoryText()
  console.log('category', category)

  return (
    <div className='project-detail-card-div'>

      <div className='data-project-detail'>

        <div className='icons'>
          <img
            src={backIcon}
            onClick={HandleGoBackPage}
            className='back-icon'
          />

          <div className='links'>
            {
            behanceLink
              ? <a
                  href={behanceLink}
                >
                <img
                  src={behanceIcon}
                  className='behance-icon'
                />

              </a>
              : null
            }

            {
            siteLink
              ? <a
                  href={siteLink}
                >
                <img
                  src={siteIcon}
                  className='behance-icon'
                />
                </a>
              : null
            }

            {
            gitLink
              ? <a
                  href={gitLink}
                >
                <img
                  src={gitIcon}
                  className='behance-icon'
                />
                </a>
              : null
            }
          </div>

        </div>

        <h1>{title} </h1>
        <p>{description} </p>

      </div>

      <div className='container'>

        <div className='item-0' />

        <div className='item-1'>
          <img src={image1} className='img-1' />

        </div>

        <div className='item-2'>
          <img src={image3} className='img-2' />
        </div>

        <div className='item-3'>
          <img src={image4} className='img-3' />
        </div>

        <div className='item-4'>
          <img src={image2} className='img-4' />
        </div>

        <div className='item-5'>

          <div className='text-fig'>
            <p className='title-figure'>{getCategoryText()}</p>
            <p className='text-figure'>  {project} </p>
          </div>
          <div id='circulo-negro' />

        </div>

      </div>

    </div>

  )
}

ProjectDetailCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  behanceLink: PropTypes.string,
  siteLink: PropTypes.string,
  gitLink: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  OnClick: PropTypes.func,
  project: PropTypes.string,
  categories: PropTypes.object
}
