import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "Governors State University",
    place: "University Park, IL",
    degree: "Master's in Health Informatics",
    period: "Expected May 2026",
    notes:
      "Health Information Systems · Clinical Informatics · Data Analytics · Database Management · Healthcare Quality · Health Data Standards.",
  },
  {
    school: "Malla Reddy Institute of Pharmaceutical Sciences",
    place: "Hyderabad, India",
    degree: "Doctor of Pharmacy (Pharm.D)",
    period: "Aug 2017 – Jul 2023",
    notes:
      "Thesis: Evaluation and Management of Postoperative and Post-Anesthesia Concerns in Adults.",
  },
];

const certs = [
  "Upsilon Phi Delta Honor Society — Governors State University",
  "AICTE National Conference: Clinical Research & Pharmacovigilance (2023)",
  "Health Equity Training — Addressing healthcare disparities",
  "HIPAA Compliance Training — HIPAA Training US (2026)",
  "Virtual Training Program — Hospice & Palliative Care Network (2026)",
];

export const Education = () => (
  <Section
    id="education"
    eyebrow="Education & Recognition"
    title="Trained where care meets code"
  >
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <div className="space-y-5">
        {education.map((e, i) => (
          <div
            key={e.school}
            style={{ animationDelay: `${i * 120}ms` }}
            className="glass relative overflow-hidden rounded-3xl p-7 animate-fade-up"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary glow-ring">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl">{e.school}</h3>
                  <span className="text-xs uppercase tracking-widest text-primary">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.degree} · {e.place}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {e.notes}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-strong rounded-3xl p-7">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20 text-accent glow-ring">
          <Award className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl">Certifications & Honors</h3>
        <ul className="mt-5 space-y-3">
          {certs.map((c) => (
            <li
              key={c}
              className="glass-chip rounded-2xl px-4 py-3 text-sm text-foreground/85"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);
