import roundLogo from "../assets/Logo/roundlogo.png";

function Home() {
  return (
    <div className="p-8 flex flex-col">
      <h1 className="text-3xl font-bold text-brown-1">Coming Soon!</h1>
      <img src={roundLogo} alt="Sukhibahn Logo" className=" mx-20" />
      <p className="mt-4 text-brown-1">STUDIOS</p>
    </div>
  );
}

export default Home;
