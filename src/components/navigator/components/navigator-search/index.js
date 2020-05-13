import React from 'react'

import SearchIcon from './icons/search.svg'
import './styles.scss'

const NavigatorSearch = () => {
  return (
    <div className='navigator-search'>
      <img src={SearchIcon} alt='search' />
      <input placeholder='Search' />
    </div>
  )
}

export default NavigatorSearch