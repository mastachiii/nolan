import { createBrowserRouter } from "react-router-dom";
import Homepage from "../homepage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
]);

export default route;
