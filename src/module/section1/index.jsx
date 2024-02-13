import logo_fongo from "../../assets/logo.svg";
import ordi from "../../assets/ordi.png";
import show_puce from "../../assets/show_puce.svg";
import statistic from "../../assets/Statistique-removebg-preview.png";
import student from "../../assets/student-removebg-preview.png";
import annee from "../../assets/Annee-removebg-preview.png";
import { Fade } from "react-awesome-reveal";

const Section1 = () => {
  return (
    <div
      id=" section section1"
      className="px-6 bg-filter_main absolute top-0 w-full h-screen flex justify-center items-center flex-col gap-6 md:px-32 lg:px-64 md:h-[50vh] lg:h-screen"
    >
      {/* HEADING */}
      <div className="relative -mt-24 space-y-4  lg:bg-transparent md:mt-0">
        {/* floating card1 */}
        <div className="h-64 w-64 p-6 absolute top-24 -left-44 flex justify-end items-end">
          <img
            className="h-full rotate-45  opacity-5"
            src={logo_fongo}
            alt=""
          />
          ;
        </div>

        {/* floating card2 */}
        <div className="h-48 w-48 p-6 absolute -top-64 left-72 flex justify-end items-end">
          <img
            className="h-full -rotate-45  opacity-5"
            src={logo_fongo}
            alt=""
          />
          ;
        </div>

        {/* floating card3 */}
        <div className=" h-52 w-52 p-6 absolute -top-32 -right-44">
          <img className="h-full opacity-25" src={ordi} alt="" />
        </div>

        {/* floating card4 */}
        <div className=" h-28 w-28 p-6 absolute top-52 -left-44">
          <img className="h-full opacity-5" src={show_puce} alt="" />
        </div>

        {/* text */}
        <Fade direction="up" duration={400}>
          <h1 className="text-3xl font-bold text-center text-white md:text-3xl lg:text-5xl -mt-24  lg:mt-0">
            Un Tech-Lab basé et concentré sur le{" "}
            <span className="text-second  font-extrabold md:text-3xl lg:text-4xl  ">
              NUMERIQUE
            </span>
          </h1>
        </Fade>
        <div>
          <div className="mt-10 flex  justify-center gap-1 items-center   lg:gap-2">
            <Fade direction="left">
              <p className="text-center text-[0.65rem] font-thin text-white  text-opacity-60 md:text-xs">
                {" "}
                Apprenez le numérique
              </p>
            </Fade>
            <div className="h-[0.20rem] w-[0.20rem]  rounded-full bg-prim md:w-2 md:h-2"></div>
            <Fade direction="down">
              <p className="text-center text-[0.65rem]  font-thin text-white  text-opacity-60 md:text-xs">
                Partagez vos expériences
              </p>
            </Fade>
            <div className="h-[0.20rem] w-[0.20rem]  rounded-full bg-prim md:w-2 md:h-2"></div>
            <Fade direction="right">
              <p className="text-center text-[0.65rem]  font-thin text-white  text-opacity-60 md:text-xs">
                Contribuez aux projets
              </p>
            </Fade>
          </div>

          <p className="text-center text-sm mt-2 text-second font-semibold ">
            Numérisez votre entreprise
          </p>

          <p className="text-center font-semibold text-sm  text-prim mt-4 ">
            Le club Fongolab est le choix parfait!
          </p>
        </div>
      </div>

      {/* Send mail */}
      {/* <Input /> */}

      {/* done works */}
      <div
        id="barro"
        className="py-4 px-1 gap-2 absolute bottom-4 text-filter_white  w-[90vw] shadow-lg shadow-main rounded-md flex justify-center items-start md:bottom-8 lg:bottom-28 md:p-8 lg:w-[75vw] lg:items-center"
      >
        {/* box1 */}
        <div className=" w-[35%]   flex flex-col justify-center items-center   gap-2 md:justify-end md:px-8 md:flex-row md:gap-4">
          <Fade direction="left">
            <div className="h-8 w-8 flex justify-center items-center bg-[rgba(246,0,172,0.1)]  rounded-md lg:h-16 lg:w-16 ">
              <img className="w-full h-auto" src={student} alt="" />
            </div>
          </Fade>
          {/* text */}
          <div className="w-full flex flex-col justify-center items-center md:items-start  md:w-[70%]">
            <Fade direction="left">
              <p className="text-lg font-bold text-center md:text-xl">
                <span className="text-xs text-prim md:text-2xl">+</span>207
              </p>
            </Fade>
            <Fade direction="left">
              <p className="text-[0.60rem] font-thin text-center md:text-start md:text-xs">
                Etudiants déjà formés
              </p>
            </Fade>
          </div>
        </div>

        {/* box2 */}
        <div className="w-[35%]  p-1 flex flex-col  justify-center items-center border-r-2 border-l-2 border-filter_white  gap-2 md:border-r-4 md:border-l-4 md:gap-4 md:px-8 md:flex-row  md:w-[70%]">
          {/* wrapp & text */}
          <div className=" flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10">
            {/* Icon */}
            <div className="w-[20%]">
              <Fade direction="up" childClassName=" -ml-2 md:ml-0">
                <div className="h-8 w-8 bg-[rgba(246,0,172,0.1)] rounded-md lg:h-16 lg:w-16">
                  <img className="w-full h-auto" src={statistic} alt="" />
                </div>
              </Fade>
            </div>
            <div className="w-full  flex flex-col justify-center items-center md:items-start  ">
              <Fade direction="up">
                <p className="text-lg font-bold text-center md:text-xl">
                  <span className="text-xs text-prim md:text-2xl">+</span>13
                </p>
              </Fade>
              <Fade direction="up">
                <p className="text-[0.60rem] font-thin text-center md:text-start md:text-xs">
                  Projets réalisés
                </p>
              </Fade>
            </div>
          </div>
        </div>

        {/* box3 */}
        <div className="w-[35%]  flex flex-col justify-end items-center  gap-2 md:px-8 md:flex-row">
          {/* text */}
          <Fade direction="right">
            <div className="h-8 w-8 bg-[rgba(246,0,172,0.1)] rounded-md lg:h-16 lg:w-16">
              <img className="w-full h-auto" src={annee} alt="" />
            </div>
          </Fade>
          <div className="w-full flex flex-col justify-center items-center md:items-start md:w-[70%]">
            <Fade direction="right">
              <p className="text-lg font-bold text-center md:text-xl">
                <span className="text-xs text-prim md:text-2xl">+</span>5
              </p>
            </Fade>
            <Fade direction="right">
              <p className="text-[0.60rem] font-thin text-center md:text-start md:text-xs">
                Années d'existence
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
