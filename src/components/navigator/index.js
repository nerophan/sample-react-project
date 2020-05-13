import React from 'react'
import { Link } from 'react-router-dom';

import NavigatorSearch from './components/navigator-search'
import './styles.scss'

const Navigator = () => {
  return (
    <div className='navigator'>
      <div className='navigator-background'/>
      <div className='navigator-content'>
        <div className='navigator-pages'>
          <Link to='/'>Category</Link>
          <Link to='/'>Pickup Time</Link>
        </div>
        <NavigatorSearch />
      </div>
    </div>
  )
}

export default Navigator