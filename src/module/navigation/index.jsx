import { useState } from "react";
import logo_fongo from "../../assets/logo-fongo.png";
import { Fade } from "react-awesome-reveal";
import Btn from "../../components/button";

const Navigation = () => {
  const [isScrolling, setIsSrolling] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 25 ? setIsSrolling(true) : setIsSrolling(false);
    if (window.scrollY > 25) {
      setIsMobileMenu(false);
    }
  });

  // window.addEventListener("click", (e) => {
  //   if (e.target !== e.currentTarget) {
  //     setIsMobileMenu((e) => !e);
  //     console.log(isMobileMenu);
  //   }
  // });

  return (
    <nav
      id="nav"
      className={` ${
        isScrolling
          ? "border-b-prim z-50  border-opacity-30 bg-filter_main2 anim-nav"
          : ""
      } fixed delay-[0.025s] top-0 left-0 w-full  flex justify-between items-center px-5 py-4 md:px-10 lg:px-20`}
    >
      {/* logo */}
      <a href="/" className="">
        <div className="logo-wrapp relative cursor-pointer flex justify-center items-end   h-7 md:h-16 lg:h-12">
          <div className="h-full ">
            <img className="h-full" src={logo_fongo} alt="" />
          </div>
          <div className="absolute text-[0.50rem] left-2 -bottom-[0.20rem] text-white  font-thin md:left-4 md:text-xs">
            Fongolab
          </div>
        </div>
      </a>

      {/* menu */}
      <div className="menu hidden md:block">
        <ul className="flex gap-8">
          <li className=" ">
            <Fade direction="right">
              <a
                href="#Apropos"
                id=""
                className=" option text-xs  text-white hover:text-prim "
              >
                A Propos
              </a>
            </Fade>
          </li>
          <li className=" ">
            <Fade direction="right">
              <a
                href="#Services"
                className=" option text-xs  text-white hover:text-prim "
              >
                Services
              </a>
            </Fade>
          </li>
          <li className=" ">
            <Fade direction="right">
              <a
                href="#"
                className=" option text-xs  text-white hover:text-prim "
              >
                Blog
              </a>
            </Fade>
          </li>
          <li className=" ">
            <Fade direction="right">
              <a
                href="#Contact"
                className=" option text-xs  text-white hover:text-prim "
              >
                Contact
              </a>
            </Fade>
          </li>
        </ul>
      </div>

      {/* btn mobile */}
      <div
        onClick={() => {
          setIsMobileMenu((e) => !e);
        }}
        className=" p-2  cursor-pointer hambourg md:hidden"
      >
        <span
          className={`${
            isMobileMenu ? "-rotate-45  translate-y-[0.45rem]  " : ""
          } block w-[30px] transition rounded-xl h-[3px] bg-prim mb-[0.40rem] `}
        ></span>
        <span
          className={`${
            isMobileMenu ? "hidden" : "block"
          } w-[20px] rounded-xl h-[3px] bg-prim mb-[0.40rem]`}
        ></span>
        <span
          className={`${
            isMobileMenu ? "w-[30px] rotate-45 " : "w-[27px]"
          }  block  rounded-xl h-[3px] -translate-y-[0.10rem]  bg-prim`}
        ></span>
      </div>

      {/* Menu mobile */}
      <div
        id="moda-menu"
        className={`${
          isMobileMenu ? " opacity-100  " : "opacity-0 pointer-events-none  "
        } duration-500  absolute top-[3.3rem] flex  flex-col justify-center items-center  right-0 w-full h-[40vh] py-6`}
      >
        <div className="space-y-4 w-full h-full flex justify-center items-center flex-col absolute top-0 left-0 gap-4 ">
          <ul className="text-center text-white space-y-4">
            <li>
              <a href="#Apropos">A Propos</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          {/* Btn */}
          <a href="https://tally.so/r/woMM2b">
            <Btn className="bg-main text-white" titre="Devenez member" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
