import HomePage from "./pages/Home/HomePage";
import AddProduct from "./pages/AddProduct/AddProduct";
import StatsPage from "./pages/Statistics/StatsPage";
export default [

    {
        component: <HomePage />,
        path: '/'
    }
    ,
    
    {
        component: <AddProduct />,
        path: '/add-product'
    },
    {
        component: <StatsPage />,
        path: '/stats/:id'
    }

];