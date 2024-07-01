import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Catalog } from "./components/ui/catalog.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "@/styles/globals.css";
import { HomePage } from "./pages/homePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
