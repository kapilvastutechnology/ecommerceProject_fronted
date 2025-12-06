import { useParams } from "react-router";
import { useGetProductQuery } from "../products/productApi";
import ProductEditForm from "./ProductEditForm";

export default function ProductEdit() {
    const {id} = useParams();
    const {isLoading, error, data} = useGetProductQuery(id);
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <h1 className='text-pink-500' >{error}</h1>
    }
    console.log(data);
    return (
        <div>
            <h1 className='text-2xl font-bold' >Product Edit</h1>
            <ProductEditForm product={data.data} />
        </div>
    )
}
