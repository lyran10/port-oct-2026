import { Code2, Gauge, Lightbulb, Plug } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { usePortfolio } from '@/hooks/use-portfolio'

const FOCUS_AREAS = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    description: 'Building responsive, component-driven UIs with React and TypeScript.',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: "Connecting front ends to API services with clean data layers.",
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Profiling renders and shaving load time with memoization and lazy loading.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Breaking down ambiguous product asks into shippable, testable pieces.',
  },
]

export function About() {
  const { profile } = usePortfolio()
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About me"
          title="A developer who enjoys turning ideas into interfaces"
          description="A quick look at what I focus on day to day, and the numbers behind three years of shipping product."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal delay={0.1}>
            <p className="text-muted-foreground sm:text-lg">{profile.summary}</p>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              I hold an MCA from Manipal University and completed a full-stack development
              program in Tel Aviv — a mix that gave me both formal computer-science grounding
              and hands-on, project-based experience. Outside of code, I&apos;m a football
              enthusiast, which keeps me grounded in teamwork and discipline.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/60 bg-card/60 p-4 text-center"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FOCUS_AREAS.map((area, index) => (
              <Reveal key={area.title} delay={0.1 + index * 0.08}>
                <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="flex flex-col gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <area.icon className="size-5" />
                    </span>
                    <h3 className="font-display font-semibold">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
