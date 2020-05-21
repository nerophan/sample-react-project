import React, { Fragment, useState } from 'react'

import Button from '../../../../components/common/button'
import Modal from '../../../../components/common/modal'
import NearbyStoreList from '../modals/nearby-store-list'

const HomeSignupLeftPanel = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <Fragment>
      <h1>Partner with Cart & Order and grow your business</h1>
      <div className='button-list'>
        <Button classes='success'>Register</Button>
        <Button onClick={() => setOpenModal(true)}>Login</Button>
      </div>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        styles={{
          maxHeight: '83vh',
        }}
      >
        <NearbyStoreList />
      </Modal>
    </Fragment>
  )
}

export default HomeSignupLeftPanel