import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="flex items-center justify-center mb-1 text-gray-900">
      Made with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block w-5 h-5 mx-1 text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
      <span className="mr-1">by</span>
      <Link to="/about" className="relative text-yellow-600">
        <div className="absolute bottom-0 z-0 w-full h-2 border-t-2 border-yellow-400 opacity-40"></div>
        <span className="z-20">some students of ECE-18</span>
      </Link>
    </section>
  );
}
