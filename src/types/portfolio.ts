// Shapes returned by the backend's GET /api/portfolio.

type LabelValue = { label: string; value: string }

export type Profile = {
  name: string
  initials: string
  role: string
  tagline: string
  summary: string
  location: string
  emails: string[]
  phones: LabelValue[]
  resumeUrl: string
  social: { github?: string; linkedin?: string; leetcode?: string; instagram?: string }
  stats: LabelValue[]
}

type Experience = {
  id: string
  company: string
  role: string
  period: string
  current: boolean
  points: string[]
  stack: string[]
}

type EducationItem = {
  id: string
  school: string
  degree: string
  location: string
  period: string
}

export type Skill = { name: string; level: number }

type SkillGroup = { id: string; group: string; skills: Skill[] }

type Project = {
  id: string
  title: string
  description: string
  highlights: string[]
  stack: string[]
  link?: string
  repo?: string
  status: 'Live' | 'In Progress'
}

export type Portfolio = {
  profile: Profile
  experience: Experience[]
  education: EducationItem[]
  skills: SkillGroup[]
  projects: Project[]
}
