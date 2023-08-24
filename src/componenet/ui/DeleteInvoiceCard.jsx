import React, { useContext } from 'react'
import Card from './Card'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../../public/firebase/FirebaseConfig';
import { AppContext } from '../../store/AppContext';

const DeleteInvoiceCard = ({ setIsOpen, id, subId }) => {

    const navigate = useNavigate()
    const { invoices } = useContext(AppContext)

    console.log(invoices)
    const handleCancel = () => setIsOpen(false)

    console.log(id)
    const deleteInvoice = async () => {
        console.log("let's delete")
        // Create a reference to the document you want to delete
        const docRef = doc(db, "invoices", id);
        console.log(docRef)
        // Delete the document
        deleteDoc(docRef)
            .then(() => {

                console.log("Document successfully deleted!");
                navigate('/home')
            })
            .catch((error) => {
                console.error("Error deleting document: ", error);
            });
    }

    return (
        <Card className="z-[4444444444]  ">
            <h1 className=''>
                Confirm Deletion
            </h1>
            <p className='text-paleText my-3'>Are you sure you want to delete invoice {subId}? This action cannot be undone.</p>
            <Button onClick={handleCancel} className="bg-darkBlue">Cancel</Button>
            <Button onClick={deleteInvoice} className="bg-paleRed mx-3">Delete</Button>
        </Card>
    )
}

export default DeleteInvoiceCard