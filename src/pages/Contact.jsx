import roundLogo from "../assets/Logo/roundlogo-l.png";
import Header from "../assets/Components/Header";

function Contact() {
  return (
    <div className="flex flex-col">
      <Header headerText="Contact" />
      <h1 className="text-6xl font-bold uppercase tracking-normal">
        Coming Soon!
      </h1>
      <img src={roundLogo} alt="Sukhibahn Logo" className=" mx-40" />
      <p className="text-3xl mb-10 text-red-1">STUDIO</p>
    </div>
  );
}

export default Contact;
