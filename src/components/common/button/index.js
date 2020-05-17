import React from 'react'

import './styles.scss'

const Button = ({ children, classes = '' }) => {
  return (
    <button className={`button ${classes}`}>{children}</button>
  )
}

export default Button