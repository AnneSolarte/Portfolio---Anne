import { NavLink, useNavigate } from 'react-router-dom'
import { navClient, navDevelop } from '../../data/links'
import './NavBar.css'
import iconCloseBar from '../../assets/iconCloseBar.png'
import iconMenuBar from '../../assets/iconMenuBar.png'
import iconLogOut from '../../assets/iconLogOut.png'
import { useContextHook } from '../../hooks/contextHook'

export const NavBar = () => {
  const { userIsLogged, changeNavBar, logOutUser, hiddenBar } = useContextHook()
  const navigate = useNavigate()

  console.log('bar', hiddenBar)

  const onChangeNavBar = (type) => {
    changeNavBar(type)
  }

  const onHandleClick = () => {
    logOutUser()
    console.log('userlogged', userIsLogged)
    navigate('/home')
  }

  return (
    <nav className='nav'>
      {hiddenBar
        ? (
          <li id='li-menu-nav'>
            <img
              className='icon-nav-img'
              id='icon-menu-bar'
              src={iconMenuBar}
              onClick={() => onChangeNavBar('show')}
            />
          </li>
          )
        : userIsLogged === false
          ? (
            <ul>
              <li id='li-close-nav'>
                <img
                  className='icon-nav-img'
                  id='icon-close-bar'
                  src={iconCloseBar}
                  onClick={() => onChangeNavBar('hidden')}
                />
              </li>
              {navClient.map((link) => (
                <li key={link.id} id={'li-' + link.text}>
                  <NavLink
                    to={link.url}
                    activeclassname='active'
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    <img className='icon-nav-img' id={'icon-' + link.text} src={link.icon} />
                  </NavLink>
                </li>
              ))}
            </ul>
            )
          : (
            <ul>
              <li id='li-close-nav'>
                <img
                  className='icon-nav-img'
                  id='icon-close-bar'
                  src={iconCloseBar}
                  onClick={() => onChangeNavBar('hidden')}
                />
              </li>
              <li>
                <img
                  className='icon-nav-img'
                  id='icon-log-out'
                  src={iconLogOut}
                  onClick={onHandleClick}
                />
              </li>
              {navDevelop.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.url} activeclassname='active'>
                    <img className='icon-nav-img' id={'icon-' + link.text} src={link.icon} />
                  </NavLink>
                </li>
              ))}
            </ul>
            )}
    </nav>
  )
}
