import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logoBig from "../assets/logo-big.svg";
import logoSmall from "../assets/logo-small.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "How", href: "/how" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="p-2.5 flex items-start lg:items-center justify-between">
      {/* desktop start */}
      <div>
        <div className="hidden lg:block">
          <Link to="/">
            <img className="w-auto h-12" src={logoBig} alt="Happy Plant" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <Link to="/">
            <img className="w-auto h-12" src={logoSmall} alt="Happy Plant" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-end">
        <div className="hidden space-x-10 lg:inline-flex">
          {navigation.map((nav) => {
            return (
              <Link
                to={nav.href}
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
        {/* desktop end */}

        {/* mobile start */}
        <div className="flex flex-col items-end lg:hidden">
          {mobileNavOpen ? (
            <XIcon
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="inline-block w-8 h-8 mt-3"
              aria-hidden="true"
            />
          ) : (
            <MenuIcon
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="inline-block w-8 h-8 mt-3"
              aria-hidden="true"
            />
          )}
          {mobileNavOpen ? (
            <div className="z-10 inline-flex flex-col items-end mt-3 space-y-3 lg:hidden">
              {navigation.map((nav) => {
                return (
                  <Link
                    onClick={() => setMobileNavOpen(false)}
                    to={nav.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {nav.name}
                  </Link>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* mobile end */}
      </div>
    </nav>
  );
}
