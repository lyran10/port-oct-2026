import { Mail, Phone } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ButtonAnchor } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { profile } from '@/data/resume'

const SOCIAL_LINKS = [
  { id: 'GitHub', href: profile.social.github, icon: FaGithub },
  { id: 'LinkedIn', href: profile.social.linkedin, icon: FaLinkedin },
  { id: 'LeetCode', href: profile.social.leetcode, icon: SiLeetcode },
  { id: 'Instagram', href: profile.social.instagram, icon: FaInstagram },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title="Let's build something together"
          description="Have a role, project, or just want to talk shop? My inbox is open."
        />

        <Reveal delay={0.15} className="mt-12">
          <Card className="mx-auto max-w-3xl overflow-hidden">
            <CardContent className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium break-all hover:text-primary hover:underline"
                  >
                      {
                        profile.email.map((email) => (
                          <p key={email}>
                            {email}
                          </p>
                        ))
                      }
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  {profile.phones.map((phone) => (
                    <span key={phone.value} className="font-medium">
                      {phone.label} {phone.value}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>

            <div className="flex flex-col items-center gap-5 border-t border-border/60 px-6 pt-6">
              <ButtonAnchor href={`mailto:${profile.email}`} size="lg">
                Say hello
              </ButtonAnchor>

              <div className="flex items-center gap-3">
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
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
