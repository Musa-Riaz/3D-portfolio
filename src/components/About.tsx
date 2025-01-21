import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles/style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
{/* @ts-expect-error asa*/}
const ServiceCard = ({index, icon, title})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        /* @ts-expect-error asa*/
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12
        min-h-[200px] flex justify-evenly items-center flex-col"
        >
              <img 
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"

              />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate and driven MERN Stack developer currently pursuing a
        degree in Software Engineering at the National University of Sciences
        and Technology (NUST) Islamabad, Pakistan. I thrive on building
        innovative web applications and enjoy tackling new challenges in the
        field of software development. <br />
        With a strong foundation in web development and a deep understanding of
        modern technologies, I specialize in building dynamic, user-friendly web
        applications.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
