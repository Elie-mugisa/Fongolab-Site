import Verified from "../../assets/verified.svg";

const Progress_b_Tools = ({ className = "", titre = "", descri = "" }) => {
  return (
    <div>
      <div className="h-8 w-8 rounded-full flex justify-center items-center bg-main relative">
        <img src={Verified} alt="" className="h-full" />
        {/* detail */}
        <div className="space-y-1 absolute left-full top-0  rounded-md ml-3  w-[70vw]  lg:w-[40vw]">
          <h1 className=" font-bold text-white">{titre}</h1>
          <p className={`text-xs text-white text-opacity-40  ${className}`}>
            {descri}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress_b_Tools;
