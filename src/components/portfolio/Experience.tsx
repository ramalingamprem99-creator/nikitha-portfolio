import { useState } from "react";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "Keva Health Inc",
    location: "Lexington, MA",
    role: "Digital Marketing Intern",
    period: "Jan 2026 – May 2026",
    points: [
      "Managed website updates, content creation, and social media engagement for healthcare-focused campaigns.",
      "Collaborated cross-functionally to strengthen digital presence and outreach strategies.",
      "Analyzed campaign data to identify trends and increase user engagement.",
      "Optimized content and communication strategies to improve online visibility.",
    ],
  },
  {
    company: "Malla Reddy Institute of Pharmaceutical Sciences",
    location: "Hyderabad, India",
    role: "Clinical Pharmacist · Data Analyst",
    period: "Jul 2022 – Jul 2023",
    points: [
      "Analyzed patient & medication data with Python and SQL to surface high-risk populations.",
      "Improved data accuracy by 20% through cleaning & validation pipelines.",
      "Built predictive models for disease risk assessment supporting clinical decisions.",
      "Audited 200+ prescriptions, reducing medication errors by 15%.",
    ],
  },
  {
    company: "Medvision Multispecialty Hospital",
    location: "Hyderabad, India",
    role: "Clinical Pharmacist Intern",
    period: "Jan 2022 – Jun 2023",
    points: [
      "Ensured accurate dispensing and adherence to clinical guidelines.",
      "Researched Migraine Diagnosis using Least Squares Method and Neural Networks.",
      "Processed large-scale healthcare datasets, extracting features for prediction accuracy.",
    ],
  },
];

export const Experience = () => {
  const [active, setActive] = useState(0);
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where clinical insight meets analytics"
    >
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
          {roles.map((r, i) => (
            <button
              key={r.company}
              onClick={() => setActive(i)}
              className={`glass relative flex w-full min-w-[220px] flex-col items-start rounded-2xl p-4 text-left transition-all duration-300 lg:min-w-0 ${
                active === i
                  ? "bg-white/10 ring-1 ring-primary/50 glow-ring"
                  : "hover:bg-white/5"
              }`}
            >
              <span className="text-[10px] uppercase tracking-widest text-primary">
                {r.period}
              </span>
              <span className="mt-1 font-display text-sm leading-tight">
                {r.company}
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">{r.role}</span>
            </button>
          ))}
        </div>

        <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary glow-ring">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="font-display text-2xl">{roles[active].role}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {roles[active].company} · {roles[active].location} · {roles[active].period}
            </p>
            <ul className="mt-6 space-y-3">
              {roles[active].points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary glow-ring" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
