import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SkillBar } from '@/components/skill-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { usePortfolio } from '@/hooks/use-portfolio'

export function Skills() {
  const { skills } = usePortfolio()
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A practical toolkit built over three years of shipping React applications end to end."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 0.12}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{group.group}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  {group.skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={index * 0.06} />
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
