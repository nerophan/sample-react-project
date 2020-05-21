import React from 'react'

import Button from '../../../../../../../components/common/button'
import InputGroup from '../../../../../../../components/common/input-group'

import './styles.scss'

const StoreSearchForm = ({ store }) => {
  return (
    <div className='store-search-form'>
      <InputGroup placeholder='Enter ZIP Code' />
      <Button classes='success'>Go</Button>
    </div>
  )
}

export default StoreSearchForm