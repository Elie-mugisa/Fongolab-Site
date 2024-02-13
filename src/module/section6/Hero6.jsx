import Section6 from "../section6/index";
import Bulbe from "../../components/bulbes/bulbe";
import { Fade } from "react-awesome-reveal";

const Hero6 = () => {
  return (
    <div className="overflow-hidden ">
      <div className="">
        <Fade direction="left" duration={3000}>
          <Bulbe className=" translate-x-[20rem] translate-y-[30rem] h-8 w-8 bg-second opacity-20 md:translate-x-[30rem] lg:translate-x-[10rem]" />
        </Fade>
        <Fade direction="top" duration={3000}>
          <Bulbe className=" translate-x-[20rem] -translate-y-[10rem] h-8 w-8 bg-second opacity-10 md:translate-x-[30rem] lg:translate-x-[20rem]" />
        </Fade>
        <Fade direction="down" duration={3000}>
          <Bulbe
            id="bulbe1"
            className=" translate-x-[20rem] -translate-y-[25rem] h-8 w-8 bg-prim opacity-10 md:translate-x-[30rem] lg:translate-x-[40rem]"
          />
        </Fade>
        <Fade direction="up" duration={3000}>
          <Bulbe
            id="bulbe1"
            className=" translate-x-[20rem] translate-y-[30rem] h-8 w-8 bg-prim opacity-10 md:translate-x-[30rem] lg:translate-x-[80rem] lg:translate-y-[13rem]"
          />
        </Fade>
        <Fade direction="right" duration={3000}>
          <Bulbe
            id="bulbe1"
            className=" translate-x-[5rem] translate-y-[70vh] h-24 w-24 bg-prim opacity-5 md:translate-x-[40rem] lg:translate-x-[150vh]"
          />
        </Fade>
      </div>

      <Section6 />
    </div>
  );
};

export default Hero6;
