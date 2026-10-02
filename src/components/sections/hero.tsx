import { motion } from 'framer-motion'
import { ArrowDown, FileDown } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

import { Button, ButtonAnchor } from '@/components/ui/button'
// import { RotatingText } from '@/components/rotating-text'
import { profile } from '@/data/resume'
// import portrait from '@/assets/portrait.png'
// import portrait from '@/assets/AI_photo.png'

const PROFILE_LINES: { key: string; value: string | string[] | boolean }[] = [
  { key: 'name', value: profile.name },
  { key: 'role', value: profile.role },
  { key: 'location', value: profile.location },
  { key: 'stack', value: ['React', 'TypeScript', 'Node.js'] },
  // { key: 'focus', value: ['Scalable UI', 'Performance', 'DX'] },
  { key: 'openToWork', value: true },
]

function CodeValue({ value }: Readonly<{ value: string | string[] | boolean }>) {
  if (typeof value === 'boolean') return <span className="text-amber-500">{String(value)}</span>
  if (!Array.isArray(value)) return <span className="text-emerald-500">&apos;{value}&apos;</span>
  return (
    <>
      [
      {value.map((v, i) => (
        <span key={v}>
          <span className="text-emerald-500">&apos;{v}&apos;</span>
          {i < value.length - 1 && ', '}
        </span>
      ))}
      ]
    </>
  )
}

// const ROLES = ['React Developer', 'TypeScript Engineer', 'Frontend Engineer', 'Full-Stack Builder']

const SOCIAL_LINKS = [
  { id: 'GitHub', href: profile.social.github, icon: FaGithub },
  { id: 'LinkedIn', href: profile.social.linkedin, icon: FaLinkedin },
  { id: 'LeetCode', href: profile.social.leetcode, icon: SiLeetcode },
  { id: 'Instagram', href: profile.social.instagram, icon: FaInstagram },
]

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16 sm:pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>{' '}
            Open to new opportunities
          </span>

          <h1 className="font-display mt-5 text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name.split(' ')[0]}</span>
          </h1>

          <div className="font-display mt-3 h-10 text-2xl font-semibold text-muted-foreground sm:text-3xl">
            {/* <RotatingText words={ROLES} className="text-foreground/90" /> */}
            <span>Software Engineer</span>
          </div>

          <p className="mt-5 max-w-xl text-balance text-muted-foreground sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button size="lg" onClick={() => scrollTo('projects')}>
              View my work
            </Button>
            <ButtonAnchor
              href={profile.resumeUrl}
              download="Liran_Ramekar_Resume"
              variant="outline"
              size="lg"
            >
              <FileDown className="size-4" />
              Download résumé
            </ButtonAnchor>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ id, href, icon: Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={id}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-secondary/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="relative order-1 mx-auto flex w-full max-w-xs items-center justify-center lg:order-2 lg:max-w-none"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-primary/30 to-accent/30 blur-3xl" />
          <div className="relative w-full max-w-[28rem] overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-xl backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/50 px-4 py-3">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">developer.ts</span>
            </div>
            <pre
              aria-label={`Profile summary for ${profile.name}`}
              className="overflow-x-auto px-5 py-5 text-left font-mono text-[13px] leading-6 sm:text-sm"
            >
              <code>
                <span className="text-violet-500">const</span>{' '}
                <span className="text-sky-500">developer</span> = {'{'}
                {'\n'}
                {PROFILE_LINES.map(({ key, value }) => (
                  <span key={key}>
                    {'  '}
                    <span className="text-foreground/80">{key}</span>:{' '}
                    <CodeValue value={value} />,{'\n'}
                  </span>
                ))}
                {'}'}
                <motion.span
                  aria-hidden
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                  className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary"
                />
              </code>
            </pre>
          </div>
          {/* <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border/70 bg-card/90 px-4 py-3 shadow-lg backdrop-blur sm:block">
            <p className="font-display text-2xl font-bold">3+</p>
            <p className="text-xs text-muted-foreground">years experience</p>
          </div> */}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground sm:flex"
      >
        <span className="text-xs">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </button>
    </section>
  )
}
