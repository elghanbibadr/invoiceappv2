import React from 'react'
import Card from '../../ui/Card'
import InvoiceStatus from '../../ui/InvoiceStatus'
import { Button } from '../../ui/Button'
const EditOrDeleteInvoiceBox = () => {
    return (
        <Card className="mt-5 flex justify-between items-center">
            <div className='flex items-center'>
                <p className='mr-7'>Status</p>
                <InvoiceStatus />
            </div>
            <div className='flex items-center'>
                <Button text='edit' className="bg-darkBlue mr-3" />
                <Button text='delete' className="bg-paleRed" />
            </div>
        </Card>
    )
}

export default EditOrDeleteInvoiceBox