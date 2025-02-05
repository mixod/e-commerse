import { Outlet } from "react-router-dom";
import SideNav from "./SideNavPages/SideNav";

function Admin() {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  );
}

export default Admin;
