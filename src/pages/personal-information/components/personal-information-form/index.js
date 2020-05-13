import React, { Fragment } from 'react'

import InputGroup from '../../../../components/common/input-group'
import PaymentMethod from './components/payment-method'

import './styles.scss'

import VisaIcon from './icons/visa.svg'
import MastercardIcon from './icons/mastercard.svg'
import PaypalIcon from './icons/paypal.svg'

const PersonalInformationForm = () => {
  return (
    <Fragment>
      <div className='form-group'>
        <h3>Personal Information</h3>
        <div className='form-row'>
          <InputGroup
            label='First Name'
            placeholder='Beatrice'
          />
          <InputGroup
            label='Last Name'
            placeholder='Beatrice'
          />
        </div>
        <div className='form-row'>
          <InputGroup
            label='Email'
            placeholder='Beatrice'
          />
        </div>
        <div className='form-row'>
          <InputGroup
            label='Billing Address'
            placeholder='Beatrice'
          />
          <InputGroup
            label='Postal Code'
            placeholder='Beatrice'
          />
        </div>
        <div className='form-row'>
          <InputGroup
            label='Phone Pumber'
            placeholder='Beatrice'
          />
        </div>
      </div>
      <div className='form-group'>
        <h3>Payment Details</h3>
        <div className='form-row'>
          <PaymentMethod imgSrc={PaypalIcon} />
          <PaymentMethod imgSrc={VisaIcon} />
          <PaymentMethod imgSrc={MastercardIcon} />
        </div>
        <div className='form-row'>
          <InputGroup
            label='Card Number'
            placeholder='Beatrice'
          />
        </div>
        <div className='form-row'>
          <InputGroup
            label='Expiry Date'
            placeholder='Beatrice'
          />
          <InputGroup
            label='Security Code'
            placeholder='Beatrice'
          />
        </div>
      </div>
    </Fragment>
  )
}

export default PersonalInformationForm