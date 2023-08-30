import React, { useContext } from 'react'
import { HelperContext } from '../context/HelperProvider'

const useHelper = () => {
  return useContext(HelperContext)
}

export default useHelper