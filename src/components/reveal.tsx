import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span'
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const MotionComp = as === 'span' ? motion.span : motion.div

  return (
    <MotionComp
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionComp>
  )
}
