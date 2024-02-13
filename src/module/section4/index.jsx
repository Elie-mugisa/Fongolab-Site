import { Fade } from "react-awesome-reveal";
import Btn from "../../components/button";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
const Section4 = () => {
  return (
    // Trainning SECTION
    <div className="py-10 bg-slate-950   bg-opacity-30  px-6  -mt-36 bg-main2 flex flex-col justify-center items-center lg:flex-row lg:px-20 lg:py-0 lg:h-[85vh]">
      {/* Photo Trainer */}
      <div className="w-full  h-[50vh] flex justify-start items-center lg:h-screen lg:w-[60%]">
        <figure className="relative ">
          <Fade direction="up">
            <div className="h-[8rem] w-[16rem] bg-black shadow-lg shadow-filter_main2 rounded-md z-40 border border-prim md:h-[25rem] md:w-[40rem]"></div>
          </Fade>

          <div className="h-[8rem] w-[16rem] overflow-hidden  bg-black shadow-lg shadow-filter_main2 rounded-md border border-prim  z-40 absolute -top-16 left-4 md:left-10 md:h-[25rem] md:w-[40rem]">
            <img className="w-full h-auto" src={pic2} alt="" />
          </div>

          <div className="h-[8rem] w-[16rem]  overflow-hidden  bg-black shadow-lg shadow-filter_main2 rounded-md border border-prim z-40 absolute top-10 left-8 md:left-24 md:h-[25rem] md:w-[40rem]">
            <img className="w-full h-auto" src={pic1} alt="" />
          </div>
        </figure>
      </div>

      {/* Text */}
      <div className="w-full  p-2 gap-4 flex flex-col items-center justify-center mg:items-start lg:items-end lg:gap-12 lg:w-[40%]">
        {/* header */}
        <div className="flex flex-col gap-4">
          <Fade direction="up">
            <h1 className="text-2xl mb-4 text-center font-bold text-prim lg:text-start  lg:text-4xl">
              Une formation de qualité supérieure et adaptée à la génération
              numérique moderne
            </h1>
          </Fade>
          <Fade direction="up">
            <p className="mt-4 text-sm font-thin text-white text-justify text-opacity-60">
              Nous offrons une formation majoritairement pratique, avec des
              tutorats instantanés. Nous suivons le processus d’apprentissage à
              la loup de nos étudiants, les accompagnant dans la mise en
              pratique de leurs connaissances acquises en réalisant avec eux des
              projets informatiques réels en groupe ou individuels.
            </p>
          </Fade>
          <Fade direction="up">
            <p className="text-white text-sm font-thin text-justify text-opacity-60">
              Nous misons beaucoup plus sur le travail en équipe: En ligne (à
              distance) et en physique, en apprenant aux étudiants la prise en
              main des outils de travail en ligne, aussi le leadership et la
              maîtrise du climat professionnel.
            </p>
          </Fade>
        </div>

        {/* join btn */}
        <Fade direction="up">
          <a href="https://tally.so/r/woMM2b">
            <Btn className="mt-6 lg:mt-0" titre="Rejoignez-nous" />
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default Section4;
