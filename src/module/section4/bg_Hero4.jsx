import Section4 from "../../module/section4/index";
import Bulbe from "../../components/bulbes/bulbe";
import { Fade } from "react-awesome-reveal";

const Bg_Hero4 = () => {
  return (
    <div className="overflow-hidden  ">
      <div>
        <Fade direction="down" duration={3000}>
          <Bulbe
            id="bulbe1"
            className=" translate-x-[20rem] translate-y-[30rem] h-8 w-8 bg-prim opacity-10 md:translate-x-[30rem] lg:translate-x-[10rem]"
          />
        </Fade>
        <Fade direction="top" duration={3000}>
          <Bulbe
            id="bulbe1"
            className=" translate-x-[20rem] translate-y-[30rem] h-8 w-8 bg-prim opacity-10 md:translate-x-[30rem] lg:translate-x-[80rem] lg:translate-y-[13rem]"
          />
        </Fade>
        <Fade direction="left" duration={3000}>
          <Bulbe className=" translate-x-[5rem] translate-y-[70vh] h-24 w-24 bg-second opacity-10 md:translate-x-[40rem] lg:translate-x-[55vh]" />
        </Fade>
      </div>

      <Section4 />
    </div>
  );
};

export default Bg_Hero4;
