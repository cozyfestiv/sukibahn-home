import portPic from "../assets/Images/Anime/portfolio_cap.jpg";
import aboutPic from "../assets/Images/Anime/about_cap.jpg";
import contactPic from "../assets/Images/Anime/contact_cap.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col">
      {/* hero card */}
      <div className="relative">
        <div className="absolute inset-0 z-10 flex flex-col justify-center">
          <h1 className="uppercase mx-40 text-white">Sukibahn </h1>
          <h1 className="uppercase mx-40 mb-10 text-white">Studio </h1>
          <h2 className="mx-40 text-white">
            Sukeban (スケバン) is a Japanese term that translates to "delinquent
            girl" or "boss girl". Sukibahn "Beloved Path"
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
          <div className="relative flex-1 min-w-0 group">
            <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={portPic}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-0 bg-black/20 p-10 px-10 w-full rounded-b-full ">
                <h3 className="text-white italic text-3xl text-left mb-3 font-bnrascal font-bold">
                  Portfolio
                </h3>
              </div>
            </Link>
          </div>
          <div className="relative flex-1 min-w-0 group">
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={aboutPic}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-0 bg-black/20 p-10 px-10 w-full rounded-b-full">
                <h3 className="text-white italic text-3xl text-left mb-3 font-bnrascal font-bold">
                  About
                </h3>
              </div>
            </Link>
          </div>
          <div className="relative flex-1 min-w-0 group">
            <Link to="contact" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={contactPic}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-0 bg-black/20 p-10 px-10 w-full rounded-b-full">
                <h3 className="text-white italic text-3xl text-left mb-3 font-bnrascal font-bold">
                  Contact
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
