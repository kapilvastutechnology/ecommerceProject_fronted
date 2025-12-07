import { useParams } from "react-router";
import { useGetProductQuery } from "./productApi";
import { base } from "../../app/mainApi";
import AddToCart from "../carts/AddToCart";

export default function ProductDetail() {
    const {id} = useParams();
    const {isLoading, error, data} = useGetProductQuery(id);
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <h1 className='text-pink-500' >{error.data?.message}</h1>
    }
   console.log(data)
    return (
        <div className="container max-w-5xl mx-auto gap-5 grid grid-cols-2" >
           <div>
            <img src={`${base}/${data.product.image}`} alt="" />
           </div>
           <div className="space-y-4" >
            <h1>{data.product.title}</h1>
            <p className="text-zinc-500" >Stock:{data.product.stock}</p>
            <p className="text-zinc-500" >Price:{data.product.price}</p>
            <p>{data.product.detail}</p>
            <hr />
            <div>
                <AddToCart product={data.product} />
            </div>
           </div>
        </div>
    )
}
