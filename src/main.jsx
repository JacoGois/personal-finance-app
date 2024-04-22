import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Dashboard } from "./Pages/Dashboard";
import { MainLayout } from "./Layouts/MainLayout";
import { Customer } from "./Pages/Customer";
import { ThemeProvider } from "./Contexts/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: "/customer",
    element: (
      <MainLayout>
        <Customer />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: <div>Rota não encontrada</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
