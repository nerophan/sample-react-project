import React from 'react'
import Input from '../../../../components/common/inputs/style1'
import Checkbox from '../../../../components/common/checkbox'
import Button from '../../../../components/common/button'

const HomeSignupRightPanel = () => {
  return (
    <div className='form-panel'>
      <h2>Get Started</h2>
      <div className='form-row'>
        <Input placeholder='Full Name' />
      </div>
      <div className='form-row'>
        <Input placeholder='Email' />
        <Input placeholder='Phone Number' />
      </div>
      <div className='form-row'>
        <Input placeholder='Full Address' />
      </div>
      <div className='form-row'>
        <Input placeholder='Store Name' />
      </div>
      <div className='form-row'>
        <Input placeholder='Store Type' />
      </div>
      <div className='form-row'>
        <Checkbox label='I agree with terms and conditions' />
      </div>
      <div className='form-row submit'>
        <Button classes='success'>Submit</Button>
      </div>
    </div>
  )
}

export default HomeSignupRightPanel