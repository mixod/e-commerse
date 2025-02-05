import Footer from "./Footer/Footer";

import { Outlet } from "react-router-dom";
import Navigation from "./NAvigation/Navigation";

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
