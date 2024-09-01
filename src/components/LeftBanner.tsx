import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import { BsGithub } from "react-icons/bs";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer","An Aspiring Full Stack Developer", ".Net Web Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Samaar Ahmed</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider text-justify">
        A frontend developer with experience of working on full stack projects. I have worked with React, JavaScript, and TypeScript on the frontend, and C# .NET on the backend. During my internship, I gained valuable experience in collaboration and adaptive development by working in an agile environment. Currently, I am working as frontend developer at Edusurferz Educational Consultant (EEC), where I am responsible for SEO and making a new student data platform for them.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/samaar-ahmed-7a440547/?trk=opento_sprofile_details"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/samaarahmed?tab=repositories" target="_blank">
                <span className="bannerIcon">
                  <BsGithub />
                </span>
              </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLS ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;