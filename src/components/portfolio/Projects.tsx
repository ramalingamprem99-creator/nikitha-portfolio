import { Section } from "./Section";

const projects = [
  {
    title: "U.S. Healthcare Data Analysis",
    tag: "Health Informatics",
    desc: "Applied informatics principles to analyze U.S. healthcare data — building Tableau dashboards and SQL pipelines that surfaced trends to support clinical decision-making.",
    stack: ["SQL", "Excel", "Tableau"],
  },
  {
    title: "Postoperative & Post-Anesthesia Outcomes",
    tag: "Clinical Research",
    desc: "Statistical analysis of clinical datasets identifying recovery patterns and complication trends using SAS and R for evidence-based decisions.",
    stack: ["SAS", "R", "Statistics"],
  },
  {
    title: "EHR Data Validation & Workflow Optimization",
    tag: "Workflow",
    desc: "Validated EHR data integrity and analyzed clinical workflows — recommending process improvements and dashboards monitoring patient outcomes.",
    stack: ["Epic", "Validation", "Reporting"],
  },
  {
    title: "Clinical Informatics System Optimization",
    tag: "Systems",
    desc: "Partnered with clinical and IT teams to enhance EHR usability, troubleshoot issues, and improve data quality with HIPAA-aligned compliance.",
    stack: ["Cerner", "HIPAA", "Support"],
  },
];

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Selected Work"
    title="Projects that turned data into decisions"
  >
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <article
          key={p.title}
          style={{ animationDelay: `${i * 100}ms` }}
          className="group glass relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 animate-fade-up"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 opacity-0 transition-opacity duration-700 group-hover:from-primary/15 group-hover:via-secondary/10 group-hover:to-accent/15 group-hover:opacity-100" />
          <span className="text-[11px] uppercase tracking-widest text-primary">
            {p.tag}
          </span>
          <h3 className="mt-3 font-display text-2xl leading-tight">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {p.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="glass-chip rounded-full px-3 py-1 text-xs">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            Read case study
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </article>
      ))}
    </div>
  </Section>
);
