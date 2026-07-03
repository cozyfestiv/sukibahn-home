import portPic from "../assets/Images/Anime/portfolio_cap.jpg";
import aboutPic from "../assets/Images/Anime/about_cap.jpg";
import contactPic from "../assets/Images/Anime/contact_cap.jpg";

function Home() {
  return (
    <div className="flex flex-col">
      {/* hero card */}
      <div className="relative">
        <div className="absolute inset-0 z-10 flex flex-col justify-center">
          <h1 className="uppercase mx-40">Sukibahn </h1>
          <h1 className="uppercase mx-40 mb-10">Studio </h1>
          <h2 className="mx-40">
            Sukeban  (スケバン) is a Japanese term that translates to
            "delinquent girl" or "boss girl". Sukibahn "Beloved Path"
          </h2>
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
          <hr className="border-red-2 border-40" />
          <hr className="border-bg border-4" />
          <hr className="border-red-2 border-80" />
          <hr className="border-bg border-4" />
        </div>
      </div>
      <div className="w-auto">
        <div className="w-auto p-20 flex flex-row justify-between gap-10">
          <img src={portPic} alt="" className="flex-1 min-w-0 object-cover " />
          <img src={aboutPic} alt="" className="flex-1 min-w-0 object-cover" />
          <img
            src={contactPic}
            alt=""
            className="flex-1 min-w-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
