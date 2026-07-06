import comingSoon from "../assets/Images/Anime/coming_soon.jpg";
import Header from "../assets/Components/Header";

function Portfolio() {
  return (
    <div className="flex flex-col">
      <Header headerText="Portfolio" />
      <h1 className="text-6xl font-bold uppercase tracking-normal">
        Coming Soon!
      </h1>
      <img
        src={comingSoon}
        alt="Sukhibahn Logo"
        className="mx-80 mb-20 motion-translate-y-loop-[10%] motion-duration-[1s] motion-ease-smooth rounded-full "
      />
      <p className="text-3xl mb-10 text-red-1">STUDIO</p>
    </div>
  );
}

export default Portfolio;
