import React from 'react'

import './styles.scss'

const Checkbox = ({ label }) => {
  return (
    <div className='input-group checkbox'>
      <input type='checkbox' />
      <label>{label}</label>
    </div>
  )
}

export default Checkbox