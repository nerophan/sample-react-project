import React from 'react'

import './styles.scss'

const FooterColumn = ({ title, options }) => {
  return (
    <div className='footer-column'>
      <h4>{title}</h4>
      {options.map(option => <p>{option}</p>)}
    </div>
  )
}

export default FooterColumn