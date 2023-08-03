import InvoiceStatus from "./InvoiceStatus"
import Card from "./Card"
import { Link } from "react-router-dom"
const Invoice = ({ data: { id, clientName, createdAt, total, status } }) => {
    return (
        <Link to="/details">
            <Card className=' w-[80%] mx-auto my-5  grid grid-cols-2 grid-rows-[1fr_30px_1fr] md:grid-cols-5 md:items-center md:grid-rows-1 md:h-fit   hover:border border-paleCyan '>
                <h3><strong className='text-paleCyan text-md '>#</strong>{id}</h3>
                <p className=' justify-self-end md:justify-self-start '>{clientName}</p>
                <p className=' col-span-2 md:col-span-1 '>{createdAt}</p>
                <h2 className='self-end md:self-center '>{total}$</h2>
                <InvoiceStatus className="justify-self-end md:justify-self-start" status={status} />
            </Card>
        </Link>
    )

}

export default Invoice