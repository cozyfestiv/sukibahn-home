<nav className="bg-bgtext-white p-4">
  <div className="flex justify-between">
    <Link to="/">
      <img
        src={iconLogo}
        alt="Sukhibahn Icon Logo"
        className="h-20 self-beginning"
      />
    </Link>
    <ul className="flex self-center space-x-4 font-bnfatporn text-red-2">
      <li>
        <Link
          to="/portfolio"
          className="pb-1 border-b-0 border-white border-opacity-0 hover:text-white hover:border-b-2 hover:transition-all hover:duration-300 focus:border-b-2 focus:border-red-2"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="pb-1 border-b-0 border-white border-opacity-0 hover:text-white hover:border-b-2 hover:transition-all hover:duration-300 focus:border-b-2 focus:border-red-2"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="pb-1 border-b-0 border-white border-opacity-0 hover:text-white hover:border-b-2 hover:transition-all hover:duration-300 focus:border-b-2 focus:border-red-2"
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
</nav>;
