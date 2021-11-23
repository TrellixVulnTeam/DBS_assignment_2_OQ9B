import HomePage from "./pages/Home/HomePage";
import SignInPage from "./pages/SignInPage";
import AddProduct from "./pages/AddProduct/AddProduct";
import StatsPage from "./pages/Statistics/StatsPage";
export default [

    {
        component: <HomePage />,
        path: '/'
    }
    ,
    {
        component: <SignInPage />,
        path: '/signin'
    },
    {
        component: <AddProduct />,
        path: '/add-product'
    },
    {
        component: <StatsPage />,
        path: '/stats'
    }

];