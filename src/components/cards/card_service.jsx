const Card_Service = ({ className = "", titre = "", content = "" }) => {
  return (
    <div
      id="card-service"
      className={`p-6 rounded-md space-y-4   cursor-pointer  ${className}`}
    >
      <h2
        className={`text-white shadow-none font-bold border-none ${className}`}
      >
        {titre}
      </h2>
      <p
        className={`rounded-l-sm text-white text-opacity-50 shadow-none  text-xs font-thin  border-l-4 border-prim pl-2 ${className}`}
      >
        {content}{" "}
      </p>
    </div>
  );
};

export const Header_service = ({ titre = "", paragraphe = "" }) => {
  return (
    <div>
      <h2 className={`text-2xl text-white shadow-none font-bold lg:text-4xl `}>
        {titre}
      </h2>
      <p
        className={`text-white  text-opacity-70 shadow-none pt-4 text-xs font-thin `}
      >
        {paragraphe}{" "}
      </p>
    </div>
  );
};

export default Card_Service;
