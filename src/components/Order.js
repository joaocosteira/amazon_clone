import moment from "moment";

const Order  = ({ order }) => {

    const { id,amount,amountShipping,images,timestamp,items } = order;

    return(
        <div className="relative border rounded-md">
            <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">Total</p>
                    <p>{`$${amount} - Next Day Delivery $${amountShipping}`}</p>
                </div>

                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{items.length} Items</p>

                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">ORDER # {id}</p>
            </div>


            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-y-auto">
                    {images.map( image => (
                        <img src={image} alt="" className="h-20 sm:h-32 object-contain "/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Order;
