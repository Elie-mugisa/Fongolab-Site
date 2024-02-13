import { Fade } from "react-awesome-reveal";
import Bulbe from "../../components/bulbes/bulbe";
import Bulbe_card1 from "../../components/bulbes/bulbe_card";
import Section1 from "../../module/section1";
import { Bulbe_card2 } from "./../../components/bulbes/bulbe_card";

const Bg_anim = () => {
  return (
    <div className="h-screen flex relative overflow-hidden md:h-[50vh] lg:h-screen ">
      <Fade duration={3000} direction="up">
        <Bulbe className="move translate-x-32 translate-y-32 h-[0.10rem] w-[0.10rem] bg-second opacity-35" />
      </Fade>
      <Fade duration={3000} direction="left">
        <Bulbe
          id="bulbe1"
          className="move1 translate-x-[20rem] translate-y-[20rem] h-52 w-52 bg-prim opacity-30 md:translate-x-[40rem] lg:translate-x-[50rem] animate-[wiggle_1s_ease-in-out_infinite] "
        />
      </Fade>
      <Fade duration={3000} direction="right">
        <Bulbe className="move2 translate-x-[25rem] translate-y-[10rem] h-8 w-8 bg-second opacity-20 md:translate-x-[40rem] lg:translate-x-[50rem]" />
      </Fade>

      <Bulbe_card1 className=" -translate-x-64   -translate-y-24 " />

      <Bulbe_card2 className=" -translate-x-4 translate-y-[7vh]  " />
      <Bulbe_card2 className=" translate-x-[5vh] translate-y-[45vh] " />

      {/* HERO */}
      <Section1 />
    </div>
  );
};

export default Bg_anim;
