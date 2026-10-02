import { profile } from '@/data/resume'

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="flex justify-center items-center">
      {/* <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:px-6 lg:px-8"> */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        {/* <p className="text-sm text-muted-foreground">Built with React, TypeScript & Tailwind CSS.</p> */}
      </div>
    </footer>
  )
}
