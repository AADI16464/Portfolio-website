import { motion } from "framer-motion";
<<<<<<< HEAD

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
         <div className='flex flex-col justify-center items-center mt-5'>
=======
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from "react-simple-typewriter";
import hero from "../assets/herobg.png"; // ✅ import your hero image

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Profile Section */}
        <div className="flex flex-col justify-center items-center mt-5">
>>>>>>> f762950 (Updated Hero section with background and typewriter effect)
          <div className="relative flex items-center justify-center">
            <span className="absolute w-52 h-52 rounded-full animate-rgb-glow z-2"></span>
            <img
              src="Logo.jpg"
              alt="Profile"
              className="relative w-40 h-40 rounded-full border-4 border-transparent z-5"
            />
          </div>
<<<<<<< HEAD
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h5 className={`${styles.heroHeadText} text-white text-[32px]`}>
            Hi, I'm <span className='text-[#915EFF]'>Pratap Aditya Singh</span>
          </h5>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces<br className='sm:block hidden' />
            and web applications
=======
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text Content */}
        <div className="ml-14 flex flex-col justify-center"> {/* 🔄 ml-14 shifts content to right */}
          <h5 className={`${styles.heroHeadText} text-white text-[32px]`}>
            Hi, I'm <span className="text-[#915EFF]">Pratap Aditya Singh</span>
          </h5>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="text-white text-[20px]">
              &lt;code&gt; I am a{" "}
              <span className="text-[#915EFF]">
                <Typewriter
                  words={[
                    "Web Developer",
                    "UI/UX Designer",
                    "Software Developer",
                    "Freelancer",
                    "Coder",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>{" "}
              &lt;/code&gt;
            </span>
>>>>>>> f762950 (Updated Hero section with background and typewriter effect)
          </p>
        </div>
      </div>

      <ComputersCanvas />

<<<<<<< HEAD
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
=======
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
>>>>>>> f762950 (Updated Hero section with background and typewriter effect)
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
<<<<<<< HEAD
              className='w-3 h-3 rounded-full bg-secondary mb-1'
=======
              className="w-3 h-3 rounded-full bg-secondary mb-1"
>>>>>>> f762950 (Updated Hero section with background and typewriter effect)
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
