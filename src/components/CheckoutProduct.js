import Image from "next/image";
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({ product }) => {

    const dispatch = useDispatch();
    const {id,title,price,description,category,image, hasPrime, rating} = product;


    const addItemToBasket = () => {
        dispatch(addToBasket(product));
    }

    const removeItemToBasket = () => {
        dispatch(removeFromBasket({ id }));
    }

    return(
        <div className="grid grid-cols-5">
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i) => <StarIcon key={i} className="h-5 text-yellow-500"/>)}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <p>{`$${price}`}</p>
                {
                    hasPrime && (
                        <div className="flex items-center space-x-2">
                            <img 
                                src="/prime.png" 
                                alt="Prime Icon" 
                                loading="lazy"
                                className="w-12"
                            />
                            <p className="text-xs text-gray-500">Free next day Delivery</p>
                        </div>
                    )
                }
            </div>
            
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button mt-auto" onClick={addItemToBasket}>Add To Basket</button>
                <button className="button mt-auto" onClick={removeItemToBasket}>Remove To Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;