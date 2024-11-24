import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/homepage/homepage";
import Shop from "../components/shop/shop";
import Cart from "../cart";
import ItemShop from "../components/itemShop/itemShop";

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
    {
        path: "shop/:movieId",
        element: <ItemShop />,
    },
    {
        path: "shop/page/:number",
        element: <Shop />,
    },
]);

export default route;
