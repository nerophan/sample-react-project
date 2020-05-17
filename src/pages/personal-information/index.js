import React, { Fragment } from 'react'

import Navigator from '../../components/navigator'
import PersonalInformationForm from './components/personal-information-form'
import CartSummary from './components/cart-summary'
import './styles.scss'

const PersonalInformation = () => {
  return (
    <Fragment>
      <Navigator />
      <div className='personal-information-page'>
        <div className='content'>
          <div className='personal-information-form'>
            <PersonalInformationForm />
          </div>
          <div className='cart-summary'>
            <CartSummary />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PersonalInformation