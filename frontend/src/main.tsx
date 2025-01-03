import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/index.tsx";
import { CatalogPage } from "./pages/catalog/index.tsx";
import { CategoryProducts } from "./pages/category-products/index.tsx";
import { ProductDetailsPage } from "./pages/product/index.tsx";
import { OrdersPage } from "./pages/orders/index.tsx";
import { CartProvider } from "./context/cart-context.tsx";
import { DealsPage } from "./pages/deals/index.tsx";

import "@/styles/globals.css";
import { LoginLayout } from "./layouts/loginLayout.tsx";
import { LoginPage } from "./pages/auth/login/index.tsx";
import { RegisterPage } from "./pages/auth/register/index.tsx";
import { UserProvider } from "./context/user-context.tsx";
import { DashBoard } from "./pages/admin/DashBoard.tsx";

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
        element: <CatalogPage />,
      },
      {
        path: "/category/:slug",
        element: <CategoryProducts />,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailsPage />,
      },
      {
        path: "/deals",
        element: <DealsPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/admin/dashboard",
        element: <DashBoard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
