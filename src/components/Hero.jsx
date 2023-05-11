import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import thib from '../assets/thib.jpeg';


const Hero = () => {
  return (
    <section className=" relative w-full lg:h-screen h-[100vh] mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex max-sm:flex-col  max-sm:gap-6">
          <div>
            <h1 className={`${styles.heroHeadText}`}>Je m'appelle <span className="text-[#915eff]">Thibault</span></h1>
            <p className={`${styles.heroSubText} mt-4 text-white-100`}>Voici un portfolio de mes projets.</p>
          </div>
          <img src={thib} alt="thib" className="w-[40%] img_profile_style z-10" />
        </div>



      </div>
      <div className="relative w-[45%] left-[32%] lg:h-[40%] h-[20%] lg:top-[45vh] top-[60vh]">
      <ComputersCanvas />
      </div>
    </section>
  )
}

export default Hero