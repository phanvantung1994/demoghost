import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './auth.context'

// const isBrowser = typeof window !== 'undefined'
const INITIAL_STATE = {
  // isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  isAuthenticated: true,
  // role: isBrowser && localStorage.getItem('role')
  role: 'admin'
}

function reducer(state, action) {
  console.log(state, 'auth')

  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true
      }
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false
      }
    case 'FORGOT_PASS':
      return {
        ...state
      }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.any
}

export { AuthProvider }
