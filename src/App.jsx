import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import iconLogo from "../src/assets/Logo/Icon/horizlogo.png";
import logoFooter from "../src/assets/Logo/roundlogo-s.png";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-bgtext-white p-4">
        <div className="flex justify-between">
          <img
            src={iconLogo}
            alt="Sukhibahn Icon Logo"
            className="h-20 self-beginning"
          />
          <ul className="flex self-center space-x-4 font-bnfatporn text-red-2">
            <li>
              <Link to="/portfolio" className="hover:text-blue-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-blue-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr className="mx-40" />
      <div className="flex flex-col items-center m-5">
        <img src={logoFooter} alt="" className="w-42 mt-5" />
        <p className="uppercase text-red-1 text-xl">Studio</p>
        <nav className="bg-bgtext-white p-4">
          <div className="flex justify-between">
            <ul className="flex self-center space-x-4 font-poppins text-sm text-black">
              <li>
                <Link to="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <p className="text-xs">&#169; Copyright 2026 - Sukibahn Studio </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
