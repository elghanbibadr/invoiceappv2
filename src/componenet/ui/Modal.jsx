import React from 'react'

const Modal = ({ children, setIsOpen, style }) => {

  const handleModelClicked = () => { setIsOpen(false) }
  return (
    <div onClick={handleModelClicked} className={`fixed ${style} modal inset-0 bg-[#00000073]  `}>{children}</div>
  )
}

export default Modal