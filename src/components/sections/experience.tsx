import { Briefcase } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { usePortfolio } from '@/hooks/use-portfolio'

export function Experience() {
  const { experience } = usePortfolio()
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building"
          description="Three years of hands-on frontend and full-stack work, from internship to production ownership."
        />

        <ol className="relative mt-12 space-y-10 border-s border-border/70 ps-8 sm:ps-10">
          {experience.map((job, index) => (
            <Reveal key={job.id} delay={index * 0.1} as="div">
              <li className="relative">
                <span className="absolute top-1 -start-[calc(2rem+9px)] flex size-[18px] items-center justify-center rounded-full bg-linear-to-br from-primary to-accent ring-4 ring-background sm:-start-[calc(2.5rem+9px)]">
                  <Briefcase className="size-2.5 text-primary-foreground" />
                </span>

                <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                        <p className="text-sm font-medium text-primary">{job.company}</p>
                      </div>
                      <Badge variant={job.current ? 'accent' : 'secondary'}>
                        {job.period}
                      </Badge>
                    </div>

                    <ul className="mt-1 flex flex-col gap-2 text-sm text-muted-foreground">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
