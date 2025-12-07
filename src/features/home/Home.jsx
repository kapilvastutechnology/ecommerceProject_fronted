import { useGetProductsQuery } from '../products/productApi';
import ProductCard from '../products/ProductCard'
export default function Home() {
    const {isLoading, error, data} = useGetProductsQuery();
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <h1 className='text-pink-500' >{error}</h1>
    }
    return (
        <div>
        <h1 className='text-2xl font-bold'>किनमेल उत्पादन</h1>
        <div className='grid grid-cols-4 gap-5'>
        {data.products.map((product) => (
            <ProductCard key={product._id} product={product} />))}
        </div>
        </div>
    )
}
