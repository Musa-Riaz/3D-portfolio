import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles/style";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
{/* @ts-expect-error asa*/}
const ExperienceCard = ({ experience }) => {
  return(
    <>
    
    <VerticalTimelineElement 
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-[100%] h-[100%]">
        <img 
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
    >
      <div>
        <h3 
        className="text-white text-[24px]"
        >{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {/* @ts-expect-error asa*/}
          {experience.points.map((point, index) => (
            <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
               {point}

            </li>
          ))}
        </ul>
      
      </div>
    </VerticalTimelineElement>
    </>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>What I Have Done So Far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index ) => (

            <ExperienceCard key={index} experience={exp}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
