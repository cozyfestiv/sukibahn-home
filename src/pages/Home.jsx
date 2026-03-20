import roundLogo from "../assets/Logo/roundlogo-l.png";

function Home() {
  return (
    <div className="p-8 flex flex-col">
      <h1 className="text-6xl font-bold uppercase tracking-normal">
        Coming Soon!
      </h1>
      <img src={roundLogo} alt="Sukhibahn Logo" className=" mx-20" />
      <p className="text-3xl mt-4 text-red-1">STUDIOS</p>
    </div>
  );
}

export default Home;
