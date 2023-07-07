import React, { useState } from 'react'
import checkIcon from "../../../public/assets/icon-check.svg"
import Card from './Card'

const dropDownItems = [
    { id: "1", text: "Draft" },
    { id: "2", text: "Pending" },
    { id: "3", text: "Paid" }

]
const DropDown = () => {
    const [activeBox, SetActiveBox] = useState(null)

    const handleOptionSelected = (boxId) => {
        SetActiveBox(boxId)
    }

    return (
        <>
            <h4>Filter by status</h4>
            <Card className="w-fit pr-14">
                {dropDownItems.map(({ id, text }) => {
                    return <div onClick={() => handleOptionSelected(id)} key={id} className='flex items-center mb-4'>
                        <span className={`h-4 w-4  rounded-sm inline-flex justify-center items-center ${activeBox === id ? ' bg-accentColor' : 'bg-secondaryColor'} `}>
                            {activeBox === id && <img src={checkIcon} />}
                        </span>
                        <p className='font-bold ml-2 capitalize'>{text}</p>
                    </div>
                })}
            </Card>
        </>
    )
}

export default DropDown