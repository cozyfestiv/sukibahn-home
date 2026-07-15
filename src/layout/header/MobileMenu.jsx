import { useRef, useEffect } from "react";
import NavLinks from "./NavLinks";

export default function MobileMenu({
  showMenu,
  setShowMenu,
  selected,
  toggleSelected,
}) {
  const mobileMenuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowMenu]);

  return (
    showMenu && (
      <div
        ref={mobileMenuRef}
        className="fixed top-20 bg-bg left-0 w-full flex flex-col items-center gap-10 p-5 text-xl z-50 border-2 border-red-1"
      >
        <NavLinks
          setShowMenu={setShowMenu}
          selected={selected}
          toggleSelected={toggleSelected}
        />
      </div>
    )
  );
}
