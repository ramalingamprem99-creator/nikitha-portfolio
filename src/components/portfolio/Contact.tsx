import { Section } from "./Section";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export const Contact = () => (
  <Section
    id="contact"
    eyebrow="Let's Connect"
    title="Open to roles in health informatics & analytics"
    subtitle="Always happy to chat about EHR optimization, clinical data, and healthcare innovation."
  >
    <div className="glass-strong relative overflow-hidden rounded-[2rem] p-10 md:p-14">
      <div className="absolute -right-16 -top-16 h-72 w-72 animate-pulse-glow rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />

      <div className="relative grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-3xl sm:text-4xl">
            Let's build healthier <span className="text-gradient">data systems</span> together.
          </h3>
          <p className="mt-4 text-muted-foreground">
            Reach out for opportunities, collaborations, or just to talk EHRs and
            analytics over coffee.
          </p>
          <a
            href="mailto:narsingnikhitha1477@gmail.com"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 glow-ring"
          >
            Send a message
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <ul className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "narsingnikhitha1477@gmail.com", href: "mailto:narsingnikhitha1477@gmail.com" },
            { icon: Phone, label: "Phone", value: "+1 704-906-7603", href: "tel:+17049067603" },
            { icon: MapPin, label: "Location", value: "2851 S King Drive, Chicago, IL" },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="text-sm">{value}</div>
                </div>
              </div>
            );
            return <li key={label}>{href ? <a href={href}>{inner}</a> : inner}</li>;
          })}
        </ul>
      </div>
    </div>

    <p className="mt-10 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Narsing Nikhitha Sri · Crafted with care.
    </p>
  </Section>
);
