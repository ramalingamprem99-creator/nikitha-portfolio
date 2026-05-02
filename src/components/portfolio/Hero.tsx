import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";

export const Hero = () => (
  <section id="about" className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-32">
    <div className="glass-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-in">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
      Health Informatics · Pharm.D
    </div>

    <h1 className="text-center font-display text-5xl leading-[1.05] sm:text-7xl md:text-[88px] animate-fade-up">
      <span className="text-gradient">Narsing</span>
      <br />
      <span className="text-foreground/95">Nikhitha Sri</span>
    </h1>

    <p className="mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up [animation-delay:120ms]">
      Bridging clinical practice and healthcare technology — turning EHR data, workflows
      and analytics into measurable improvements in patient care.
    </p>

    <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:240ms]">
      <a
        href="#projects"
        className="group glass-strong relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 opacity-80 transition-opacity group-hover:opacity-100" />
        Explore Work
      </a>
      <a
        href="mailto:narsingnikhitha1477@gmail.com"
        className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
      >
        <Mail className="h-4 w-4" /> Get in touch
      </a>
    </div>

    <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground animate-fade-up [animation-delay:360ms]">
      <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5">
        <MapPin className="h-3 w-3 text-primary" /> Chicago, IL
      </span>
      <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5">
        <Phone className="h-3 w-3 text-primary" /> +1 704-906-7603
      </span>
      <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5">
        <Mail className="h-3 w-3 text-primary" /> narsingnikhitha1477@gmail.com
      </span>
    </div>

    <a
      href="#skills"
      aria-label="Scroll"
      className="mt-20 inline-flex h-11 w-11 animate-bounce items-center justify-center rounded-full glass text-primary"
    >
      <ArrowDown className="h-4 w-4" />
    </a>
  </section>
);
