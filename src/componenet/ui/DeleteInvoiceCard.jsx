import React from 'react'
import Card from './Card'
import Button from './Button'

const DeleteInvoiceCard = ({ setIsOpen }) => {

    const handleCancel = () => setIsOpen(false)

    return (
        <Card className="z-[4444444444]  ">
            <h1 className=''>
                Confirm Deletion
            </h1>
            <p className='text-paleText my-3'>Are you sure you want to delete invoice #UP6544? This action cannot be undone.</p>
            <Button onClick={handleCancel} className="bg-darkBlue">Cancel</Button>
            <Button className="bg-paleRed mx-3">Delete</Button>
        </Card>
    )
}

export default DeleteInvoiceCard