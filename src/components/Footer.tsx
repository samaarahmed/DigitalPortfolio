import { FaLinkedinIn} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div id="contact" className="flex justify-center items-center text-center py-20 h-auto border-b-[1px] border-b-black ">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
        <a href="https://github.com/samaarahmed?tab=repositories" target="_blank">
                <span className="bannerIcon">
                  <BsGithub />
                </span>
              </a>
              <a
              href="https://www.linkedin.com/in/samaar-ahmed-7a440547/?trk=opento_sprofile_details"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
        </div>
      </div>
      <div>
        <ul className="flex flex-row gap-4 font-titleFont font-medium py-6 overflow-hidden">
        <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            <MdEmail />
            </span>
          </li>

          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              m.samaar@gmail.com
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
            <BsFillTelephoneFill />
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              +46764095103
            </span>
          </li>
        </ul>



      </div>
    </div>
  );
};

export default Footer;