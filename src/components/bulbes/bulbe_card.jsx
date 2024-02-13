import Bulbe_sphere from "../../assets/vague.png";
import Sphere from "../../assets/sphere.png";

const Bulbe_card1 = ({ className = "", id = "" }) => {
  return (
    <div id={id} className={`rounded-full h-60 w-[50rem]  ${className}`}>
      <img src={Bulbe_sphere} className="h-auto w-full opacity-5" alt="" />
    </div>
  );
};

export const Bulbe_card2 = ({ className = "", id = "" }) => {
  return (
    <div id={id} className={`rounded-full h-60 w-60  ${className}`}>
      <img src={Sphere} className="h-full w-full opacity-5" alt="" />
    </div>
  );
};

export default Bulbe_card1;
