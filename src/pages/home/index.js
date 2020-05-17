import React from 'react'

import Signup from './components/signup'
import Introduction from './components/introduction'
import HowItWorks from './components/how-it-works'

import './styles.scss'

const Home = () => {
  return (
    <div className='home-page'>
      <div className='home-page-signup'>
        <Signup />
      </div>
      <div className='home-page-intro'>
        <Introduction />
      </div>
      <div className='home-page-how-it-works'>
        <HowItWorks />
      </div>
    </div>
  )
}

export default Home