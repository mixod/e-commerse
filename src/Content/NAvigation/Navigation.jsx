import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
