import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const AllServicesPage = lazy(() => import("./pages/AllServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const MyReviewsPage = lazy(() => import("./pages/MyReviewsPage"));
const AddServices = lazy(() => import("./pages/AddServices"));
const MyServicesPage = lazy(() => import("./pages/MyServicesPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: withSuspense(HomePage),
      },
      {
        path: "/login",
        element: withSuspense(LoginPage),
      },
      {
        path: "/register",
        element: withSuspense(RegisterPage),
      },
      {
        path: "/all-services",
        element: withSuspense(AllServicesPage),
      },
      {
        path: "/service/:id",
        element: (
          <ProtectedRoute>{withSuspense(ServiceDetailPage)}</ProtectedRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: <ProtectedRoute>{withSuspense(MyReviewsPage)}</ProtectedRoute>,
      },
      {
        path: "/my-services",
        element: (
          <ProtectedRoute>{withSuspense(MyServicesPage)}</ProtectedRoute>
        ),
      },
      {
        path: "/add-service",
        element: <ProtectedRoute>{withSuspense(AddServices)}</ProtectedRoute>,
      },
    ],
  },
  {
    path: "*",
    element: withSuspense(ErrorPage),
  },
]);

export default router;
