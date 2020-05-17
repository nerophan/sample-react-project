import React from 'react'

import Item from './item'

import './styles.scss'

import BillImage from './images/bill.svg'
import CalendarImage from './images/calendar.svg'
import PackageImage from './images/package.svg'

const HomeHowItWorks = () => {
  const items = [
    {
      imgSrc: BillImage,
      text: 'Customer orders & pays online'
    },
    {
      imgSrc: PackageImage,
      text: 'You collect and package the items'
    },
    {
      imgSrc: CalendarImage,
      text: 'Customer picks up order at scheduled time'
    }
  ]
  return (
    <div className='hik'>
      <h3>How it works</h3>
      <div className='hik-list'>
        {items.map(item => <div class='hik-item'>
          <Item {...item} />
        </div>)}
      </div>
    </div>
  )
}

export default HomeHowItWorks