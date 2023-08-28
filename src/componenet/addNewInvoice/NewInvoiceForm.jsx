import React from 'react'
import IconLeftArrow from "../../../public/assets/icon-arrow-left.svg"
import { Link } from 'react-router-dom'
import Modal from '../ui/Modal'

const NewInvoiceForm = () => {

    return (
        <Modal>
            <div className='bg-secondaryColor pt-20 h-full w-1/2 left-10'>
                <Link to="/home" className='flex cursor-pointer  md:hidden items-center'>
                    <img src={IconLeftArrow} alt="left arrow icon" />
                    <p className='font-bold mx-3'>Go Back</p>
                </Link>
            </div>
        </Modal>
    )
}

export default NewInvoiceForm