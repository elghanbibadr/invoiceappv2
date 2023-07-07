import React from 'react'
import DropDown from '../../../ui/DropDown'
import Button from "../../../ui/Button"

const FilterInvoicesBar = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h2>Invoices</h2>
                <p>There are 4 total invoices</p>
            </div>
            <div className='flex'>
                <DropDown />
                <Button className="bg-accentColor" >
                    New Invoice
                </Button>
            </div>
        </div>
    )
}

export default FilterInvoicesBar