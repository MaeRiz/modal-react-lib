import React from 'react'
import styles from './styles.module.css'

const Modal = ({ openState, onRequestClose, content }) => {

  if (openState) {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    return (
      <div className={styles.bgdark}>
        <div className={styles.modal}>
          <div
            className={styles.closeBtn}
            onClick={() => onRequestClose(false)}
          >
            ✖
          </div>
          <h1 className={styles.title}>TITLE</h1>
          <h3 className={styles.text}>Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nesciunt praesentium amet culpa, reprehenderit harum totam corporis quia voluptatibus maxime.</h3>
        </div>
      </div>
    )
  } else {
    document.body.style.overflow = 'auto'

    return null
  }
}

export default Modal;