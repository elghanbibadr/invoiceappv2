import React, { useState } from 'react'
import Card from '../../ui/Card'

import InvoiceStatus from '../../ui/InvoiceStatus'
import DeleteInvoiceCard from '../../ui/DeleteInvoiceCard';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button'


const flexStyle = "flex items-center"

const EditOrDeleteInvoiceBox = ({ id, subId, status }) => {
    const [modalOpen, setIsModalOpen] = useState(false)


    console.log(status)
    const deleteInvoice = async () => {
        setIsModalOpen(true)

    };


    return (
        <>
            {modalOpen && <Modal setIsOpen={setIsModalOpen}>
                <DeleteInvoiceCard setIsOpen={setIsModalOpen} subId={subId} id={id} />
            </Modal>}
            <Card className="mt-5 flex justify-between items-center">
                <div className={flexStyle}>
                    <p className='mr-7'>Status</p>
                    <InvoiceStatus status={status} />
                </div>
                <div className={flexStyle}>
                    <Button className="bg-darkBlue mr-3" >Edit</Button>
                    <Button onClick={deleteInvoice} className="bg-paleRed" >Delete</Button>
                    {status === "pending" && <Button className="bg-paleCyan" >Marke as Paid</Button>}                </div>
            </Card>
        </>
    )
}

export default EditOrDeleteInvoiceBox