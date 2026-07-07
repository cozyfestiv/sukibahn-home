import Hero from "../components/Hero";
import aboutPic from "../assets/Images/Anime/about_cap.jpg";
import aboutPic2 from "../assets/Images/Anime/about_cap2.jpg";

function About() {
  return (
    <div className="flex flex-col">
      <Hero headerText="About" />
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src={aboutPic}
          alt=""
          className="m-10 px-10 object-cover aspect-[4/3] lg:aspect-[3/4] rounded-full  lg:w-1/4 lg:px-0 lg:mt-15 lg:px-0"
        />
        <div className="flex flex-col px-10">
          <h3 className="text-3xl lg:text-[50px] text-center my-10 ">
            About the designer:
          </h3>
          <p className="mx-2 text-xl lg:text-base ">
            I feel that I am a woman who has worn many hats in her lifetime and
            I always identified with the misfits, the sukeban of Japan. I
            initially started my education as an art student focusing on fine
            art and printmaking at Millersville College of Art and Design. While
            making my way through art school I received my first job as a line
            cook for a highly regarded fine-dining restaurant in Lancaster, PA,
            and I discovered my passion for cooking. After only a few years in
            the industry and becoming disenfranchised with the life of a
            struggling artist, I quickly rose to the rank of sous-chef. While
            working as a sous-chef, I simultaneously took up both nannying and
            working as a doula for expectant mothers. I was able to parlay those
            personal connections into working as a highly sought-after personal
            chef when I moved to Philadelphia.
          </p>
        </div>
      </div>
      <div className="flex flex-col items- lg:flex-row items-center mb-20">
        <div className="flex flex-col w-full px-10 lg:w-3/4">
          <h3 className="text-3xl lg:text-[50px] text-center my-10 ">
            Work with me!
          </h3>
          <p className="mx-2 text-xl lg:text-base">
            Like many in the service industry, I was blindsided by the pandemic.
            Unable to work in-person due to COVID-19, I refocused my attention
            to renovating my newly purchased home. I found that throughout much
            of the projects that my husband and I were working on, that
            designing and everything that it encompasses allowed me an artistic
            outlet that I neglected for years. I discovered that I was able to
            incorporate my art training into redesigning my home, that I had a
            knack for tile work, bold color usage, a love for antique furniture,
            and a unique consideration for the practicality of interior design
            while living in one's home. After a major bathroom renovation I
            decided, "I can do this!" I quickly achieved my interior design
            certification from Moore College of Art and Design while finishing
            my bachelor of arts degree from Millersville College.
          </p>
        </div>
        <div className="aspect-[4/3] w-full px-10 lg:px-0 lg:w-1/3 m-10 order-first lg:aspect-[3/4] lg:order-last lg:mt-15">
          <img
            src={aboutPic2}
            alt=""
            className="w-full h-full object-cover rounded-full "
          />
        </div>
      </div>
    </div>
  );
}

export default About;
