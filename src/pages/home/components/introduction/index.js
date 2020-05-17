import React, { Fragment } from 'react'

import Item from './components/item'

import './styles.scss'

import Item1 from './images/item1.png'
import Item2 from './images/item2.png'
import Item3 from './images/item3.png'

const HomeIntroduction = () => {
  const items = [
    {
      title: 'Have an online presence',
      desc: 'Keep up with the competition and put your store online.  With a major surge in online grocery shopping, now is the time to capitalize on market changes',
      imgSrc: Item1
    },
    {
      title: 'Reach new customers',
      desc: 'We feature your store on our website so new customers can find your store and order',
      imgSrc: Item2,
      revert: true,
    },
    {
      title: 'Manage with Ease',
      desc: 'We handle the transactions and ordering system, you just need to pack the order and hand it off!',
      imgSrc: Item3
    }
  ]
  return (
    <Fragment>
      {items.map(item => <div className='intro-item'>
        <Item {...item} />
      </div>)}
    </Fragment>
  )
}

export default HomeIntroduction