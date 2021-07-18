import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logoBig from "../assets/logo-big.svg";
import logoSmall from "../assets/logo-small.svg";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "How", href: "/how", current: false },
  { name: "About", href: "/about", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-gray-900 focus:outline-non">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:justify-between">
              <div className="flex flex-shrink-0">
                <Link to="/">
                  <img
                    className="block w-auto h-12 lg:hidden"
                    src={logoSmall}
                    alt="Happy Plant"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="hidden w-auto h-12 lg:block"
                    src={logoBig}
                    alt="Happy Plant"
                  />
                </Link>
              </div>
              <div className="hidden -mr-2 sm:block">
                <div className="flex space-x-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-md"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex flex-row px-3 py-2 font-medium text-gray-500 hover:text-gray-900 text-md"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
