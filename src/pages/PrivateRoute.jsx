import { Navigate, useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import { useContextHook } from '../hooks/contextHook'

export function PrivateRoute ({ children }) {
  const { userIsLogged } = useContextHook()
  const { pathname } = useLocation()

  if (!userIsLogged) {
    return (
      <Navigate
        to='/home'
      />
    )
  }

  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired
}
