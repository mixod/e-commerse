import Search from "antd/es/transfer/search";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <>
      <div className="bg-orange-400 p-5 flex flex-col gap-4">
        <div>
          <ul className="flex max-w-6xl mx-auto justify-evenly">
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
          <div className="max-w-3xl mx-auto">
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              loading
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
