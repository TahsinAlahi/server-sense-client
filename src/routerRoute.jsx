import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AllServicesPage from "./pages/AllServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import MyReviewsPage from "./pages/MyReviewsPage";
import AddServices from "./pages/AddServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetailPage />,
      },
      {
        path: "/my-reviews",
        element: <MyReviewsPage />,
      },
      {
        path: "/add-service",
        element: <AddServices />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/all-services",
        element: <AllServicesPage />,
      },
    ],
  },
]);

export default router;
