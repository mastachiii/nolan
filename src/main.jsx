import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import route from "./routes/route";
import { makeMovieObj } from "./scripts/api";

makeMovieObj("872585-oppenheimer");

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={route} />
    </StrictMode>
);
