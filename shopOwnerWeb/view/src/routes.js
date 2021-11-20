import HomePage from "./pages/Home/HomePage";
import SignInPage from "./pages/SignInPage";

export default [

    {
        component: <HomePage />,
        path: '/'
    }
    ,
    {
        component: <SignInPage />,
        path: '/signin'
    }


];