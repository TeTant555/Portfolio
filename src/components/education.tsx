import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { motion } from "motion/react";
import {
  educationCardContentItem,
  educationCardContentStagger,
  educationCardVariants,
  educationDotVariants,
  educationHeaderItem,
  educationHeaderStagger,
  educationListVariants,
  educationSectionVariants,
  educationTimelineVariants,
} from "@/motion/educationVariants";

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
    period: "2023 — 2024",
    degree: "NCC Level 5 Diploma in Computing",
    institution: "NCC Education",
    location: "No. 36/38, Alanpya Pagoda Road, Mingalar Taung Nyunt Township, Yangon",
    summary:
      "Advanced studies in software design, databases, and systems development, with an emphasis on building reliable applications and shipping projects to specification.",
    highlights: [
      "Delivered a capstone software project with requirements, implementation, and testing documentation.",
      "Designed and implemented a relational database solution (schema, constraints, queries, and optimisation).",
      "Built a full-stack web application demonstrating secure authentication and clean API design.",
    ],
  },
  {
    period: "2022 — 2023",
    degree: "NCC Level 4 Diploma in Computing",
    institution: "NCC Education",
    location: "No. 36/38, Alanpya Pagoda Road, Mingalar Taung Nyunt Township, Yangon",
    summary:
      "Built a strong foundation across programming, computer systems, networks, and the software development lifecycle, focusing on practical labs and real-world problem solving.",
    highlights: [
      "Developed core programming skills through structured exercises in problem solving, data structures, and debugging.",
      "Applied systems analysis methods to translate user needs into clear functional and non-functional requirements.",
      "Created responsive web interfaces and implemented basic backend logic for data-driven features.",
    ],
  },
];

const Education = () => {
  return (
    <motion.section
      className="relative mx-auto mt-10 w-full max-w-4xl px-6 pb-24"
      variants={educationSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="flex flex-col items-center gap-3 text-center"
        variants={educationHeaderStagger}
      >
        <motion.h2
          className="text-3xl font-semibold text-pri md:text-5xl halant-regular"
          variants={educationHeaderItem}
        >
          Education Journey
        </motion.h2>
        <motion.p
          className="max-w-2xl text-sm text-tpri md:text-base"
          variants={educationHeaderItem}
        >
          Chapters that shaped how I think about systems, people, and the
          meaningful, intuitive experiences we intentionally design and craft
          for them over time.
        </motion.p>
      </motion.div>

      <div className="relative mt-12">
        <motion.span
          className="pointer-events-none absolute left-5 top-8 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-pri/70 via-pri/60 to-pri/10 md:block"
          aria-hidden
          variants={educationTimelineVariants}
        />

        <motion.div
          className="space-y-10 md:space-y-14"
          variants={educationListVariants}
        >
          {educationJourney.map((stop) => (
            <motion.article
              key={`${stop.period}-${stop.institution}`}
              className="relative md:pl-16"
              variants={educationCardVariants}
            >
              <motion.span
                className="absolute left-2.5 top-9 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-pri bg-bpri shadow-[0_0_0_6px_rgba(255,251,245,0.92)] md:flex"
                aria-hidden
                variants={educationDotVariants}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-pri" />
              </motion.span>

              <Card className="border-white/10 bg-bsec/90 shadow-[0_25px_55px_-35px_rgba(38,70,83,0.55)] transition-transform hover:-translate-y-0.5">
                <CardHeader className="flex flex-col gap-1.5 pb-4">
                  <motion.div className="space-y-0.5" variants={educationCardContentStagger}>
                    <motion.div variants={educationCardContentItem}>
                      <Badge className="w-fit font-semibold rounded-full bg-sec/90 mb-3 text-bpri shadow-sm">
                        {stop.period}
                      </Badge>
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold text-tpri md:text-2xl"
                      variants={educationCardContentItem}
                    >
                      {stop.degree}
                    </motion.h3>
                    <motion.p
                      className="text-xs font-semibold uppercase tracking-[0.24em] text-pri/70 md:text-sm"
                      variants={educationCardContentItem}
                    >
                      {stop.institution}
                    </motion.p>
                    <motion.span
                      className="text-sm text-tsec/80"
                      variants={educationCardContentItem}
                    >
                      {stop.location}
                    </motion.span>
                  </motion.div>
                </CardHeader>
                <CardContent className="text-sm text-tsec md:text-base md:leading-relaxed">
                  <motion.div
                    className="space-y-4"
                    variants={educationCardContentStagger}
                  >
                    <motion.p variants={educationCardContentItem}>
                      {stop.summary}
                    </motion.p>
                    <motion.ul
                      className="space-y-2"
                      variants={educationCardContentStagger}
                    >
                      {stop.highlights.map((highlight) => (
                        <motion.li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-tsec/90"
                          variants={educationCardContentItem}
                        >
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pri/70" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
