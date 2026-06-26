import roundLogo from "../assets/Logo/roundlogo-l.png";

function Home() {
  return (
    <div className="flex flex-col">
      <div>
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
        <hr className="border-red-2 border-40" />
        <hr className="border-bg border-4" />
        <hr className="border-red-2 border-80" />
        <hr className="border-bg border-4" />
      </div>
      <h1 className="text-6xl font-bold uppercase tracking-normal">
        Coming Soon!
      </h1>
      <img src={roundLogo} alt="Sukhibahn Logo" className=" md:mx-20" />
      <p className="text-3xl mt-4 text-red-1">STUDIOS</p>
    </div>
  );
}

export default Home;
