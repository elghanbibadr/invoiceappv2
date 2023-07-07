import React, { useState } from 'react'
import checkIcon from "../../../public/assets/icon-check.svg"
import Card from './Card'
import arrow from "../../../public/assets/icon-arrow-down.svg"

const dropDownItems = [
    { id: "1", text: "Draft" },
    { id: "2", text: "Pending" },
    { id: "3", text: "Paid" }

]

const DropDown = () => {
    const [activeBox, SetActiveBox] = useState(null)
    const [dropDownCollapsed, setDropDownCollapsed] = useState(false)

    const handleOptionSelected = (boxId) => SetActiveBox(boxId)
    const handleDropDownCollapsed = () => setDropDownCollapsed(prv => !prv)


    return (
        <div className='relative'>
            <div className='flex  items-center ' onClick={handleDropDownCollapsed}>
                <h4 className='cursor-pointer '>Filter by status</h4>
                <img className={`ml-2 mt-1 ${dropDownCollapsed ? "rotate-180" : "rotate-0"} transition-transform duration-300`} src={arrow} alt="arrow icon" />
            </div>
            {dropDownCollapsed && <Card className="w-fit absolute right-2 top-8   pr-14">
                {dropDownItems.map(({ id, text }) => {
                    return <div onClick={() => handleOptionSelected(id)} key={id} className='flex items-center mb-4'>
                        <span className={`h-4 w-4  rounded-sm inline-flex justify-center items-center ${activeBox === id ? ' bg-accentColor' : 'bg-secondaryColor'} `}>
                            {activeBox === id && <img src={checkIcon} />}
                        </span>
                        <p className='font-bold ml-2 capitalize'>{text}</p>
                    </div>
                })}
            </Card>}
        </div>
    )
}

export default DropDown