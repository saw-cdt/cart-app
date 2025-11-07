import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </>
  );
};
