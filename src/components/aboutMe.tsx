import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, Globe2, Code2Icon, Brain } from "lucide-react";
import { motion } from "motion/react";
import {
  aboutContentGrid,
  aboutFocusItem,
  aboutFocusList,
  aboutHeaderItem,
  aboutHeaderStagger,
  aboutListItem,
  aboutListStagger,
  aboutProfileCard,
  aboutSectionVariants,
  aboutTagItem,
  aboutTagStagger,
} from "@/motion/aboutMeVariants";

const focusAreas = [
  {
    icon: Code2Icon,
    title: "Full-stack Delivery",
    description: "Support both front-end and back-end work, shipping practical improvements and stable features.",
    tags: ["Front-end", "Back-end", "Bug Fixes"],
  },
  {
    icon: Globe2,
    title: "Professional Practice",
    description: "Learn and apply modern tools, workflows, and collaboration habits in real product teams.",
    tags: ["Code Quality", "Teamwork", "Delivery"],
  },
  {
    icon: Brain,
    title: "Growth Mindset",
    description: "Keep improving through feedback, steady practice, and a focus on clean, maintainable code.",
    tags: ["Learning", "Maintainability", "Ownership"],
  },
];

const strengths = [
  { label: "Industry experience", value: "2 years" },
  { label: "Academic milestones", value: "NCC Level 4 & 5" },
  { label: "Focus", value: "Clean, maintainable code" },
];

const stackHighlights = ["Programming", "Software Design", "Problem Solving", "Front-end", "Back-end", "Team Collaboration"];

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="relative mx-auto my-18 w-full max-w-(--breakpoint-xl) overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(253,208,166,0.22),rgba(9,14,24,0)_65%)] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 min-h-[520px]"
      variants={aboutSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="relative z-10 flex flex-col gap-4 text-left sm:text-center"
        variants={aboutHeaderStagger}
      >
        <motion.div variants={aboutHeaderItem}>
          <Badge className="w-fit rounded-full bg-sec/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sec sm:mx-auto">
            About
          </Badge>
        </motion.div>
        <motion.h2
          className="text-balance text-4xl font-semibold text-sec sm:text-5xl halant-regular"
          variants={aboutHeaderItem}
        >
          Motivated developer with strong academic and industry foundations
        </motion.h2>
        <motion.p
          className="max-w-3xl text-sm text-tsec/90 sm:mx-auto sm:text-base"
          variants={aboutHeaderItem}
        >
          A motivated software developer with a strong academic background and two years of industry experience.
          Completed the NCC Level 4 Diploma in Computing and NCC Level 5 Diploma in Computing, building solid
          foundations in programming, software design, and problem-solving.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        variants={aboutContentGrid}
      >
        <motion.div variants={aboutProfileCard}>
          <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-col gap-6 pb-0 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="size-16 border border-white/10 bg-white/10 text-lg font-semibold text-sec">
                  <AvatarFallback className="bg-sec/10 text-sec">SD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl text-tpri">Software Developer</CardTitle>
                  <p className="text-sm text-tsec/80">Fullstack Developer • 2 years experience</p>
                </div>
              </div>
              <div className="grid gap-3 text-left sm:text-right">
                {strengths.map((item) => (
                  <p key={item.label} className="text-sm text-tsec/80">
                    <span className="mr-2 font-semibold text-tpri">{item.value}</span>
                    {item.label}
                  </p>
                ))}
              </div>
            </CardHeader>
            <CardContent className="mt-8 space-y-8">
              <div className="grid gap-4">
                <h3 className="text-2xl halant-regular font-semibold text-sec">What partners count on</h3>
                <motion.ul className="space-y-3 text-md text-tsec" variants={aboutListStagger}>
                  <motion.li className="flex items-start gap-3" variants={aboutListItem}>
                    <CheckCircle2 className="mt-[2px] size-4 text-sec" />
                    <span>
                      Contributed at FusionSol Company Limited as a Fullstack Developer, delivering reliable solutions with the team.
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={aboutListItem}>
                    <CheckCircle2 className="mt-[2px] size-4 text-sec" />
                    <span>
                      Supported both front-end and back-end development, fixing issues and improving features.
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start gap-3" variants={aboutListItem}>
                    <CheckCircle2 className="mt-[2px] size-4 text-sec" />
                    <span>
                      Focused on continuous growth, writing clean code, and delivering practical results for users and businesses.
                    </span>
                  </motion.li>
                </motion.ul>
              </div>

              <Separator className="bg-white/10" />

              <div className="grid gap-3">
                <h3 className="text-2xl halant-regular font-semibold text-sec">Stack highlights</h3>
                <motion.div className="flex flex-wrap gap-2" variants={aboutTagStagger}>
                  {stackHighlights.map((item) => (
                    <motion.span key={item} variants={aboutTagItem}>
                      <Badge variant="outline" className="border-white/20 bg-transparent text-xs text-tsec/90">
                        {item}
                      </Badge>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="grid gap-6" variants={aboutFocusList}>
          {focusAreas.map(({ icon: Icon, title, description, tags }) => (
            <motion.div key={title} variants={aboutFocusItem}>
              <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <span className="flex size-10 items-center justify-center text-sec">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <CardTitle className="text-lg text-tpri">{title}</CardTitle>
                    <p className="mt-2 text-md text-tsec">{description}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} className="rounded-full bg-sec/15 px-3 py-1 text-xs font-medium text-sec">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
