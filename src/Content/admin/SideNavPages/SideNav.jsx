import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
