import React, { useContext } from 'react'
import { userContext } from '../context/UserProvider'

const useUser = () => {
  return useContext(userContext)
}

export default useUser;
