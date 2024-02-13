const Input = ({ className = "", titre = "", display = "" }) => {
  return (
    <div
      className={`w-full p-1 rounded-lg flex justify-between shadow-md bg-white  md:w-full ${display}`}
    >
      <input
        className={`placeholder:text-xs py-1 px-2  bg-transparent border-none outline-0 outline-prim   ${className}`}
        type="email"
        name=""
        id=""
        placeholder="Envoyez un Email.."
      />
      {/* btn */}
      <div className="btn w-[30%] flex justify-center rounded-md border border-prim text-sm py-2  bg-prim text-white ">
        {titre}
      </div>
    </div>
  );
};

export default Input;
