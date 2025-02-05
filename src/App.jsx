import { Route, Routes } from "react-router-dom";
import MainLayout from "./Content/MainLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Admin from "./Content/admin/Admin";

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
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
