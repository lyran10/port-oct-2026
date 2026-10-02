export function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="animate-blob absolute -top-40 -left-40 size-[28rem] rounded-full bg-primary/25 blur-[110px]" />
      <div
        className="animate-blob absolute top-1/3 -right-32 size-[24rem] rounded-full bg-accent/25 blur-[110px]"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/4 size-[22rem] rounded-full bg-primary/15 blur-[110px]"
        style={{ animationDelay: '6s' }}
      />
    </div>
  )
}
