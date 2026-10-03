import { motion } from 'framer-motion'

import type { Skill } from '@/types/portfolio'

export function SkillBar({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>
    </div>
  )
}
