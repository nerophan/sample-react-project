import React from 'react'

import HeaderCart from './components/cart'

import ShoppingBagIcon from './icons/shopping-bag.svg'
import AvatarIcon from './icons/noun_avatar.svg'

import './styles.scss'

const Header = () => {
  return (
    <div className="header">
      <div className='header-item'>
        <img src={ShoppingBagIcon} alt='shopping bag' />
      </div>
      <HeaderCart itemCountInCart={3} />
      <div className='header-item'>
        <img src={AvatarIcon} alt='avatar' />
      </div>
    </div>
  )
}

export default Header