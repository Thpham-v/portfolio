import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className=" lg:p-24 lg:pb-10">
      <motion.div variants={textVariant()} className="flex flex-col items-center">
        <h2 className={styles.sectionHeadText}>
          Qui suis-je ?
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[22px] max-w-3xl leading-[30px] text-center" >
          Originaire de la formation <span className=" text-[#915eff]">42 Paris</span>, j'ai complété avec succès le tronc commun de ma formation d'Architecte en Technologies du Numérique. Actuellement, je m'investis pleinement en tant que développeur Fullstack au sein d'un passionnant projet de start-up.
          <br /><br />Je me distingue par mon engagement à participer à tous les aspects d'un projet. Acteur polyvalent, je contribue non seulement au développement <span className=" text-[#915eff]">Frontend</span> et <span className=" text-[#915eff]">Backend</span>, mais aussi au façonnage de l'expérience utilisateur (<span className=" text-[#915eff]">UI</span>/<span className=" text-[#915eff]">UX</span>), à la mise en place de la <span className=" text-[#915eff]">sécurité</span>, à la définition de la <span className=" text-[#915eff]">structure</span> du projet, et à l'orchestration de la chaîne de production en mode <span className=" text-[#915eff]">agile</span>.
          Participer activement à toutes les facettes d'un projet <span className=" text-[#915eff]">from scratch</span> enrichit mes compétences et m'apporte une expérience précieuse.
          <br /><br />Je maîtrise plusieurs langages de programmation clés tels que <span className=" text-[#915eff]">C</span>, <span className=" text-[#915eff]">C++</span>, <span className=" text-[#915eff]">JavaScript</span>, <span className=" text-[#915eff]">TypeScript</span>, et <span className=" text-[#915eff]">Liquid (Shopify)</span>, je suis compétent dans l'utilisation de <span className=" text-[#915eff]">Docker</span> et <span className=" text-[#915eff]">Git</span>. Ma polyvalence s'étend à la conception d'interfaces avec <span className=" text-[#915eff]">Figma</span>. En développement web, je manie efficacement <span className=" text-[#915eff]">React.js</span>, <span className=" text-[#915eff]">HTML</span>, <span className=" text-[#915eff]">CSS</span>, et exploite <span className=" text-[#915eff]">Tailwind CSS</span>. Mes compétences englobent également <span className=" text-[#915eff]">Three.js</span>, et je possède une expérience pratique avec <span className=" text-[#915eff]">Node.js</span> et <span className=" text-[#915eff]">Express</span>.
          <br /><br />Je suis impatient de mettre mes connaissances en pratique et de continuer à apprendre et à grandir en tant que développeur Fullstack professionnel.
        </motion.p>
      </div>

      <motion.div variants={textVariant()} className="flex flex-col items-center mt-20 ">
        <p className={styles.sectionSubText}>
          - Langages et compétences -
        </p>

      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">

        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "about");