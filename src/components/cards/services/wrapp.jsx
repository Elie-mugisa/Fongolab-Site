import { Fade } from "react-awesome-reveal";
import Cards from "./cards";

const Wrapp = () => {
  return (
    <div className=" px-0 py-4 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:py-14 lg:px-8">
      <Fade direction="up">
        <Cards
          titre="Formation"
          para="Une formation gratuite avec des modules adaptés au niveau élémentaire, intérmediare et avancé."
          btn_value="Commencer"
        />
      </Fade>
      <Fade direction="up">
        <Cards
          titre="Conception & Réalisation"
          para="Des logiciels Faciles à utiliser, Fiables, Performants et Sécurisés"
          btn_value="Commencer"
          className="lg:mt-16"
        />
      </Fade>
      <Fade direction="up">
        <Cards
          titre="Maintenance"
          para="Gardez vos logiciels opérationel, à jour, rapide et fonctionel"
          btn_value="Commencer"
        />
      </Fade>
      <Fade direction="up">
        <Cards
          titre="Marketing Digital"
          para="Booster la visibilité de votre entreprise ou votre produit."
          btn_value="Commencer"
          className=" lg:mt-16"
        />
      </Fade>
    </div>
  );
};

export default Wrapp;
