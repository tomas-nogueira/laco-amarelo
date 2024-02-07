import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutMe from "./pages/AboutMe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Produtos from "./pages/Produtos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sobremim",
        element: <AboutMe />,
    },
    {
        path: "/produtos",
        element: <Produtos />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
