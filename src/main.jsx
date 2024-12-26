import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routerRoute";
import AuthProvider from "./providers/AuthProvider";
import ServiceProvider from "./providers/ServiceProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ServiceProvider>
        <RouterProvider router={router} />
      </ServiceProvider>
    </AuthProvider>
  </StrictMode>
);
