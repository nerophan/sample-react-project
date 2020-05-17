import React, { Fragment } from 'react'

import HomeSignupLeftPanel from './left-panel'
import HomeSignupRightPanel from './right-panel'

import './styles.scss'

const HomeSignup = () => {
  return (
    <Fragment>
      <div className='left-panel'>
        <HomeSignupLeftPanel />
      </div>
      <div className='right-panel'>
        <HomeSignupRightPanel />
      </div>
      <div className='home-page-signup-background' />
      <div className='home-page-signup-shadow' />
    </Fragment>
  )
}

export default HomeSignup