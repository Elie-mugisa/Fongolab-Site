import { Fade } from "react-awesome-reveal";
import Input from "../../components/input";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import linkedin from "../../assets/linkedin.svg";
import phone from "../../assets/phone.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="relative bg-slate-950 flex flex-col py-10 px-4 lg:px-20 lg:flex-row"
    >
      <div className="w-full lg:w-1/2">
        {/* avatar */}
        <div className="avatar  flex justify-center items-center flex-col flex-1 lg:justify-start lg:items-start lg:pr-52 lg:flex-row gap-2 ">
          {/* profil */}
          <div className="w-full flex justify-center items-center lg:items-start lg:justify-start lg:w-[10%]">
            <div className="h-10 w-10 rounded-full bg-slate-900"></div>
          </div>
          {/* text */}
          <div className="text-center lg:text-start">
            <Fade direction="up">
              <h2 className="text-white text-sm font-bold">Gray Salonga</h2>
            </Fade>
            <p className="text-[0.60rem]  text-prim">Co-Founder</p>
            <Fade direction="up">
              <p className="text-[0.65rem] text-center pt-2 text-white  text-opacity-50 lg:text-start lg:text-xs">
                L'initiateur et co-fondateur du club fongolab <br />
                Ceo chez{" "}
                <a className="text-prim ml-2 " href="https://skynet-burundi.bi">
                  SkyNet Burundi
                </a>
              </p>
            </Fade>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 flex flex-row-reverse py-4 justify-between  items-center flex-4  ">
          {/* Links */}
          <div className="p-4 w-1/2  h-[30vh] flex flex-col justify-between items-center ">
            {/* menu */}
            <div className=" menu w-full ">
              <ul className="flex flex-col items-end gap-2 lg:gap-6 lg:flex-row">
                <li className=" ">
                  <Fade direction="right">
                    <a
                      href="#Apropos"
                      id=""
                      className="  text-xs   text-white hover:text-prim "
                    >
                      A Propos
                    </a>
                  </Fade>
                </li>
                <li className=" ">
                  <Fade direction="right">
                    <a
                      href="#Services"
                      className=" option text-xs   text-white hover:text-prim "
                    >
                      Services
                    </a>
                  </Fade>
                </li>
                <li className=" ">
                  <Fade direction="right">
                    <a
                      href="#"
                      className=" option text-xs   text-white hover:text-prim  "
                    >
                      Blog
                    </a>
                  </Fade>
                </li>
                <li className=" ">
                  <Fade direction="right">
                    <a
                      href="#Contact"
                      className=" option text-xs   text-white hover:text-prim "
                    >
                      Contact
                    </a>
                  </Fade>
                </li>
              </ul>
            </div>

            {/* Send mail */}
            <Fade direction="up">
              <Input
                display="hidden lg:flex"
                titre="Envoyer"
                className="w-full lg:block"
              />
            </Fade>
          </div>

          {/* Social Media */}
          <div className="h-full w-1/2  flex flex-col justify-start items-start gap-3">
            {/* Facebook */}
            <div className="flex items-center gap-2">
              {/* Icon */}
              <Fade direction="up">
                <div className="h-8 w-8 flex justify-center items-center  rounded-full ">
                  <img src={facebook} alt="" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-xs font-thin text-white">fongolab</p>
                </div>
              </Fade>
            </div>
            {/* Twitter */}
            <div className="flex items-center gap-2">
              {/* Icon */}
              <Fade direction="up">
                <div className="h-8 w-8 flex justify-center items-center  rounded-full ">
                  <img src={twitter} alt="" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-xs font-thin text-white">fongolab</p>
                </div>
              </Fade>
            </div>
            {/* WhatsApp */}
            <div className="flex items-center gap-2">
              {/* Icon */}
              <Fade direction="up">
                <div className="h-8 w-8 flex justify-center items-center  rounded-full ">
                  <img src={whatsapp} alt="" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-xs font-thin text-white">
                    +257 66 319 534
                  </p>
                </div>
              </Fade>
            </div>
            {/* Telephone */}
            <div className="flex items-center gap-2">
              {/* Icon */}
              <Fade direction="up">
                <div className="h-8 w-8 flex justify-center items-center  rounded-full ">
                  <img src={phone} alt="" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-xs font-thin text-white">
                    +257 79 882 175 / 66 319 534
                  </p>
                </div>
              </Fade>
            </div>
            {/* Linkedin */}
            <div className="flex items-center gap-2">
              {/* Icon */}
              <Fade direction="up">
                <div className="h-8 w-8 flex justify-center items-center  rounded-full ">
                  <img src={linkedin} alt="" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-xs font-thin text-white">fongolab</p>
                </div>
              </Fade>
            </div>
            {/* Instagram */}
            <div className="flex items-center gap-2">
              {/* Icon */}
              <Fade direction="up">
                <div className="h-8 w-8 flex justify-center items-center  rounded-full ">
                  <img src={instagram} alt="" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-xs font-thin text-white">fongolab</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 pb-1  text-xs text-second text-center flex justify-center items-center absolute bottom-0 left-0  md:py-3">
          &copy; 2024 Fongolab. Tous droits réservés.
        </div>
      </div>

      <div className="w-full h-[60vh] p-1 md:h[50%]  lg:w-1/2">
        {/* iframe */}
        <Fade direction="right">
          <div className="text-xl flex justify-center items-center lg:h-full">
            <iframe
              className="rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15932.043121600575!2d29.3863171!3d-3.3474796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c183ccad02b6bf%3A0x7a12d7b1563b68fc!2sHope%20Africa%20University!5e0!3m2!1sen!2sbi!4v1707816621137!5m2!1sen!2sbi"
              width="600"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Fade>
        {/* Input */}
        <Fade direction="up">
          <Input
            display="flex mt-2 md:items-center md:translate-x-[20%] lg:hidden md:translate-y-14"
            titre="Envoyer"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Footer;
