import './Home.css'
import characterImgDesktop from '../../assets/character-desktop.png'
import characterImgMobile from '../../assets/character-mobile.png'
import nettingMobile from '../../assets/netting-mobile.png'
import nettingDesktop from '../../assets/netting-desktop.png'

export const Home = () => {
  return (
    <div className='page-div'>
      <div className='home-page-div'>
        <img
          src={nettingMobile}
          className='netting-img-mobile'
        />
        <img
          src={nettingDesktop}
          className='netting-img-desktop'
        />
        <img
          src={characterImgMobile}
          className='character-img-mobile'
        />

        <div className='text-home-div'>
          <h1>Hi,</h1>
          <h1>I’m Anne </h1>
          <p>A Ux and UI Designer and front ed developer from Cali, Colombia</p>
        </div>

        <img
          src={characterImgDesktop}
          className='character-img-desktop'
        />
      </div>

    </div>
  )
}
