import Tech from "../../components/cards/technologies/tech";
import Progress_b_Tools from "../../components/progress-barr";
import Btn from "../../components/button/index";
import { Fade } from "react-awesome-reveal";

const Section6 = () => {
  return (
    <div className="flex flex-col py-6 bg-slate-950 gap-4  bg-opacity-30 justify-center items-center lg:py-1 lg:flex-row -mt-40 lg:-mt-52">
      <div className=" flex flex-col justify-evenly gap-8 w-full h-screen md:h-[50vh] lg:h-screen lg:w-1/2 ">
        {/* header */}
        <div className=" px-10 flex flex-col gap-12 lg:px-20">
          <Fade direction="up">
            <h1 className="text-center text-white text-2xl font-bold lg:text-start lg:text-4xl">
              En nous rejoignant, vous serez à mesure de bien vous en sortir sur
              les grandes lignes suivantes de du Developement
            </h1>
          </Fade>
          <Fade direction="up">
            <p className="text-center text-white text-xs text-opacity-50 font-thin lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
              eveniet sit nam similique sed ipsam modi illo, nisi nostrum
              deserunt corporis, quod earum nulla id provident. Culpa voluptatum
              illum voluptatibus.
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
            />
          </Fade>
          <Fade direction="up">
            <Tech
              span="Back-End"
              titre="Developement"
              para="Module pour la partie"
              span_para="Back-End"
            />
          </Fade>
          <Fade direction="up">
            <Tech
              span="APIs"
              titre="Developement"
              para="Module la conception des"
              span_para="APIs"
            />
          </Fade>
          <Fade direction="up">
            <Tech
              span="Modélization"
              titre="Developement"
              para="Module la conception et l'implementation de la"
              span_para="Base de Donnée"
            />
          </Fade>
        </div>
      </div>

      {/* descri tech */}
      <div className="w-full py-8  p-4 flex flex-col items-start md:h-[50vh] lg:h-screen lg:w-1/2  lg:p-8">
        {/* progress-bar */}
        {/* wrapp */}
        <div className="h-[70vh] mb-32  w-20  flex justify-start gap-[8rem] items-center flex-col relative lg:mb-1 lg:h-[55vh] lg:gap-[5rem] ">
          {/* LINE */}
          <div className="absolute right-[47.5%] top-0 bg-slate-800 h-[50vh] w-1 rounded-xl md:h-[30vh] lg:h-[50vh]"></div>
          {/* <div className="absolute  right-[47.5%] bottom-[4.5rem] bg-slate-800 h-1 w-1 rounded-full"></div>
          <div className="absolute  right-[47.5%] bottom-[5rem] bg-slate-800 h-1 w-1 rounded-full"></div>
          <div className="absolute  right-[47.5%] bottom-[5.5rem] bg-slate-800 h-1 w-1 rounded-full"></div> */}

          {/* icon */}
          <Fade direction="up">
            <Progress_b_Tools
              titre="Developpement Web"
              descri="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas obcaecati similique quibusdam porro omnis ullam nobis nihil dolores deserunt, nesciunt, ea adipisci. Provident quia natus fugiat. Sit laboriosam distinctio officiis."
            />
          </Fade>
          <Fade direction="up">
            <Progress_b_Tools
              titre="Developpement Mobile"
              descri="Aprenez Le Css3 dans Quelques jours, soyez maitre des creation sit amet consectetur adipisicing elit. Unde
            perspiciatis ea voluptates cumque at iure esse in architecto placeat
            consequatur consectetur voluptatibus, eveniet reiciendis enim
            dolores sint quibusdam! Velit, iste."
            />
          </Fade>
          <Fade direction="up">
            <Progress_b_Tools
              titre="Developpement Desk-Top"
              descri="Aprenez la nouvelle version de Javacript proposée dans notre module sit amet consectetur adipisicing elit. Unde
            perspiciatis ea voluptates cumque at iure esse in architecto placeat
            consequatur consectetur voluptatibus, eveniet reiciendis enim
            dolores sint quibusdam! Velit, iste."
            />
          </Fade>
        </div>

        {/* Team */}
        <div className="p-2  w-full flex flex-col gap-4 items-start ">
          <Fade direction="up">
            <p className=" text-xs text-prim ">Join Our Team</p>
          </Fade>
          <Fade direction="up">
            <p className="text-xs text-white opacity-50 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              iure id similique accusantium voluptate. Rem exercitationem porro
              quae culpa aperiam similique, accusamus dolor laboriosam quia,
              officia amet tenetur eos?
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
