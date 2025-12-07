
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from './CartSlice';
export default function AddToCart({product}) {
    const dispatch = useDispatch();
    const [qty, setQty]  = useState(1);
    const increment = () => setQty(qty + 1);
    const decrement = () => setQty(qty - 1);

    const handleCart = () =>{
        dispatch(setCart({
            title: product.title,
            price: product.price,
            stock: product.stock,
            image: product.image,
            qty
        }));
    }
    return (
        <div className='space-y-5' >
            <div className='flex gap-4'>
                 <Button onClick={decrement} disabled = {qty === 1} >
                <MinusIcon/>
            </Button>
            <h1 >{qty}</h1>
            <Button onClick={increment} disabled = {qty === product.stock}>
                <PlusIcon/>
            </Button>
            </div>
           
           <Button onClick={handleCart} size="lg" className='bg-green-400' >Add to Cart</Button>
        </div>
    )
}
