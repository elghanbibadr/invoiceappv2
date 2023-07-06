import React from 'react'
import Card from '../../ui/Card'
import InvoiceStatus from '../../ui/InvoiceStatus'
const EditOrDeleteInvoiceBox = () => {
    return (
        <Card className="mt-5 flex justify-between items-center">
            <p>Status</p>
            <InvoiceStatus />
        </Card>
    )
}

export default EditOrDeleteInvoiceBox