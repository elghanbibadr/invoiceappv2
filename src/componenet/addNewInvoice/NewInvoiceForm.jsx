import React from 'react'
import IconLeftArrow from "../../../public/assets/icon-arrow-left.svg"
import { Link } from 'react-router-dom'
import Modal from '../ui/Modal'


const NewInvoiceForm = () => {
    return (
        <Modal>
            <div className='bg-secondaryColor px-6 pt-20 h-full md:w-1/2 left-10'>
                <Link to="/home" className='flex mb-10 cursor-pointer  md:hidden items-center'>
                    <img src={IconLeftArrow} alt="left arrow icon" />
                    <p className='font-bold mx-3'>Go Back</p>
                </Link>

                {/*------------ FORM ------- */}
                <h4 className='text-2xl md:text-3xl'>New Invoice</h4>
                {/* ----bill form ----- */}
                <h6 className='text-accentColor my-6 font-bold'> Bill From</h6>
            </div>
        </Modal>
    )
}

export default NewInvoiceForm