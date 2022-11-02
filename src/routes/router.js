import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },

            {
                path: '/checkout/:id',
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders /></PrivateRoute>
            }
        ]
    }

])
export default router;