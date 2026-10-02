import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center')}>
      <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
        <span className="h-px w-6 bg-primary" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={cn('max-w-2xl text-muted-foreground sm:text-lg', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
