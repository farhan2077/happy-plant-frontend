import { Link } from "react-router-dom";

import logoBig from "../assets/logo-big.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <nav className="py-2.5 flex items-center justify-between">
      <Link to="/">
        <img className="w-auto h-10 md:h-12" src={logoBig} alt="Happy Plant" />
      </Link>
      <div className="space-x-5 md:space-x-10">
        {navigation.map((nav) => {
          return (
            <Link
              key={nav.name}
              to={nav.href}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
