import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function AppLayout() {
  console.log(document.cookie);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
