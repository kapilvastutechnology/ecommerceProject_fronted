import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik"

export default function ProductAddForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Product Create</CardTitle>
      </CardHeader>
      <CardContent>
        <Formik
        initialValues={{
            title:'',
            detail: '',
            price: '',
            category_id: '',
            brand: '',
            image: ''
        }}

        onSubmit={(val)=>{
            console.log(val)
        }}


        >
            {({handleChange, handleSubmit, errors, touched, values, setFieldValue})=>(
        <form
        onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
              onChange={handleChange}
              name= 'title'
              value = {values.title}
                id="title"
                type="text"
                placeholder="Jhon Doe"
              />
              {touched.title && errors.title && <p className="text-red-500" >{errors.title}</p> }
            </div>

            <div className="grid gap-2">
              <Label htmlFor="detail">Detail</Label>
              <textarea
              name = "detail"
              onChange={handleChange}
              value={values.detail}
                id="detail"
                type="text"
                placeholder="detail"
              />
            {touched.detail && errors.detail && <p className="text-red-500" >{errors.detail}</p> }
            </div>

            
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
              name= "price"
              onChange={handleChange}
              value={values.price}
                id="price"
                type="number"
                placeholder="Product price"
              />
            {touched.price && errors.price && <p className="text-red-500" >{errors.price}</p> }
            </div>

            <Select
            name="category_id"
            onValueChange={(val)=>{
                setFieldValue('category_id', val)
            }}
            >
              <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
              <SelectGroup>
             <SelectItem value="food">Food</SelectItem>
             <SelectItem value="clothes">Clothes</SelectItem>
             <SelectItem value="tech">Tech</SelectItem>
             <SelectItem value="jewallery">Jewallery</SelectItem>
             </SelectGroup>
           </SelectContent>
         </Select>


          <Select
          name="brand"
           onValueChange={(val)=>{
                setFieldValue('brand', val)
            }}
          >
              <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a brand" />
              </SelectTrigger>
              <SelectContent>
              <SelectGroup>
             <SelectItem value="addidas">Addidas</SelectItem>
             <SelectItem value="samsung">Samsung</SelectItem>
             <SelectItem value="tanishq">Tanishq</SelectItem>
             <SelectItem value="iphone">Iphone</SelectItem>
             </SelectGroup>
           </SelectContent>
         </Select>


             <div className="grid gap-2">
              <Label htmlFor="image">Select an image</Label>
              <Input
              name="image"
              onChange={handleChange}
              value={values.image}
                id="image"
                type="file"
              />
            {touched.image && errors.image && <p className="text-red-500" >{errors.image}</p> }
            </div>

           <Button type="submit" className="w-full">
          Login
        </Button>
          </div>
        </form>
            )}
        </Formik>
      
      </CardContent>
    </Card>
  )
}
