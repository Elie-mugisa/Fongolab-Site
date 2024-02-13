const Btn = ({ className = "", titre = "" }) => {
  return (
    <div
      className={`py-1 cursor-pointer px-3 rounded-lg border border-prim text-white lg:px-3 lg:py-2 hover:bg-prim ${className}`}
    >
      {titre}
    </div>
  );
};

export default Btn;
