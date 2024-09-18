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
          Originaire de la formation <span className="text-[#915eff]">42 Paris</span>, je suis un développeur Fullstack passionné par la création d'applications web complètes, du <span className="text-[#915eff]">Backend</span> au <span className="text-[#915eff]">Frontend</span>. J'aime concevoir des solutions à la fois performantes et pensées pour l'utilisateur, en mettant l'accent sur l'optimisation de l'<span className="text-[#915eff]">UI</span> et de l'<span className="text-[#915eff]">UX</span>. 
          <br /><br /> Je maîtrise une large gamme de technologies, notamment <span className="text-[#915eff]">Node.js</span>, <span className="text-[#915eff]">React</span>, <span className="text-[#915eff]">TypeScript</span>, et <span className="text-[#915eff]">Docker</span>. Cette polyvalence me permet de m'impliquer dans toutes les étapes du développement, de la conception de l'architecture à la mise en production. 
          <br /><br /> Mon approche allie rigueur technique et créativité, toujours dans l’optique de repousser les limites du possible. Je suis constamment à la recherche de nouvelles idées et technologies pour apporter des solutions innovantes. 
          <br /><br /> Curieux et engagé, je suis toujours prêt à apprendre et à grandir dans chaque projet, avec l'envie de continuer à évoluer en tant que développeur Fullstack professionnel.
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