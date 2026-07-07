import Header from "../components/Hero";
import aboutPic from "../assets/Images/Anime/about_cap.jpg";
import aboutPic2 from "../assets/Images/Anime/about_cap2.jpg";

function About() {
  return (
    <div className="flex flex-col">
      <Header headerText="About" />
      <div className="flex flex-row items-center">
        <img
          src={aboutPic}
          alt=""
          className="w-1/4 object-cover rounded-full m-10"
        />
        <div className="flex flex-col mx-10">
          <h3 className="text-center my-10 ">About the designer:</h3>
          <p className="mx-2">
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
      <div className="flex flex-row items-center mb-10">
        <div className="flex flex-col mx-10 w-3/4">
          <h3 className="text-center my-10 ">Work with me!</h3>
          <p className="mx-2">
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
        <div className="aspect-[3/4] w-1/3 m-10">
          <img
            src={aboutPic2}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
