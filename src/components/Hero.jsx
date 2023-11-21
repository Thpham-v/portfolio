import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import thib from '../assets/thib.jpeg';


const Hero = () => {
  return (
    <section className=" relative w-full lg:h-screen h-[100%] mx-auto ">

      <div className={`${styles.paddingX} relative inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

        <div className="flex flex-col justify-center items-center mt-10 max-sm:mt-[38%]">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="relative flex flex-col max-sm:mb-[200px]">
          <div className="flex max-sm:flex-col-reverse max-sm:flex justify-center items-center w-full">

            <div>
              <h1 className={`${styles.heroHeadText}`}>Je m'appelle <span className="text-[#915eff]">Thibault</span></h1>
              <p className={`${styles.heroSubText} mt-4 text-white-100`}>Voici le portfolio de mes projets.</p>
            </div>

            <img src={thib} alt="thib" className="w-[50%]  img_profile_style max-sm:mr-10" />

          </div>
          <div className="h-[300px] top-[100px] w-[50%] max-sm:h-full max-lg:w-[80%]">
            <ComputersCanvas />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero