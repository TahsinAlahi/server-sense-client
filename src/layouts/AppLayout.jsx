import { Outlet } from "react-router"
import NavBar from "../components/NavBar"


function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default AppLayout