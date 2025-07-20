import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/alltodos"}>All Todos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
