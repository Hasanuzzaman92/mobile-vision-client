import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories/Categories";
import CategoryItems from "../Pages/Categories/CategoryItems";
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
           {
            path: '/categories',
            loader: () => fetch('http://localhost:5000/categories') ,
            element: <Categories></Categories>
           },
           {
            path: '/categories/:categoryName',
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.categoryName}`) ,
            element: <CategoryItems></CategoryItems>
           }
        ]
    }
])



export default router;