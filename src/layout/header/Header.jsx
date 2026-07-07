import Nav from "./Nav";
import { Link } from "react-router-dom";
import iconLogo from "../../assets/Logo/Icon/horizlogo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 px-5 flex w-full flex-wrap justify-between items-center border-b">
      <Link to="/">
        <img
          src={iconLogo}
          alt="Sukhibahn Icon Logo"
          className="h-20 self-beginning"
        />
      </Link>

      <Nav />
    </header>
  );
}
