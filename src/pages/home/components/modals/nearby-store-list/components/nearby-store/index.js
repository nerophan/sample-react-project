import React from 'react'

import './styles.scss'

const NearbyStore = ({ store }) => {
  return (
    <div className='nearby-store'>
      <img src={store.image} alt='store'/>
      <h4>{store.name}</h4>
      <p>{store.distance} away</p>
    </div>
  )
}

export default NearbyStore