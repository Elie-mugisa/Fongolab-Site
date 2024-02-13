const Tech = ({
  className = "",
  span = "",
  titre = "",
  para = "",
  span_para = "",
  path = "",
}) => {
  return (
    <div>
      <div className="p-2 relative bg-slate-900  rounded-md shadow-md flex gap-2 justify-between shadow-filter_main z-20 lg:gap-4">
        {/* wrapp-icon */}
        <div className="my-auto flex-shrink  ">
          {/* icon */}
          <div className="h-6 w-6 border-[0.2px] border-opacity-45 border-prim flex justify-center items-center rounded-lg bg-main lg:h-10 lg:w-10">
            <img src={path} alt="" />
          </div>
        </div>

        {/* text */}
        <div className="flex-grow space-y-1  ">
          <h1 className="text-white font-normal ">
            <span className="text-prim font-extrabold mr-1">{span}</span>{" "}
            {titre}
          </h1>
          <p className="text-white   text-opacity-50 text-xs font-thin">
            {para}{" "}
            <span className="text-prim font-normal cursor-pointer">
              {span_para}
            </span>
          </p>
        </div>

        {/* btn drop-down */}
        <div className="text-prim absolute right-5 top-2">*</div>
      </div>
    </div>
  );
};

export default Tech;
