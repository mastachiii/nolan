import { createBrowserRouter } from "react-router-dom";
import Homepage from "../homepage";
import Shop from "../shop";
import Cart from "../cart";
import Foo from "../foo";
import ItemShop from "../components/itemShop";

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
]);

export default route;
