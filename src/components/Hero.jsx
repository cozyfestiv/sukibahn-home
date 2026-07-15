function Header({ headerText }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <h1 className="uppercase mx-auto text-white tracking-wide text-6xl drop-shadow-lg">
          {headerText}
        </h1>
      </div>
      <div className="relative z-0">
        <hr className="border-red-2 border-1" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-2" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-3" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-4" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-6" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-8" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-10" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-20" />
        <hr className="border-bg border-4" />
      </div>
    </div>
  );
}

export default Header;
