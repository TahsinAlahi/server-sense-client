import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter([{
 path: '/',
 element: <AppLayout />
}])

export default router