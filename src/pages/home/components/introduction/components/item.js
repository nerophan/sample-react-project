import React from 'react'

import './styles.scss'

const HomeIntroductionItem = ({ title, desc, imgSrc, revert }) => {
  return (
    <div className={`intro-item-layout ${revert ? 'revert' : ''}`}>
      <div className='intro-text'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className='intro-img'>
        <img src={imgSrc} alt='introduction item' />
      </div>
    </div>
  )
}

export default HomeIntroductionItem