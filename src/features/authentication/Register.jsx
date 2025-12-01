
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router"
import { Formik } from "formik"
import * as Yup from 'yup'
import { LockKeyhole, LockKeyholeOpenIcon, } from "lucide-react"
import { useState } from "react"
import { useUserRegisterMutation } from "./authApi"
import toast from "react-hot-toast"
import { Spinner } from "../../components/ui/spinner"

const loginSchema = Yup.object({
  username: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(3).required()
})

export default function Register() {
  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className="p-5">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register to your account</CardTitle>
          <CardDescription>
            Enter your email below to register to your account
          </CardDescription>
          <CardAction>
            <Button onClick={() => nav(-1)} variant="link">Login</Button>
          </CardAction>
        </CardHeader>
        <CardContent>

          <Formik
            initialValues={{
              username: '',
              email: '',
              password: ''
            }}
            onSubmit={async (val) => {
                  try {
                   await userRegister(val).unwrap();
                   toast.success('Registration successful');
                   nav(-1);
                  } catch (err) {
                    console.log(err.data.data);
                  }
            }}
            validationSchema={loginSchema}
          >
            {({ values, handleChange, errors, touched, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">

                   <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      name='username'
                      onChange={handleChange}
                      value={values.username}
                      id="username"
                      type="username"
                      placeholder="Jhone Doe"

                    />
                    {errors.username && touched.username && <p className="text-red-500">
                      {errors.username}
                    </p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name='email'
                      onChange={handleChange}
                      value={values.email}
                      id="email"
                      type="email"
                      placeholder="m@example.com"

                    />
                    {errors.email && touched.email && <p className="text-red-500">
                      {errors.email}
                    </p>}
                  </div>


                  <div className='w-full max-w-xs space-y-2'>
                    <Label>Password</Label>
                    <div className='relative'>
                      <Input
                        onChange={handleChange}
                        value={values.password}
                        type={show ? 'text' : 'password'}
                        name='password' placeholder='******' className='pr-9' />

                      <Button
                        type='button'
                        onClick={() => setShow(!show)}
                        variant='ghost'
                        size='icon'
                        className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                      >

                        {show ? <LockKeyholeOpenIcon /> : <LockKeyhole />}


                        <span className='sr-only'>Show password</span>
                      </Button>
                    </div>
                    {errors.password && touched.password && <p className="text-red-500">
                      {errors.password}
                    </p>}
                  </div>

                </div>

                {isLoading ? <Button size="sm" variant="outline" disabled className="w-full mt-5">
                  <Spinner />
                  Submit
                </Button> : <Button type="submit" className="w-full mt-5">
                  Register
                </Button>}

              </form>
            )}
          </Formik>

        </CardContent>

      </Card>
    </div >
  )
}