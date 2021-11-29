import HomePage from "./pages/Home/HomePage";
import AddProduct from "./pages/AddProduct/AddProduct";
import StatsPage from "./pages/Statistics/StatsPage";
import ShopStats from "./pages/Statistics/ShopStats";

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
    },
    ,
    {
        component: <ShopStats />,
        path: '/shopstats'
    }

];