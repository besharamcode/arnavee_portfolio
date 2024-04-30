import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div id="home" className=" min-h-[100vh] pt-1 hide-scrollbar">
      <section className="md:px-[6vw] sm:px-[4vw] px-[1rem] flex justify-between flex-col-reverse md:flex-row h-full md:mt-40 mt-36">
        <div className="w-full md:w-2/3 flex flex-col justify-center -mt-12">
          <h1 className="text-[6vw] leading-[7vw] md:text-[4vw] md:leading-[4.5vw] font-bold font-poppins">
            <div>Welcome to</div> Dr. Arnavee&apos;s Psychology Practice
          </h1>
          <p className="sm:w-3/4 w-full mt-2">
            Welcome to Dr. Arnavee&apos;s Portfolio Empowering You to Live a
            Balanced Life Are you struggling with anxiety, depression, or
            relationship issues? I&apos;m here to help you navigate life&apos;s
            challenges and achieve mental well-being. Let&apos;s embark on this
            journey together.
          </p>
          <a href="#menu" className="w-fit ">
            <button className="font-medium bg-[#ae77af] text-white px-5 py-2 rounded-full mt-6 hover:outline hover:outline-[var(--prm-clr)] hover:bg-transparent hover:text-[#ae77af]">
              Contact Me
            </button>
          </a>
        </div>
        <div className="md:pb-0 pb-8">
          <img
            className="bg-[#ae77af] md:w-[25rem] w-[75%] mx-auto md:mx-[unset] mb-12 rounded-full"
            src={heroImg}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
