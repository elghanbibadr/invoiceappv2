import React, { useState } from 'react'
import Card from '../../ui/Card'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../../../public/firebase/FirebaseConfig';
import InvoiceStatus from '../../ui/InvoiceStatus'
import DeleteInvoiceCard from '../../ui/DeleteInvoiceCard';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button'
const flexStyle = "flex items-center"

const EditOrDeleteInvoiceBox = ({ id }) => {
    const [modalOpen, setIsModalOpen] = useState(false)

    // const deleteInvoice = async () => {
    //     console.log("let's delete")
    //     // Create a reference to the document you want to delete
    //     const docRef = doc(db, "invoices", id);

    //     // Delete the document
    //     deleteDoc(docRef)
    //         .then(() => {

    //             console.log("Document successfully deleted!");
    //         })
    //         .catch((error) => {
    //             console.error("Error deleting document: ", error);
    //         });
    // }

    const deleteInvoice = () => setIsModalOpen(true)


    return (
        <>
            {modalOpen && <Modal setIsOpen={setIsModalOpen}>
                <DeleteInvoiceCard setIsOpen={setIsModalOpen} />
            </Modal>}
            <Card className="mt-5 flex justify-between items-center">
                <div className={flexStyle}>
                    <p className='mr-7'>Status</p>
                    <InvoiceStatus status="draft" />
                </div>
                <div className={flexStyle}>
                    <Button className="bg-darkBlue mr-3" >Edit</Button>
                    <Button onClick={deleteInvoice} className="bg-paleRed" >Delete</Button>
                </div>
            </Card>
        </>
    )
}

export default EditOrDeleteInvoiceBox