import React from 'react'

import CartIcon from '../../icons/noun_cart.svg'

import './styles.scss'

const HeaderCart = ({ itemCountInCart }) => {
  return (
    <div className='header-item header-cart'>
      <img src={CartIcon} alt='cart' />
      {itemCountInCart && <div className='cart-badge'>
        <span>
          {itemCountInCart}
        </span>
      </div>}
    </div>
  )
}

export default HeaderCart