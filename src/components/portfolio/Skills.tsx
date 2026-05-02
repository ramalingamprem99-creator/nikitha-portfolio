import { Section } from "./Section";
import {
  Activity,
  Database,
  Stethoscope,
  ShieldCheck,
  LineChart,
  Users,
} from "lucide-react";

const groups = [
  {
    icon: Stethoscope,
    title: "Clinical Informatics & EHR",
    items: ["Epic", "Cerner", "Meditech", "Workflow Analysis"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    items: ["SQL", "Python", "Excel", "Tableau", "Power BI", "SAS", "SPSS"],
  },
  {
    icon: Activity,
    title: "Healthcare Systems",
    items: ["Data Validation", "Operations", "Quality Improvement"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    items: ["HIPAA", "ICD-10", "Health Data Standards"],
  },
  {
    icon: LineChart,
    title: "Research Tools",
    items: ["PubMed", "Cochrane Library", "Predictive Modeling"],
  },
  {
    icon: Users,
    title: "Professional",
    items: ["Communication", "Cross-functional Teamwork", "End-user Training"],
  },
];

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Capabilities"
    title="A toolkit at the intersection of medicine & data"
    subtitle="From the bedside to the database — fluent in clinical context and the technical layer that powers modern healthcare."
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map(({ icon: Icon, title, items }, i) => (
        <div
          key={title}
          style={{ animationDelay: `${i * 80}ms` }}
          className="group glass relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 animate-fade-up"
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80 group-hover:bg-primary/20" />
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary glow-ring">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-lg">{title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {items.map((it) => (
              <span
                key={it}
                className="glass-chip rounded-full px-3 py-1 text-xs text-foreground/80"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
