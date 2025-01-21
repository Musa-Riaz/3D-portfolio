import {motion} from 'framer-motion'
import {styles} from '../styles/style'
import { staggerContainer } from '../utils/motion'


{/* @ts-expect-error asa*/}
const SectionWrapper = (Component, idName) => 
    function HOC(){
        return(
          <motion.section
          /* @ts-expect-error asa*/
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
            <span className='hash-span' id={idName}>&nbsp;
            
            </span>
        <Component />
      </motion.section>
        )
    }

export default SectionWrapper
