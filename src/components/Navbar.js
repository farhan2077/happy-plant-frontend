import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "How", href: "/how", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
              <div className="flex items-center flex-shrink-0">
                <img
                  className="block w-auto h-8 border border-red-500 lg:hidden"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="demo logo"
                />
                <img
                  className="hidden w-auto h-8 border border-red-500 lg:block"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="demo logo"
                />
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-5">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-gray-900"
                          : "text-gray-400 hover:text-gray-900",
                        "px-3 py-2 text-md font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-900",
                    "block px-3 py-2 text-md font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
