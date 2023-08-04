import React from 'react'
import DropDown from '../../../ui/DropDown'
import AddNewInvoiceBtn from './AddNewInvoiceBtn'
import CurrrentInvoicesCount from './CurrrentInvoicesCount'

const FilterInvoicesBar = () => {
    return (
        <div className='flex justify-between '>
            <CurrrentInvoicesCount />
            <div className='flex items-center'>
                <DropDown />
                <AddNewInvoiceBtn />
            </div>
        </div>
    )
}

export default FilterInvoicesBar