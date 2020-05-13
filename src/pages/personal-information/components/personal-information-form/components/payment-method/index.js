import React from 'react'

import './styles.scss'

const PaymentMethod = ({ imgSrc }) => {
  return (
    <div className='payment-method'>
      <img src={imgSrc} alt='payment-method' />
    </div>
  )
}

export default PaymentMethod