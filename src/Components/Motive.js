import React,{useEffect} from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Motive=({children,className})=>{
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
      };
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);

      return(
           <motion.div 
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className={`box row mt-3 ${className}`}>
                {children}
            </motion.div>
      )
}


export default Motive