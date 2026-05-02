export const Blobs = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="blob animate-float-slow left-[-10%] top-[-10%] h-[520px] w-[520px] bg-primary/40" />
    <div className="blob animate-float-slower right-[-15%] top-[10%] h-[600px] w-[600px] bg-secondary/40" />
    <div className="blob animate-float-slow bottom-[-20%] left-[20%] h-[640px] w-[640px] bg-accent/30" />
    <div className="blob animate-float-slower right-[10%] bottom-[-10%] h-[420px] w-[420px] bg-[hsl(210_90%_55%/0.45)]" />
    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }}
    />
  </div>
);
