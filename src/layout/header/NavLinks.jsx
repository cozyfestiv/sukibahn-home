import { NavLink } from "react-router-dom";

export default function NavLinks({ setShowMenu, selected, toggleSelected }) {
  function onClickHandler(link) {
    setShowMenu(false);
    toggleSelected(link);
  }

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={() => onClickHandler(link.label.toLowerCase())}
          className={`border-b-2 ${
            selected === link.label.toLowerCase()
              ? "border-red-2"
              : "border-transparent"
          }`}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}
