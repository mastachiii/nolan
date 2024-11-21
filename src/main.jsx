import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import route from "./routes/route";
import "./main.scss";
import makeMovieObj from "./scripts/api";

makeMovieObj('807')

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={route} />
    </StrictMode>
);
