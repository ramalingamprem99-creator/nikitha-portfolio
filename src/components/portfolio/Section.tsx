import { useReveal } from "@/hooks/use-reveal";

export const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => {
  const { ref, shown } = useReveal();
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-28">
      <div
        ref={ref}
        className={`mb-14 max-w-2xl transition-all duration-700 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <span className="glass-chip inline-block rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
};
