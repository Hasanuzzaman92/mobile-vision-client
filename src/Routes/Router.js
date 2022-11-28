import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories/Categories";
import CategoryItems from "../Pages/Categories/CategoryItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: '/home',
            element: <Home></Home>
           },
           {
            path: '/blogs',
            element: <Blog></Blog>
           },
           {
            path: '/signup',
            element: <SignUp></SignUp>
           },
           {
            path: '/login',
            element: <LogIn></LogIn>
           },
           {
            path: '/categories',
            loader: () => fetch('https://mobile-vision-server.vercel.app/categories') ,
            element: <Categories></Categories>
           },
           {
            path: '/categories/:categoryName',
            loader: ({params}) => fetch(`https://mobile-vision-server.vercel.app/categories/${params.categoryName}`) ,
            element: <PrivateRoutes><CategoryItems></CategoryItems></PrivateRoutes>
           }
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            
        ]
    }
])



export default router;