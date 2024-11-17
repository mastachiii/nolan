import { createBrowserRouter } from "react-router-dom";
import Homepage from "../homepage";
import Shop from "../shop";
import Cart from "../cart";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "shop/cart",
        element: <Cart />,
    },
]);

export default route;
