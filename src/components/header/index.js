import React from 'react'

import HeaderCart from './components/cart'

import LogoIcon from './icons/logo.svg'
import ShoppingBagIcon from './icons/shopping-bag.svg'
import AvatarIcon from './icons/noun_avatar.svg'

import './styles.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={LogoIcon} alt='Logo' />
      </div>
      <div className='header-item-list'>
        <div className='header-item'>
          <img src={ShoppingBagIcon} alt='shopping bag' />
        </div>
        <HeaderCart itemCountInCart={3} />
        <div className='header-item'>
          <img src={AvatarIcon} alt='avatar' />
        </div>
      </div>
    </div>
  )
}

export default Header