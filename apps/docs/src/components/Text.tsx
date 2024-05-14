import React from 'react'
import { motion } from 'framer-motion'

interface LogoProps {
  content: string
  fontSize: string
  shadow: string
  onClick?: () => void
}

const Text: React.FC<LogoProps> = ({ content, fontSize, shadow, onClick }) => {
  return (
    <motion.p
      className="select-none text-base font-bold"
      style={{
        fontSize: fontSize
      }}
      transition={{
        duration: 4,
        repeat: Infinity
        // ease: 'easeInOut'
      }}
      animate={{
        textShadow: [
          `${shadow} ${shadow} ${shadow} var(--shadow-dark),-${shadow} -${shadow} ${shadow} var(--shadow-light)`,
          `-${shadow} ${shadow} ${shadow} var(--shadow-dark),${shadow} -${shadow} ${shadow} var(--shadow-light)`,
          `-${shadow} -${shadow} ${shadow} var(--shadow-dark),${shadow} ${shadow} ${shadow} var(--shadow-light)`,
          `${shadow} -${shadow} ${shadow} var(--shadow-dark),-${shadow} ${shadow} ${shadow} var(--shadow-light)`,
          `${shadow} ${shadow} ${shadow} var(--shadow-dark),-${shadow} -${shadow} ${shadow} var(--shadow-light)`
        ]
      }}
      onClick={onClick}
    >
      {content}
    </motion.p>
  )
}

export { Text }
