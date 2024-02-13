import Bulbe from "../../components/bulbes/bulbe";
import Section2 from "./section2";
import { Fade } from "react-awesome-reveal";

const Bg_Hero2 = () => {
  return (
    <div className=" h-screen  flex  relative md:h-[50vh] lg:h-[85vh]">
      <Fade duration={3000} direction="left">
        <Bulbe
          id="bulbe1"
          className=" hidden translate-x-[20rem] translate-y-[30rem] h-8 w-8 bg-prim opacity-10 md:translate-x-[30rem] lg:translate-x-[10rem] md:block"
        />
      </Fade>
      <Fade duration={3000} direction="up">
        <Bulbe className=" translate-x-[5rem] translate-y-[10rem] h-24 w-24 bg-second opacity-15 md:translate-x-[40rem] lg:translate-x-[75rem]" />
      </Fade>

      {/* HERO */}
      <Section2 />
    </div>
  );
};

export default Bg_Hero2;
