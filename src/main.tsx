import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./routes/layout.tsx";
import ErrorPage from "./routes/error.tsx";

import About from "./routes/about.tsx";
import Index from "./routes/index.tsx";

import "@root/i18n.ts";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
