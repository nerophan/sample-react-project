import React, { Fragment } from 'react'

import Fee from './fee'
import Button from '../../../../components/common/button'

import './styles.scss'

const CartSummary = () => {
  return (
    <Fragment>
      <h2>Cart Summary</h2>
      <Fee title='Subtotal (7 items)' amount='89.99' />
      <Fee title='Shipping fee' amount='89.99' />
      <Fee title='Tax' amount='89.99' />
      <div className='cart-summary-fee-total'>
        <span className='fee-title'>Total</span>
        <span className='fee-amount'>$89.99</span>
      </div>
      <Button classes='success'>CHECKOUT</Button>
    </Fragment>
  )
}

export default CartSummary