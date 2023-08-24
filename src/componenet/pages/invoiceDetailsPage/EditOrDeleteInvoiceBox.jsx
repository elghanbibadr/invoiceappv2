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

const EditOrDeleteInvoiceBox = ({ id, subId, status }) => {
    const [modalOpen, setIsModalOpen] = useState(false)


    const deleteInvoice = async () => {
        setIsModalOpen(true)

    };
    // console.log(id.trim() === "B5lKEnTSROtTLKjURiLn")


    const handleMarkAsPaidInvoice = async () => {
        // console.log(Invoiceid === "qTOu1KFtzp72MxJtatgo")
        // Invoiceid.trim();
        const docRef = doc(db, 'invoices', 'qTOu1KFtzp72MxJtatgo');

        try {
            await updateDoc(docRef, {
                'data.status': 'paid' // Update the status field inside the data object
            });

            console.log('Invoice status updated to "paid"');
        } catch (error) {
            console.error('Error updating invoice status:', error);
        }
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
                    {status === "pending" && <Button onClick={handleMarkAsPaidInvoice} className="bg-paleCyan" >Marke as Paid</Button>}                </div>
            </Card>
        </>
    )
}

export default EditOrDeleteInvoiceBox