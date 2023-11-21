import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from 'react-responsive';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

  const isLgScreen = useMediaQuery({ minDeviceWidth: 992 });
  return (
    <motion.div variants={isLgScreen ? fadeIn("up", "spring", index * 0.5, 0.75) : {}}>
      <Tilt option={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[600px]">
        <div className="relative w-full h-[230px]">
          <div onClick={() => window.open(source_code_link, "_blank")} className="w-full h-full flex justify-center items-center cursor-pointer">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          </div>

        </div>

        <div className="mt-5 flex-grow">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {

  const isLgScreen = useMediaQuery({ minDeviceWidth: 992 });

  return (

    <div className="lg:pb-44 ">
      <motion.div variants={isLgScreen ? textVariant() : {}}>
        <h2 className={styles.sectionHeadText}>
          Mes projets
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={isLgScreen ? fadeIn("", "", 0.1, 1) : {}} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" >
          Mes projets mettent en valeur mes compétences en matière de conception, de développement et de résolution de problèmes.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}
          />
        ))}
      </div>
    </div>

  )
}

export default SectionWrapper(Works, "work");