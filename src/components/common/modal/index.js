import React, { Fragment } from 'react'

import Modal from 'react-modal'

import './styles.scss'

import CloseIcon from './icons/close.svg'

const Popup = ({ children, isOpen, onClose, styles = {} }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '62.5vw',
      padding: 0,
      ...styles,
    }
  }
  const close = () => {
    onClose && onClose()
  }
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      overlayClassName="overlay"
    >
      <div className='modal-container'>
        <span onClick={close} className='modal-close'>
          <img src={CloseIcon} alt='close modal' />
        </span>
        {children}
      </div>
    </Modal>
  )
}

export default Popup