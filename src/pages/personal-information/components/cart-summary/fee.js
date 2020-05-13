import React from 'react'

const Fee = ({ title, amount }) => {
  return (
    <div className='cart-summary-fee'>
      <span className='fee-title'>{title}</span>
      <span className='fee-amount'>${amount}</span>
    </div>
  )
}

export default Fee