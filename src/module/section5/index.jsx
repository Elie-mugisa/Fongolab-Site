import { Fade } from "react-awesome-reveal";
import Wrapp from "../../components/cards/services/wrapp";

const Section5 = () => {
  return (
    <div id="Services" className=" pt-10 z-20 bg-main">
      {/* Heading */}
      <div className=" flex flex-col gap-4 py-4 px-2 lg:px-40 ">
        <Fade direction="up">
          <h1 className="text-2xl text-white text-center lg:text-4xl">
            Services
          </h1>
        </Fade>
        <Fade direction="up">
          <p className="text-sm font-thin text-white text-opacity-70 text-center">
            Nous organisons des activités pouvant réhausser les capacités des
            nos membres en matière du numérique
          </p>
        </Fade>
      </div>

      {/* Cards */}
      <Wrapp />
    </div>
  );
};

export default Section5;
