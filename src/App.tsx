import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home/Home";
import CurrencyInfo, {
    loader as currencyInfoLoader,
} from "./pages/CurrencyInfo/CurrencyIno";
import Root from "./pages/Root/Root";
import Error404 from "./pages/Error404/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader,
            },
            {
                path: "/coins/:currencyId",
                element: <CurrencyInfo />,
                loader: currencyInfoLoader,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
