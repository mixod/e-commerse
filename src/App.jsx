import { Route, Routes } from "react-router-dom";
import MainLayout from "./Content/MainLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Admin from "./Content/admin/Admin";
import Dashboard from "./Content/admin/Pages/Dashboard";
import Shop from "./Content/admin/Pages/Shop";
import HomeAdmin from "./Content/admin/TopNAv/Pages/HomeAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shop" element={<Shop />} />
          <Route path="homeAdmin" element={<HomeAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
