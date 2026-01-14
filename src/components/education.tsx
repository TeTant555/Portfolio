import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

type EducationStop = {
  period: string;
  degree: string;
  institution: string;
  location: string;
  summary: string;
  highlights: string[];
};

const educationJourney: EducationStop[] = [
  {
    period: "2024 — Present",
    degree: "M.Sc. Human-Computer Interaction",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, USA (Remote)",
    summary:
      "Exploring the intersection of product design, accessibility, and immersive interfaces to craft empathetic digital experiences.",
    highlights: [
      "Graduate research assistant for the Augmented Experiences Lab.",
      "Co-led a usability audit for a healthcare dashboard adopted by three clinics.",
      "Built a design system prototype evaluated by 40+ participants.",
    ],
  },
  {
    period: "2019 — 2023",
    degree: "B.Sc. Computer Science",
    institution: "University of Lagos",
    location: "Lagos, Nigeria",
    summary:
      "Focused on distributed systems, inclusive design, and developer tooling while building community-driven projects at scale.",
    highlights: [
      "Graduated with First Class honours (GPA: 4.68/5.00).",
      "Founded the campus Developer Circle mentoring 80+ students.",
      "Won the 2022 Pan-African Smart City Hackathon (1st place).",
    ],
  },
  {
    period: "2017 — 2019",
    degree: "Diploma, Software Engineering",
    institution: "ALX Africa",
    location: "Hybrid",
    summary:
      "Accelerated engineering fundamentals through hands-on labs covering algorithms, infrastructure, and product delivery cycles.",
    highlights: [
      "Designed a microservices deployment playbook adopted by the cohort.",
      "Delivered peer workshops on accessible frontend architecture.",
      "Shipped a community talent portal serving 1,200 monthly users.",
    ],
  },
];

const Education = () => {
  return (
    <section className="relative mx-auto mt-10 w-full max-w-4xl px-6 pb-24">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl font-semibold text-pri md:text-4xl">
          Education Journey
        </h2>
        <p className="max-w-2xl text-sm text-tpri md:text-base">
          Chapters that shaped how I think about systems, people, and the
          meaningful, intuitive experiences we intentionally design and craft
          for them over time.
        </p>
      </div>

      <div className="relative mt-12">
        <span
          className="pointer-events-none absolute left-5 top-8 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-pri/70 via-pri/60 to-pri/10 md:block"
          aria-hidden
        />

        <div className="space-y-10 md:space-y-14">
          {educationJourney.map((stop) => (
            <article
              key={`${stop.period}-${stop.institution}`}
              className="relative md:pl-16"
            >
              <span
                className="absolute left-2.5 top-9 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-pri bg-bpri shadow-[0_0_0_6px_rgba(255,251,245,0.92)] md:flex"
                aria-hidden
              >
                <span className="h-2.5 w-2.5 rounded-full bg-pri" />
              </span>

              <Card className="border-white/10 bg-bsec/90 shadow-[0_25px_55px_-35px_rgba(38,70,83,0.55)] transition-transform hover:-translate-y-0.5">
                <CardHeader className="flex flex-col gap-1.5 pb-4">
                  <Badge className="w-fit rounded-full bg-sec/90 text-bpri shadow-sm">
                    {stop.period}
                  </Badge>
                  <h3 className="text-xl font-semibold text-tpri md:text-2xl">
                    {stop.degree}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pri/70 md:text-sm">
                    {stop.institution}
                  </p>
                  <span className="text-sm text-tsec/80">{stop.location}</span>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-tsec md:text-base md:leading-relaxed">
                  <p>{stop.summary}</p>
                  <ul className="space-y-2">
                    {stop.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-tsec/90"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pri/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
