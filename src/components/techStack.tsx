import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Lottie from "@/animation/lottie";
import code from "../animation/code.json";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import {
  techStackButtonVariants,
  techStackCardItemVariants,
  techStackCardListVariants,
  techStackColumnVariants,
  techStackLottieVariants,
  techStackRightColumnVariants,
  techStackSectionVariants,
} from "@/motion/techStackVariants";

const DATA = [
  {
    id: 1,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript/TypeScript",
    description:
      "Modern ES6+ JavaScript and type-safe TypeScript for robust applications.",
    color: "from-yellow-400/20 to-blue-600/20",
  },
  {
    id: 2,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React.js",
    description:
      "Building dynamic and interactive user interfaces with React and its ecosystem.",
    color: "from-cyan-400/20 to-blue-500/20",
  },
  {
    id: 3,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    title: "Vue.js",
    description:
      "Progressive framework for building performance and maintainable web apps.",
    color: "from-green-400/20 to-emerald-600/20",
  },
  {
    id: 4,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    title: "C#",
    description:
      "Object-oriented programming with C# for enterprise solutions.",
    color: "from-purple-400/20 to-indigo-600/20",
  },
  {
    id: 5,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    title: "ASP.NET",
    description:
      "Developing scalable web applications and APIs with ASP.NET framework.",
    color: "from-blue-500/20 to-purple-600/20",
  },
  /* {
    id: 6,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description:
      "Server-side JavaScript runtime for building fast and scalable network applications.",
    color: "from-green-500/20 to-lime-600/20",
  },
  {
    id: 7,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    description:
      "Full-stack React framework for production-grade applications with SSR and SSG.",
    color: "from-gray-700/20 to-slate-900/20",
  }, */
];

interface Integration3Props {
  className?: string;
  onProjectClick: () => void;
}

const TechStack = ({ className, onProjectClick }: Integration3Props) => {
  
  return (
    <motion.section
      className={cn(className)}
      variants={techStackSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-[var(--breakpoint-xl)] w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 pt-13 relative z-10">
        <motion.div className="mx-auto" variants={techStackColumnVariants}>
          <h1 className="my-6 font-bold text-pretty text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] text-tpri halant-regular">
            Tech Stack
          </h1>
          <p className="mb-8 max-w-3xl text-tsec sm:text-lg text-center lg:text-left">
            Builds reliable, high-quality software with modern tools, focused on
            usability, performance, and long-term value
          </p>

          <motion.div
            className="flex flex-col justify-center gap-3"
            variants={techStackCardListVariants}
          >
            {DATA.map(({ id, icon, title, description, color }) => (
              <motion.div
                key={id}
                variants={techStackCardItemVariants}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-xl",
                  "bg-gradient-to-r transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02] hover:-translate-x-1",
                  "border border-transparent hover:border-pri/20",
                  color,
                )}
              >
                <div className="h-12 w-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <img
                    src={icon}
                    alt={title}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-tpri group-hover:text-pri transition-colors halant-semibold">
                    {title}
                  </div>
                  <div className="text-sm text-tsec">{description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-6"
          variants={techStackRightColumnVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center overflow-hidden rounded-xl"
            variants={techStackLottieVariants}
          >
            <Lottie className="min-w-full min-h-full" animationData={code} />
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            className="flex flex-col mt-3 sm:flex-row gap-5 items-center justify-center"
            variants={techStackButtonVariants}
          >
            <Button
              size="lg"
              className="relative z-20 rounded-md sm:rounded-full bg-pri/85 hover:bg-pri text-bpri shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-70 sm:w-auto"
              asChild
            >
              <a
                href="https://github.com/TeTant555"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View more on GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onProjectClick}
              className="relative z-20 rounded-md sm:rounded-full bg-sec/85 border-0 hover:bg-sec text-bpri hover:text-bpri shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-70 sm:w-auto"
            >
              <ExternalLink className="h-5 w-5" />
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { TechStack };
