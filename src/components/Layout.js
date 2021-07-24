import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="px-3 mx-auto font-sans text-gray-900 layout">
      <div className="flex flex-col min-height-93vh sm:min-h-screen">
        <Navbar />
        <main className="flex-1 h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
