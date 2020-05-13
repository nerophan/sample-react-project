import React from 'react'

import './styles.scss'
import BackgroundImage from './images/subscription-background.png'

import InputGroup from '../common/input-group'
import Button from '../common/button'

const Subscription = () => {
  return (
    <div className="subscription">
      <p>
        Subscribe to our newsletter and
        receive exclusive offers every week
      </p>
      <div className='subscription-form'>
        <InputGroup placeholder='Enter your email' />
        <Button classes='success'>Subscribe</Button>
      </div>
    </div>
  )
}

export default Subscription