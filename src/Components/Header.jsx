// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="fixed z-40 font-hind top-0 md:px-[6vw] sm:px-[4vw] px-[1rem] md:pt-8 pt-4 text-text flex justify-between items-center w-full">
      <div>
        <p className="relative font-bold sm:text-[2rem] text-[1.5rem] font-stylish">
          .Arnavee
        </p>
      </div>
      <div className="icons flex gap-3">
        <a
          href="https://www.instagram.com/arnaveeejain/"
          target="_blank"
          rel="noreferrer"
          className="size-10 grid place-items-center text-xl bg-[#ae77af] text-white rounded-full hover:bg-transparent hover:text-[#ae77af] hover:outline hover:outline-[var(--prm-clr)] hover:scale-125 transition-all"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="mailto:jainarnavee@icloud.com"
          target="_blank"
          rel="noreferrer"
          className="size-10 grid place-items-center text-xl bg-[#ae77af] text-white rounded-full hover:bg-transparent hover:text-[#ae77af] hover:outline hover:outline-[var(--prm-clr)] hover:scale-125 transition-all"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=918360219276"
          target="_blank"
          className="size-10 grid place-items-center text-xl bg-[#ae77af] text-white rounded-full hover:bg-transparent hover:text-[#ae77af] hover:outline hover:outline-[var(--prm-clr)] hover:scale-125 transition-all"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      {/* <nav
        id="navbar"
        className="absolute z-10 transition-all -top-[50rem] md:top-[unset] md:static bg-bg md:bg-transparent w-full rounded-md left-1/2 md:translate-x-0 -translate-x-1/2 md:w-fit md:bg-none bg-gradient-to-tl from-black to-btn"
      >
        <ul className="items-center gap-6 md:flex md:items-center md:justify-evenly md:gap-6">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
          ].map((link, i) => {
            return (
              <li
                key={`nav-li-${i}`}
                className="text-center md:text-start md:my-[unset] my-4"
              >
                <a
                  href={link.link}
                  className="uppercase nav-anim relative block px-1 "
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="md:hidden absolute top-[0.4rem] right-[1rem]"
          onClick={() => {
            const navbar = document.getElementById("navbar");
            navbar.classList.add("-top-[50rem]");
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </nav>
      <button
        className="md:hidden bg-transparent border-none relative"
        onClick={() => {
          const navbar = document.getElementById("navbar");
          navbar.classList.remove("-top-[50rem]");
        }}
      >
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </button> */}
    </header>
  );
};

export default Header;
