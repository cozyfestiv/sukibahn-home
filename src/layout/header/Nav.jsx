import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleNav = () => setShowMenu(!showMenu);
  const toggleSelected = useCallback((link) => setSelected(link), []);

  return (
    <>
      <nav>
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center gap-5 p-5">
          <NavLinks
            setShowMenu={setShowMenu}
            selected={selected}
            toggleSelected={toggleSelected}
          />
        </div>

        {/* Mobile Nav Toggle Button */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleNav} className="">
            <FontAwesomeIcon
              icon={showMenu ? faX : faBars}
              size={showMenu ? "lg" : "xl"}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        selected={selected}
        toggleSelected={toggleSelected}
      />
    </>
  );
}
