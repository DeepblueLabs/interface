// NextJS 13 component a spliter with motion.hr

import { motion } from 'framer-motion'

const variants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 }
}

export const Spliter = () => {
    return (
        <motion.hr
            variants={variants}
            transition={{ duration: 0.5 }}
            className="mt-0 border-t-2 border-off-white opacity-25"
        />
    )
}