import React, { useContext } from 'react'
import { HelperContext } from '../context/helperProvider'

const useHelper = () => {
  return useContext(HelperContext)
}

export default useHelper