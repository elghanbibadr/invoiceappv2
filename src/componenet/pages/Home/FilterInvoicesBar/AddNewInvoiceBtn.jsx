import React from 'react'
import IconPlus from "../../../../../public/assets/icon-plus.svg"
import Button from "../../../ui/Button"

const AddNewInvoiceBtn = () => {
    return (
        <Button className="bg-accentColor ml-4 flex items-center" >
            <span className='bg-white mr-2 h-6 w-6 inline-flex rounded-full justify-center items-center'>
                <img className='h-2' src={IconPlus} alt="icon plus" />
            </span>
            <p> New Invoice</p>
        </Button>
    )
}

export default AddNewInvoiceBtn