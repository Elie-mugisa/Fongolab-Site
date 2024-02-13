import { Fade } from "react-awesome-reveal";
import mob_screen from "../../assets/mob_screeno.png";
import onBoard from "../../assets/onBoard.png";
import Versified from "../../assets/verified.svg";
import Btn from "../../components/button";
const Section2 = () => {
  return (
    <div
      id=" section section2"
      className="px-6 w-full py-10 absolute top-0 left-0 flex justify-center items-center flex-col gap-6 md:px-10 lg:px-44"
    >
      <div className="w-full  flex flex-col gap-4  md:flex-row  ">
        {/* Text */}
        <div className="w-full  px-6  flex flex-col justify-center items-center py-8 gap-8 md:py-0 md:items-start  md:w-1/2">
          {/* List */}
          <div className=" mb-4 flex flex-col gap-4 md:mb-10">
            {/* Item1 */}
            <div className="flex gap-4 justify-start items-center">
              <Fade direction="up">
                <img src={Versified} alt="" />
                <p className="text-white text-sm">
                  L'Excellence est notre dévise
                </p>
              </Fade>
            </div>
            {/* Item2 */}
            <div className="flex gap-4 justify-start items-center">
              <Fade direction="up">
                <img src={Versified} alt="" />
                <p className="text-white text-sm">
                  Votre satisfaction, notre priorité
                </p>
              </Fade>
            </div>
            {/* Item3 */}
            <div className="flex gap-4 justify-start items-center">
              <Fade direction="up">
                <img src={Versified} alt="" />
                <p className="text-white text-sm">
                  Votre problème, notre préoccupation
                </p>
              </Fade>
            </div>
          </div>

          {/* head */}
          <div className="space-y-8 ">
            <Fade direction="up">
              <h1 className="text-2xl text-center font-bold text-prim md:text-5xl md:text-start">
                Travail Assidu, Resultat impressionant
              </h1>
            </Fade>
            <Fade direction="up">
              <p className="text-center font-thin text-white text-opacity-50 text-sm md:text-start">
                La diligence dans le travail pour l'excellence de resultat est
                notre méthode, nous croyons au développement atteint à travers
                des actions réalistes. Nous y contribuons par des réalisations
                des projets à caractère téchnologique
              </p>
            </Fade>
          </div>

          {/*  Btn get Started */}
          <Fade direction="up">
            <a href="https://tally.so/r/woMM2b">
              <Btn titre="Commençons" />
            </a>
          </Fade>
        </div>

        {/* image */}
        <div className="w-full pl-16  relative flex justify-center items-center image p-2 md:justify-end md:w-1/2 md:pl-1">
          <Fade direction="up">
            <img className="" src={onBoard} alt="" />
          </Fade>
          <Fade duration={2000}>
            <img
              src={mob_screen}
              alt=""
              className="absolute -top-5 -left-16 lg:top-32 lg:-left-20 lg:-right-44"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Section2;
