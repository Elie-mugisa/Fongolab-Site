const Cards = ({ className = "", titre = "", para = "", btn_value = "" }) => {
  return (
    <div
      className={` p-4 z-10 rounded-3xl  flex flex-col justify-center items-center  gap-4 bg-slate-900 shadow-md shadow-filter_main2 cursor-pointer lg:w-64 lg:h-80 lg:gap-10 ${className}`}
    >
      {/* titre */}
      <h2 className="text-md text-white font-bold text-center lg:text-2xl">
        {titre}
      </h2>

      {/* paragraphe */}
      <p className="text-[.60rem]  text-center text-filter_white lg:text-xs">
        {para}
      </p>

      {/* btn */}
      <a href="https://tally.so/r/woMM2b">
        <div className="text-[.60rem] rounded-lg  py-1 px-3 border border-prim text-white hover:bg-prim lg:text-xs lg:py-2 lg:px-5  lg:rounded-2xl">
          {btn_value}
        </div>
      </a>
    </div>
  );
};

export default Cards;
