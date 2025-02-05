import { Outlet } from "react-router-dom";
import SideNav from "./SideNavPages/SideNav";
import TopNav from "./TopNAv/TopNav";

function Admin() {
  return (
    <>
      <div className="h-[100px] bg-sky-200">
        <TopNav></TopNav>
      </div>
      <div className="flex h-[calc(100vh-100px)]">
        <div className="w-[200] bg-amber-500">
          <SideNav />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
