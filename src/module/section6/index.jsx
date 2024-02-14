import Tech from "../../components/cards/technologies/tech";
import Progress_b_Tools from "../../components/progress-barr";
import Btn from "../../components/button/index";
import { Fade } from "react-awesome-reveal";
import pic_ui from "../../assets/ui-removebg-preview.png";
import pic_server from "../../assets/server-removebg-preview.png";
import pic_api from "../../assets/Api-removebg-preview.png";
import pic_modelisation from "../../assets/modelisation-removebg-preview.png";

const Section6 = () => {
  return (
    <div className="absolute bg-slate-950 w-full h-full top-0 left-0  flex flex-col px-4 py-0  gap-x-4  bg-opacity-30 justify-center items-center lg:h-screen  lg:flex-row lg:py-6 ">
      <div className="flex flex-grow   flex-col justify-evenly gap-4 w-full   md:gap-6 lg:h-screen lg:w-1/2 ">
        {/* header */}
        <div className=" px-10 flex flex-col gap-4 lg:px-20">
          <Fade direction="up">
            <h1 className="text-center text-white text-2xl font-bold lg:text-start lg:text-4xl">
              Gagnez le temps, Devenez un des notre!
            </h1>
          </Fade>
          <Fade direction="up">
            <p className="text-center text-white text-xs text-opacity-50 font-thin lg:text-start">
              En nous rejoignant, vous serez à mesure de bien vous en sortir sur
              les grandes lignes suivantes du Developement
            </p>
          </Fade>
        </div>

        {/* Technologies */}
        <div className="w-full flex flex-col gap-4 justify-center px-4  lg:pr-5 lg:pl-20">
          {/* bar-tech1 */}
          <Fade direction="up">
            <Tech
              span="UI/UX"
              titre="Developement"
              para="Module pour"
              span_para="Le Front-End"
              path={pic_ui}
            />
          </Fade>
          <Fade direction="up">
            <Tech
              span="Back-End"
              titre="Developement"
              para="Module pour la partie"
              span_para="Back-End"
              path={pic_server}
            />
          </Fade>
          <Fade direction="up">
            <Tech
              span="APIs"
              titre="Developement"
              para="Module la conception des"
              span_para="APIs"
              path={pic_api}
            />
          </Fade>
          <Fade direction="up">
            <Tech
              span="Modélisation"
              titre="Developement"
              para="Module la conception et l'implementation de la"
              span_para="Base de Donnée"
              path={pic_modelisation}
            />
          </Fade>
        </div>
      </div>

      {/* descri tech */}
      <div className="w-full flex-grow    py-4  p-4 flex flex-col items-start   lg:h-screen lg:w-1/2  lg:p-8">
        {/* progress-bar */}
        {/* wrapp */}
        <div className=" flex flex-col justify-start items-start h-full w-full p-4">
          <div className="h-[70%] bg p-4 -ml-8 gap-[8rem]  w-20  flex justify-start  items-center flex-col relative md:pl-0 md:gap-[6.5rem] lg:mb-1 lg:h-[55vh] lg:gap-[5rem] ">
            {/* LINE */}
            <div className="absolute right-[47.5%] top-0 bg-slate-800 h-full  w-1 rounded-xl lg:h-[50vh]"></div>

            {/* icon */}
            <Fade direction="up">
              <Progress_b_Tools
                titre="Développement Web"
                descri="Le développement web consiste à créer des sites web ou des applications web en utilisant des langages de programmation, des technologies et des frameworks pour concevoir, développer et déployer des solutions interactives accessibles via un navigateur web."
              />
            </Fade>
            <Fade direction="up">
              <Progress_b_Tools
                titre="Développement Mobile"
                descri="Le développement mobile consiste à créer des applications spécifiquement conçues pour les appareils mobiles tels que les smartphones et les tablettes, en utilisant des langages de programmation et des frameworks adaptés pour offrir une expérience utilisateur optimale sur ces plateformes."
              />
            </Fade>
            <Fade direction="up">
              <Progress_b_Tools
                titre="Développement Desk-Top"
                descri="Le développement desktop consiste à créer des applications logicielles conçues pour être utilisées sur des ordinateurs de bureau ou des ordinateurs portables, en utilisant des langages de programmation adaptés pour fonctionner sur les systèmes d'exploitation Windows, macOS ou Linux."
              />
            </Fade>
          </div>
        </div>

        {/* Team */}
        <div className="py-2 px-6   w-full flex flex-shrink flex-col gap-1 items-start ">
          <Fade direction="up">
            <p className=" text-xs text-prim ">Faire partie de notre équipe</p>
          </Fade>
          <Fade direction="up">
            <p className="text-xs text-white opacity-50 font-thin">
              Rejoignez notre équipe de développeurs pour repousser les limites
              de l'innovation et transformer ensemble le futur numérique !
            </p>
          </Fade>

          <div className="flex flex-wrap gap-2 py-4">
            <Fade direction="right">
              <div className="h-8 w-8 flex justify-center items-center border border-prim rounded-full bg-slate-700">
                D
              </div>
            </Fade>

            <Fade direction="right">
              <div className="h-8 w-8 flex justify-center items-center border border-prim rounded-full bg-slate-700">
                C
              </div>
            </Fade>
            <Fade direction="right">
              <div className="h-8 w-8 flex justify-center items-center border border-prim rounded-full bg-slate-700">
                L
              </div>
            </Fade>
            <Fade direction="right">
              <div className="h-8 w-8 flex justify-center items-center border border-prim rounded-full bg-slate-700">
                V
              </div>
            </Fade>
            <Fade direction="rigth">
              <div className="h-8 w-8 flex justify-center items-center border border-prim rounded-full bg-slate-700">
                J
              </div>
            </Fade>
            <Fade direction="rigth">
              <div className="h-8 w-8 flex justify-center items-center border border-prim rounded-full bg-slate-700">
                A
              </div>
            </Fade>
            <Fade direction="rigth">
              <div className="h-8 w-8 flex justify-center items-center border border-prim rounded-full bg-slate-700">
                E
              </div>
            </Fade>
            <Fade direction="rigth">
              <div className="h-8 w-8 text-xl font-bold flex justify-center items-center border border-prim rounded-full bg-main">
                <p className="text-3xl font-[600] text-prim mb-1">+</p>
              </div>
            </Fade>
          </div>

          <Fade direction="up">
            <a href="https://tally.so/r/woMM2b">
              <Btn titre="Rejoignez-nous" />
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Section6;
