import React from 'react'
import DropDown from '../../../ui/DropDown'
import AddNewInvoiceBtn from './AddNewInvoiceBtn'
import CurrrentInvoicesCount from './CurrrentInvoicesCount'

const FilterInvoicesBar = () => {
    return (
        <div className='flex justify-between w-[80%] mx-auto'>
            <CurrrentInvoicesCount />
            <div className='flex items-center'>
                <DropDown />
                <AddNewInvoiceBtn />
            </div>
        </div>
    )
}

export default FilterInvoicesBar