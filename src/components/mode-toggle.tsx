import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

export function ModeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-secondary/60 text-foreground transition-colors hover:bg-secondary',
        className,
      )}
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
