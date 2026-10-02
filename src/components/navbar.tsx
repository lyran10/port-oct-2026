import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { ButtonAnchor } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { useActiveSection } from '@/hooks/use-active-section'
import { profile } from '@/data/resume'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const active = useActiveSection(NAV_LINKS.map((link) => link.id))

  const handleNavClick = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-border/60 bg-background/70 px-4 backdrop-blur-lg sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
          className="font-display flex items-center gap-2 text-base font-bold tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-accent text-sm text-primary-foreground shadow-sm">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.id)
                }}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                  active === link.id && 'text-foreground',
                )}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-px bg-linear-to-r from-primary to-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ModeToggle className="hidden sm:inline-flex" />
          <ButtonAnchor
            href={profile.resumeUrl}
            download="Liran_Ramekar_Resume"
            size="sm"
            className="hidden md:inline-flex"
          >
            Resume
          </ButtonAnchor>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border/70 text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.id)
                    }}
                    className={cn(
                      'block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
                      active === link.id && 'bg-secondary text-foreground',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-3 px-3 pt-2">
                <span className="text-xs text-muted-foreground">Theme</span>
                <ModeToggle />
              </li>
              <li className="px-3 pt-1">
                <ButtonAnchor
                  href={profile.resumeUrl}
                  download="Liran_Ramekar_Resume"
                  size="sm"
                  className="w-full"
                >
                  Download Resume
                </ButtonAnchor>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
