import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home/Home";


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
        ]
    }
])



export default router;