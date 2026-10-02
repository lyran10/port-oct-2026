import { GraduationCap } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { education } from '@/data/resume'

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.1}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardContent className="flex flex-col gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="size-5" />
                  </span>
                  <Badge variant="secondary" className="w-fit">
                    {item.period}
                  </Badge>
                  <h3 className="font-display font-semibold">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground">{item.school}</p>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
