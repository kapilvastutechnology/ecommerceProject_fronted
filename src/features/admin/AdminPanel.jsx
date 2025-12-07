import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { useGetProductsQuery } from '../products/productApi';
import { base } from '../../app/mainApi';
import { EditIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { RemoveProduct } from './RemoveProduct';

export default function AdminPanel(){
    const nav = useNavigate();
    const {isLoading, error, data} = useGetProductsQuery();
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <h1 className='text-pink-500' >{error}</h1>
    }
    console.log(data);
  return (
<div>
    <div className='p-5 flex justify-end' >
        <Button
        onClick={()=> nav('/product-add')}
        className="bg-green-400" >Product Add</Button>
    </div>
    <div className='p-5 grid grid-cols-3 gap-5' >

{data.products.map((product) => (
<Card key={product._id}  className='max-w-md pt-0'>
      <CardContent className='px-0'>
        <img
          src={`${base}/${product.image}`}
          alt='product.image'
          className='aspect-video h-70 rounded-t-xl object-cover'
        />
      </CardContent>
      <CardHeader>
        <CardTitle>{product._id}</CardTitle>
        <CardTitle>{product.title}</CardTitle>
        <CardTitle>{product.createdAt}</CardTitle>
        <CardDescription>{product.detail}</CardDescription>
          <CardDescription>Price:{product.price}</CardDescription>
      </CardHeader>
      <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
        <Button onClick={() => nav(`/product-edit/${product._id}`)} ><EditIcon/></Button>
        <RemoveProduct id = {product._id} />
      </CardFooter>
    </Card>
        ))}
    </div>
</div>

  )
}


