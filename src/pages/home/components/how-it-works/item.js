import React, { Fragment } from 'react'

import './styles.scss'

const HomeHowItWorksItem = ({ imgSrc, text }) => {
  return (
    <Fragment>
      <div className='item-icon'>
        <img src={imgSrc} alt='how it work' />
      </div>
      <h4 className='item-text'>{text}</h4>
    </Fragment>
  )
}

export default HomeHowItWorksItem