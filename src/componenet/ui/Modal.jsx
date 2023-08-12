import React from 'react'

const Modal = ({ children, setIsOpen }) => {

  const handleModelClicked = () => { setIsOpen(false) }
  return (
    <div onClick={handleModelClicked} className='fixed modal inset-0 bg-[#00000073] flex justify-center items-center z-[3333333333333]'>{children}</div>
  )
}

export default Modal