import React from "react";
import { certifications } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-6'>
        {certifications.map((cert, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            key={index}
            className='bg-black-100 p-5 rounded-xl cursor-pointer hover:scale-[1.02] transition'
          >
            <a
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 text-white text-lg font-medium hover:text-[#915EFF]'
            >
              <FaCertificate className='text-[#915EFF]' />
              {cert.name}
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
