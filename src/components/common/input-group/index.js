import React from 'react'

import './styles.scss'

const InputGroup = ({label, placeholder}) => {
  return (
    <div className='input-group'>
      {label && <p>{label}</p>}
      <input placeholder={placeholder} />
    </div>
  )
}

export default InputGroup