import React, { useState } from 'react'

import PageContent from './components/PageContent'

// Import modal component and style file
import Modal from 'modal-react-lib'
import 'modal-react-lib/dist/index.css'

const App = () => {

  // Create a Open/Close state for modal with useState hook
  const [openModal, setOpenModal] = useState(false)

  // Create an object with title and text key for modal content
  const modal_content = {
    title: 'Modal Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nisi, atque sint nihil facilis velit, architecto enim eum cum suscipit'
  }

  return (
    <>
      <h1>Lorem ipsum dolor sit amet.</h1>

      {/* Change state of useState hook for control modal */}
      <button onClick={() => setOpenModal(!openModal)}>Open modal</button>

      <PageContent />

      {/**
       * Add modal component with props
       * 
       * @prop { Boolean } openState Current state of modal from useState hook
       * @prop { Function } onRequestClose Function to set state of modal from useState Hook
       * @prop { Object.<title: String, text:String> } content Object with value to display in modal
       */}
      <Modal
        openState={openModal}
        onRequestClose={setOpenModal}
        content={modal_content}
      />
    </>
  )
}

export default App
