import React, { useState } from 'react'
import Card from '../../ui/Card'

import InvoiceStatus from '../../ui/InvoiceStatus'
import DeleteInvoiceCard from '../../ui/DeleteInvoiceCard';
import Modal from '../../ui/Modal';
import { db } from '../../../../public/firebase/FirebaseConfig';
import { updateDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import Button from '../../ui/Button'


const flexStyle = "flex items-center"

const EditOrDeleteInvoiceBox = ({ docId, id, status }) => {
    const [modalOpen, setIsModalOpen] = useState(false)
    console.log(docId)

    const deleteInvoice = async () => {
        setIsModalOpen(true)

    };


    const handleMarkAsPaidInvoice = async () => {

        const docRef = doc(db, 'invoices', docId);

        try {
            await updateDoc(docRef, {
                'status': 'paid' // Update the status field inside the data object
            });

        } catch (error) {
            console.error('Error updating invoice status:', error);
        }
    };



    return (
        <>
            {modalOpen && <Modal setIsOpen={setIsModalOpen}>
                <DeleteInvoiceCard setIsOpen={setIsModalOpen} docId={docId} id={id} />
            </Modal>}
            <Card className="mt-5 flex justify-between items-center">
                <div className={flexStyle}>
                    <p className='mr-7'>Status</p>
                    <InvoiceStatus status={status} />
                </div>
                <div className={flexStyle}>
                    <Button className="bg-darkBlue mr-3" >Edit</Button>
                    <Button onClick={deleteInvoice} className="bg-paleRed" >Delete</Button>
                    {status === "pending" && <Button onClick={handleMarkAsPaidInvoice} className="bg-paleCyan" >Marke as Paid</Button>}                </div>
            </Card>
        </>
    )
}

export default EditOrDeleteInvoiceBox