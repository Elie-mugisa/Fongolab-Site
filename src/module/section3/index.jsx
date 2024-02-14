import { Fade } from "react-awesome-reveal";
import Card_Service, {
  Header_service,
} from "../../components/cards/card_service";

const Wrapp_card = () => {
  return (
    <div
      id="Apropos"
      className="py-12 pt-20  mt-[100%] grid grid-cols-2 px-6 gap-x-2  md:px-20 gap-6 md:mt-0  md:grid-cols-3 lg:py-10"
    >
      {/* Text-service-header */}
      <Fade direction="up">
        <Header_service
          titre="Qui sommes nous?"
          paragraphe="Nous sommes un collectif des jeunes professionnels et étudiants dans le domaine de  l’IT ,  réunis par une vision et des valeurs communes"
        />
      </Fade>

      {/* Cards-service */}
      {/* Vision */}
      <Fade direction="up">
        <Card_Service
          titre="Notre Vision"
          content="Voir l’autonomie des jeunes étudiants ayant appris à gagner leur vie en rendant un service utile dans la société à travers leurs compétences en IT"
          className="bg-slate-900 shadow-md shadow-slate-950"
        />
      </Fade>

      {/* Mission */}
      <Fade direction="up">
        <Card_Service
          titre="Notre Mission"
          content="Professer  les étudiants  dans le secteur de l’IT  aux tendances technologique du moment "
          className="bg-slate-900 shadow-md shadow-slate-950  border-second"
        />
      </Fade>

      {/* Object */}
      <Fade direction="up">
        <Card_Service
          titre="Notre Objectif"
          content="Apprendre à travers des partages (exposés) et des formations le métier du numérique."
          className="bg-slate-900 shadow-md shadow-slate-950"
        />
      </Fade>

      {/* Historique */}

      <Card_Service
        titre="Historique"
        content="Un groupe des  jeunes génies du numérique, étudiants à l’université Espoir d’Afrique, avaient  apporté une solution à un problème massif qui concernait principalement les étranger vivant au Burundi en réalisant un projet numérique  dénommé FongolaPost. sous le haut patronage de monsieur Gray Salonga (L’un de ces jeunes génies du numérique) , le club fongolab fut fondé dans le but de partager leurs compétences et connaissances  avec d’autres étudiants passionnés du numérique et d’autres qui étaient influencés par leurs réalisation."
        className="bg-slate-900  shadow-md shadow-slate-950 col-span-2 "
      />
    </div>
  );
};

export default Wrapp_card;
