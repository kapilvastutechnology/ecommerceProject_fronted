import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import Register from "./features/authentication/Register";
import Login from "./features/authentication/Login";

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout/>,
            children:[
                {
                    index: true,
                    element: <Home/>
                },

                {
                    path: 'login',
                    element:<Login/>
                },

                {
                    path:'register',
                    element:<Register/>
                }
            ]
        }
    ]);
    
    return <RouterProvider router={router} />
}

