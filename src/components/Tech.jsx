import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className=" lg:p-24 lg:pb-50">
      <motion.div variants={textVariant()} className="flex flex-col items-center">
        <p className={styles.sectionSubText}>
          À propos
        </p>
        <h2 className={styles.sectionHeadText}>
          Qui suis-je ?
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[22px] max-w-3xl leading-[30px] text-center" >
          Je suis issu de la formation <span className=" text-[#915eff]">42 Paris</span> et j'ai terminé le tronc commun de ma formation d'Architecte en Technologies du Numérique.
          <br /><br />Je maîtrise plusieurs langages de programmation clés tels que <span className=" text-[#915eff]">C</span>, <span className=" text-[#915eff]">C++</span>, <span className=" text-[#915eff]">HTML</span>, <span className=" text-[#915eff]">CSS</span> et <span className=" text-[#915eff]">JavaScript</span>, ainsi que les bibliothèques <span className=" text-[#915eff]">React.js</span> et <span className=" text-[#915eff]">Three.js</span>. De plus, je suis à l'aise avec <span className=" text-[#915eff]">Tailwind CSS</span> et j'ai également de l'expérience avec <span className=" text-[#915eff]">Git</span>.
          <br /><br />Je suis impatient de mettre mes connaissances en pratique et de continuer à apprendre et à grandir en tant que développeur web professionnel.
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