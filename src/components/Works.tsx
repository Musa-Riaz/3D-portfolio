import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles/style'
{/* @ts-expect-error asa*/}
import {github} from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion';
{/* @ts-expect-error asa*/}
const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {

  return(
    <>
    <motion.div
    variants={fadeIn("up", "spring", index*0.5, 0.75)} //I want the cards to appear one by one, thats why im using index*0.5
    >
        <Tilt
        options={{
          max:45,
          scale:1,
          speed:40
        }}
        className='w-full bg-tertiary shadow-lg rounded-2xl p-5 sm:w-[360px] '
        >
            <div
            className='relative w-full h-[230px]'
            >
                <img
                src={image}
                alt={name}
                className='w-full h-full object-cover rounded-2xl'
                />
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                  <div onClick={() => window.open(source_code_link)} className='cursor-pointer black-gradient w-10 h-10
                  rounded-full flex justify-center items-center
                  '>
                      <img
                      src={github}
                      alt='github'
                      className='w-1/2 h-1/2 object-contain'
                      />
                  </div>
                </div>
            </div>
            <div className='mt-5 '>
                <h3 className='text-white font-bold text-[24px]'>
                  {name}
                  <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </h3>
            </div >
            <div className='mt-4 flex flex-wrap gap-2'>
              {/* @ts-expect-error asa*/}
              {tags.map((tag, index) => (
                <p key={index} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
              ))}
            </div>
        </Tilt>
    </motion.div>
    </>
  )
}

const Works = () => {
  return (
    <>
    {/* @ts-expect-error asa*/}
      <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>My Work</p>
              <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className='w-full flex'>
              <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
              >
                Here are some of the projects I have worked on. 
                It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
              </motion.p>
            </div>


            <div className='mt-20 flex flex-wrap gap-7'>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project}
                index={index}/>
              ))}
            </div>
    </>
  )
}

export default SectionWrapper(Works, "");