import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout";
import Home from "./features/home/Home";
import Register from "./features/authentication/Register";
import Login from "./features/authentication/Login";
import AdminPanel from "./features/admin/AdminPanel";
import ProductAddForm from "./features/admin/ProductAddForm";
import ProductEdit from "./features/admin/ProductEdit";
import ProductDetail from "./features/products/ProductDetail";

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
                },

                {
                    path: 'admin-panel',
                    element: <AdminPanel/>
                },

                {
                    path: 'products/:id',
                    element: <ProductDetail/>
                },

                {
                    path: 'product-edit/:id',
                    element: <ProductEdit/>
                },

                {
                    path: 'product-add',
                    element: <ProductAddForm/>
                }
            ]
        }
    ]);
    
    return <RouterProvider router={router} />
}

