import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import route from "./routes/route";
import "./main.scss";
import ShowCase from "./components/showcase";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={route} />
        <ShowCase />
    </StrictMode>
);
