import React, { Fragment } from 'react'

import Button from '../../../../components/common/button'

const HomeSignupLeftPanel = () => {
  return (
    <Fragment>
      <h1>Partner with Cart & Order and grow your business</h1>
      <div className='button-list'>
        <Button classes='success'>Register</Button>
        <Button>Login</Button>
      </div>
    </Fragment>
  )
}

export default HomeSignupLeftPanel