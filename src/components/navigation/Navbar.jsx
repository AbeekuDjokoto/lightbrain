import { Link, NavLink, useLocation } from "react-router-dom";
import { CloseIcon, HamburgerIcon, Logo } from "../../assets/icons/Icons";

import React from "react";
import BaseButton from "../shared/BaseButton";
import { ROUTES } from "../../utils/routes-contants";

const NAVIGATION_ROUTES = [
  { id: 1, route: "Buy", href: "Buy" },
  { id: 2, route: "Rent", href: "Rent" },
  { id: 3, route: "Sell", href: "Sell" },
  { id: 4, route: "Compass Premier", href: "Compass Premier" },
  { id: 5, route: "Mortgage", href: "Mortgage" },
  { id: 6, route: "Real Estate Agents", href: "Real Estate Agents" },
  { id: 7, route: "Feed", href: "Feed" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [openMenu, closeMenu] = React.useState(false);
  return (
    <nav className="py-4">
      <div className="mx-auto flex items-center justify-between w-90 max-w-custom">
        <div className="flex items-center">
          <button
            onClick={() => closeMenu(!openMenu)}
            className="bg-black text-white max-w-10 w-full h-10 xl:hidden flex items-center justify-center"
          >
            <HamburgerIcon />
          </button>

          <NavLink to={ROUTES.HOME}>
            <Logo />
          </NavLink>
        </div>

        {openMenu && (
          <div className="fixed w-full top-0 left-0 bg-white z-[100] h-full">
            <div className="flex justify-between p-6">
              <NavLink to={ROUTES.HOME}>
                <Logo />
              </NavLink>
              <button onClick={() => closeMenu(!openMenu)}>
                <CloseIcon />
              </button>
            </div>
            <ul className="flex flex-col gap-7 p-6 text-base font-medium leading-[22.4px] text-[var(--black)]">
              {NAVIGATION_ROUTES.map((option) => (
                <NavLink
                  onClick={() => closeMenu(!openMenu)}
                  className="grid cursor-pointer hover:text-[#ed3a56]"
                  key={option.id}
                  to={option.href}
                >
                  {option.route}
                </NavLink>
              ))}
            </ul>
          </div>
        )}

        <ul className="xl:flex gap-8 text-base font-medium leading-[22.4px] text-[var(--black)] hidden">
          {NAVIGATION_ROUTES.map((navItem) => {
            return (
              <div key={navItem.id} className="hover:text-[#ed3a56]">
                <Link
                  to={navItem.href}
                  className={`${
                    pathname.endsWith(navItem.href) ? "text-[#ed3a56]" : ""
                  }`}
                >
                  {navItem.href}
                </Link>
              </div>
            );
          })}
        </ul>

        <BaseButton className=" max-w-[120px] h-[40px]">
          Register/Sign In
        </BaseButton>
      </div>
    </nav>
  );
};

export default Navbar;
