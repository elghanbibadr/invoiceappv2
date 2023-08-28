import React from 'react'
import IconLeftArrow from "../../../public/assets/icon-arrow-left.svg"
import { Link } from 'react-router-dom'
import Modal from '../ui/Modal'


const NewInvoiceForm = () => {
    return (
        <Modal>
            <div className='bg-secondaryColor overflow-y-scroll px-6 pt-20 h-full md:w-1/2 left-10'>
                <Link to="/home" className='flex mb-10 cursor-pointer  md:hidden items-center'>
                    <img src={IconLeftArrow} alt="left arrow icon" />
                    <p className='font-bold mx-3'>Go Back</p>
                </Link>

                {/*------------ FORM ------- */}
                <h4 className='text-2xl md:text-3xl'>New Invoice</h4>
                {/* ----bill form ----- */}
                <form >
                    <h6 className='text-accentColor my-6 font-bold'> Bill From</h6>
                    {/* input field */}
                    <div className="form-inputField">
                        <label htmlFor="street">Street address</label>
                        <input type="text" name="street" id="street" />
                    </div>
                    {/* gridx3 */}
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField col-span-2 md:col-span-1">
                            <label htmlFor="postcode">Post Code</label>
                            <input type="text" name="postcode" id="postcode" />
                        </div>
                    </div>
                    <h6 className='text-accentColor my-6 font-bold'> Bill To</h6>
                    {/* input field */}
                    <div className="form-inputField ">
                        <label htmlFor="ClientName">Client's Name</label>
                        <input type="text" name="clientName" id="clientName" />
                    </div>
                    {/* input field */}
                    <div className="form-inputField ">
                        <label htmlFor="ClientEmail">Client's Email</label>
                        <input type="text" name="clientEmail" id="clientEmail" />
                    </div>
                    {/* input field */}
                    <div className="form-inputField ">
                        <label htmlFor="ClientName">Client's Name</label>
                        <input type="text" name="clientName" id="clientName" />
                    </div>
                    {/* input field */}
                    <div className="form-inputField">
                        <label htmlFor="clientstreet">Street address</label>
                        <input type="text" name="clientstreet" id="clientstreet" />
                    </div>
                    {/* gridx3 */}
                    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="clientcountry">Country</label>
                            <input type="text" name="clientcountry" id="clientcountry" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField">
                            <label htmlFor="clientcity">City</label>
                            <input type="text" name="clientcity" id="clientcity" />
                        </div>
                        {/* input field */}
                        <div className="form-inputField col-span-2 md:col-span-1">
                            <label htmlFor="clientpostcode">Post Code</label>
                            <input type="text" name="clientpostcode" id="clientpostcode" />
                        </div>
                    </div>
                    {/* date picker */}
                    <div class="relative max-w-sm">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                    </div>                </form>
            </div>
        </Modal>
    )
}

export default NewInvoiceForm