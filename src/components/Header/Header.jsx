import './Header.css'
import ribbons from '../../assets/ribbons.png'

export const Header = () => {
  return (
    <div className='header-div'>
      <img
        className='ribbons-img'
        src={ribbons}
      />
    </div>
  )
}
