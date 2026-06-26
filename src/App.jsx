import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import iconLogo from "../src/assets/Logo/Icon/horizlogo.png";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-bgtext-white p-4">
        <div className="flex justify-between">
          <img
            src={iconLogo}
            alt="Sukhibahn Icon Logo"
            className=" md:mx-20 h-20"
          />
          <ul className="flex self-center space-x-4 font-bnfatporn text-red-2">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-blue-300">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
