import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Page } from "@components/Page.tsx";
import Loading from "./routes/loading.tsx";
import Layout from "./routes/layout.tsx";
import Error from "./routes/error.tsx";
import About from "./routes/about.tsx";
import Index from "./routes/index.tsx";

import "@root/i18n.ts";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Page content={<Error />} title="Error" />,
        children: [
            {
                index: true,
                element: <Page content={<Index />} title="Portfolio: Home" />,
            },
            {
                path: "/about",
                element: <Page content={<About />} title="Portfolio: About" />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.Suspense
        fallback={<Page content={<Loading />} title="Portfolio: Loading..." />}
    >
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </React.Suspense>,
);
