import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function RotatingText({
  words,
  interval = 2400,
  className,
}: {
  words: string[]
  interval?: number
  className?: string
}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => window.clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
