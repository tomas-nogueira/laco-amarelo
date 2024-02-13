import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AboutMe from "./pages/AboutMe.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato.jsx";
import GaleriaPage from "./pages/GaleriaPage.jsx";

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
        element: <Produtos />,
    },
    {
        path: "/contato",
        element: <Contato />,
    },
    {
        path: "/galeria",
        element: <GaleriaPage/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
