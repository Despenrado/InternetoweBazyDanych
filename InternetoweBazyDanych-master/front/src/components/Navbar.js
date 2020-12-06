import React from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter } from "react-router-dom";

// Assets
import Logo from "../images/logo.svg";

const Menu = ({ items }) => {
  return (
    <ul className={"nav__menu"}>
      {items.map((data, index) => {
        return <MenuItem key={index} data={data} />;
      })}
    </ul>
  );
};

function logout() {
  console.log("Log out");
  localStorage.clear();

  fetch("http://0.0.0.0:3102/api/logout", {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(body)
  });
  //     BrowserRouter.cookies.remove();

  //    document.cookie = "crosscountrytoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
const MenuItem = ({ data }) => {
  if (data.logout != 1) {
    return (
      <li className={"menu__item"}>
        <a href={data.url} className={"menu__item--a"}>
          <p className={"menu__item--text"}>{data.name}</p>
        </a>
      </li>
    );
  } else {
    return (
      <li className={"menu__item"}>
        <a onClick={logout} href={data.url} className={"menu__item--a"}>
          <p className={"menu__item--text"}>{data.name}</p>
        </a>
      </li>
    );
  }
};

const Navbar = ({ items }) => {
  return (
    <nav className={"nav"}>
      <a href={"/"} className={"nav--logo-a"}>
        <img className={"nav--logo"} src={Logo} alt={"Website logo"} />
      </a>
      <Menu items={items} />
    </nav>
  );
};

export default Navbar;
