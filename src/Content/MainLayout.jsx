import Footer from "./Footer/Footer";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
