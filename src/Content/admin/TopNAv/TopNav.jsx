import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"homeAdmin"}>Home</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TopNav;
