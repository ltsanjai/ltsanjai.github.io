export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-base-950">
      {/* base grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      {/* gradient blobs */}
      <div className="absolute -left-40 top-[-10%] h-[36rem] w-[36rem] animate-blob rounded-full bg-cyan/20 blur-[120px]" />
      <div className="absolute right-[-15%] top-[20%] h-[30rem] w-[30rem] animate-blob-slow rounded-full bg-violet/20 blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[20%] h-[28rem] w-[28rem] animate-blob rounded-full bg-violet/10 blur-[130px]" />

      {/* noise */}
      <div className="noise-overlay" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,transparent_0%,rgba(5,6,8,0.4)_70%,#050608_100%)]" />
    </div>
  )
}
