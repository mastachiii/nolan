import { createBrowserRouter } from "react-router-dom";
import Homepage from "../homepage";
import Shop from "../shop";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
]);

export default route;
