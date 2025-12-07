import { Card, CardContent, CardHeader, CardDescription, CardTitle, CardFooter } from '@/components/ui/card'
import { base } from '../../app/mainApi'
import { useNavigate } from 'react-router';

export default function ProductCard({product}){
  const nav = useNavigate();
  return (
    
    <Card
    onClick={() => nav(`/products/${product._id}`)}
    className='py-0 sm:flex-row sm:gap-0'>
      <CardContent className='grow-1 px-0'>
        <img
          src={`${base}/${product.image}`}
          alt='Banner'
          className='size-full rounded-l-xl'
        />
      </CardContent>
      <div className='sm:min-w-54'>
        <CardHeader className='pt-6'>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.detail}</CardDescription>
          <CardTitle>Price:{product.price}</CardTitle>
        </CardHeader>
      </div>
    </Card>
   
  )
}

