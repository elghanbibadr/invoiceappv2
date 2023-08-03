import React from 'react'
import Card from '../../ui/Card'
import InvoiceStatus from '../../ui/InvoiceStatus'
import Button from '../../ui/Button'
const flexStyle = "flex items-center"

const EditOrDeleteInvoiceBox = () => {
    return (
        <Card className="mt-5 flex justify-between items-center">
            <div className={flexStyle}>
                <p className='mr-7'>Status</p>
                <InvoiceStatus status="draft" />
            </div>
            <div className={flexStyle}>
                <Button className="bg-darkBlue mr-3" >Edit</Button>
                <Button className="bg-paleRed" >Delete</Button>
            </div>
        </Card>
    )
}

export default EditOrDeleteInvoiceBox