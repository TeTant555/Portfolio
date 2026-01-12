import { cn } from "@/lib/utils";
import Lottie from "@/animation/lottie";
import code from "../animation/code.json";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
      "Progressive framework for building performant and maintainable web apps.",
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
  {
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
  },
];

interface Integration3Props {
  className?: string;
}

const TechStack = ({ className }: Integration3Props) => {
  return (
    <section
      className={cn("py-10 bg-bpri relative overflow-hidden", className)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-pri/20 to-sec/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-sec/20 to-pri/20 rounded-full blur-3xl"></div>

      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 relative z-10">
        <div>
          <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl text-tpri">
            Tech Stack
          </h1>
          <h2 className="mb-8 max-w-3xl text-tsec lg:text-2xl">
            Crafting modern solutions with cutting-edge technologies
          </h2>

          <div className="flex flex-col justify-center gap-3">
            {DATA.map(({ id, icon, title, description, color }) => (
              <div
                key={id}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-xl",
                  "bg-gradient-to-r transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02] hover:-translate-x-1",
                  "border border-transparent hover:border-pri/20",
                  color
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
                  <div className="text-lg font-semibold text-tpri group-hover:text-pri transition-colors">
                    {title}
                  </div>
                  <div className="text-sm text-tsec">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="inline-flex items-center justify-center overflow-hidden rounded-xl">
            <Lottie className="min-w-full min-h-full" animationData={code} />
          </div>

          {/* GitHub CTA */}
          <div className="flex flex-col mt-3 sm:flex-row gap-5 items-center justify-center">
            <Button
              size="lg"
              className="rounded-full bg-pri hover:bg-pri/90 text-bpri shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-50 sm:w-auto"
              asChild
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-sec border-0 hover:bg-sec/70 text-bpri hover:text-bpri shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 min-w-50 sm:w-auto"
              asChild
            >
              <a href="#projects">
                <ExternalLink className="h-5 w-5" />
                Explore Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TechStack };
