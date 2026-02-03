import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import atm from "@/assets/atmDesktop.png";
import portfolio from "@/assets/portfolio.png";
import recipe from "@/assets/recipe.png";
import retail from "@/assets/retailDesktop.png";

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
  const isMobile = useIsMobile();
  const maxVisibleTags = isMobile ? 2 : 3;

  const projectCards = [
    {
      title: "Retail Management System",
      description:
        "A production-grade retail system developed at ThetYS, handling core business flows with scalable API design and modern React state management.",
      imageUrl: retail,
      tags: ["ASP.NET Core", "React", "Redux", "TanStack Query", "Tailwind", "shadCN", "SQL"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/retail-system",
    },
    {
      title: "Personal Portfolio",
      description:
        "A career-focused portfolio showcasing my journey before becoming a junior developer, highlighting projects, skills, and animations.",
      imageUrl: portfolio,
      tags: ["React", "Bootstrap", "Framer Motion", "EmailJS", "React Router Dom"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/portfolio",
    },
    {
      title: "ATM Management System",
      description:
        "An internship training project built at MST University, focusing on full-stack fundamentals, API integration, and responsive UI design.",
      imageUrl: atm,
      tags: ["Vue.js", "ASP.NET Core", "TanStack Query", "Tailwind", "shadCN", "SQL"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/atm-system",
    },
    {
      title: "Recipe Management Platform",
      description:
        "A final-year diploma project featuring a full-stack recipe platform with RESTful APIs, database design, and modern frontend architecture.",
      imageUrl: recipe,
      tags: ["Laravel", "MySQL", "React", "TanStack Query", "Tailwind", "shadCN"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/recipe-platform",
    },
  ] as const;

  const total = projectCards.length;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const goPrev = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const swipeStartXRef = React.useRef<number | null>(null);
  const swipeEndXRef = React.useRef<number | null>(null);
  const isSwipingRef = React.useRef(false);
  const minSwipeDistance = 50;

  const beginSwipe = (clientX: number) => {
    isSwipingRef.current = true;
    swipeStartXRef.current = clientX;
    swipeEndXRef.current = null;
  };

  const moveSwipe = (clientX: number) => {
    if (!isSwipingRef.current) return;
    swipeEndXRef.current = clientX;
  };

  const endSwipe = () => {
    if (!isSwipingRef.current) return;

    const start = swipeStartXRef.current;
    const end = swipeEndXRef.current;
    isSwipingRef.current = false;
    swipeStartXRef.current = null;
    swipeEndXRef.current = null;

    if (start === null || end === null) return;

    const distance = start - end;

    if (distance > minSwipeDistance) {
      goNext();
    } else if (distance < -minSwipeDistance) {
      goPrev();
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const isInteractiveTarget = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return false;
    return Boolean(
      target.closest(
        "button, a, input, textarea, select, summary, [role='button'], [role='link']",
      ),
    );
  };

  const getCardAnimationClass = (index: number) => {
    if (index === activeIndex) {
      return "translate-x-0 scale-100 opacity-100 z-20";
    }
    if (index === nextIndex) {
      return "translate-x-[14%] sm:translate-x-[30%] md:translate-x-[42%] lg:translate-x-[52%] scale-95 opacity-60 z-10";
    }
    if (index === prevIndex) {
      return "translate-x-[-14%] sm:translate-x-[-30%] md:translate-x-[-42%] lg:translate-x-[-52%] scale-95 opacity-60 z-10";
    }
    return "scale-90 opacity-0 pointer-events-none";
  };

  return (
    <section
      className={cn(
        "pt-20 bg-bpri",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(82,63,255,0.12),transparent_55%)]",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_50%,rgba(255,120,255,0.1),transparent_60%)]",
        "before:-z-10 after:-z-10",
        className,
      )}
      id="projects"
    >
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 flex flex-col gap-14">
        <div className="flex flex-col gap-4 text-center lg:text-left lg:max-w-3xl">
          <Badge
            variant="secondary"
            className="mx-auto lg:mx-0 bg-sec text-bpri border-sec/80 shadow-md"
          >
            Featured Projects
          </Badge>
          <h2 className="halant-regular text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold tracking-tight text-tpri">
            Projects that Ship Real Value
          </h2>
          <p className="text-lg text-tsec">
            A deep dive into full-stack applications where thoughtful
            architecture meets high-performance code to solve complex,
            real-world challenges.
          </p>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-(--breakpoint-xl)">
        <div
          className="relative w-full overflow-hidden rounded-3xl bg-bpri backdrop-blur"
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects carousel"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              goPrev();
            }
            if (e.key === "ArrowRight") {
              e.preventDefault();
              goNext();
            }
          }}
        >
          <div
            className="relative flex min-h-130 sm:min-h-140 items-center justify-center px-3 sm:px-6"
            style={{ touchAction: "pan-y" }}
            onPointerDown={(e) => {
              if (isInteractiveTarget(e.target)) return;
              if (e.pointerType === "mouse" && e.button !== 0) return;
              (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
              beginSwipe(e.clientX);
            }}
            onPointerMove={(e) => {
              moveSwipe(e.clientX);
            }}
            onPointerUp={() => {
              endSwipe();
            }}
            onPointerCancel={() => {
              endSwipe();
            }}
          >
            {projectCards.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "absolute top-4 sm:top-6 w-full max-w-88 sm:max-w-md transform transition-all duration-500 will-change-transform",
                  getCardAnimationClass(index),
                )}
              >
                <Card
                  className={cn(
                    "pt-0 mx-auto overflow-hidden shadow-2xl border-0 bg-bsec",
                    index !== activeIndex && "pointer-events-none",
                  )}
                >
                  <CardContent className="px-0">
                    <div className="w-full aspect-video overflow-hidden h-auto">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>

                  <CardHeader className="gap-3">
                    <div className="flex flex-nowrap gap-2 overflow-hidden">
                      {project.tags.slice(0, maxVisibleTags).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={cn(
                            "bg-sec/90 text-bpri border-3 border-sec border-dotted w-auto px-3",
                            "min-w-0 max-w-36 sm:max-w-40 truncate",
                          )}
                        >
                          {tag}
                        </Badge>
                      ))}

                      {project.tags.length > maxVisibleTags && (
                        <Badge
                          variant="secondary"
                          className="bg-sec/90 text-bpri border-3 border-sec border-dotted w-auto px-3"
                        >
                          +{project.tags.length - maxVisibleTags}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <CardTitle
                        className={cn(
                          "halant-regular text-xl text-tpri",
                          "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical]",
                          "[-webkit-line-clamp:2]",
                          "min-h-13",
                        )}
                      >
                        {project.title}
                      </CardTitle>
                      <CardDescription
                        className={cn(
                          "mt-2 text-tsec leading-relaxed",
                          "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical]",
                          "[-webkit-line-clamp:4] sm:[-webkit-line-clamp:3]",
                          "min-h-23 sm:min-h-17",
                        )}
                      >
                        {project.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                    <Button className="bg-pri hover:bg-pri/90" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 hover:text-white"
                      asChild
                    >
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>

                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div className="relative z-30 pb-6 pt-3 flex items-center justify-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={goPrev}
              aria-label="Previous project"
              className="rounded-full bg-bpri/40 hover:bg-bpri/60 border-sec/30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center justify-center gap-2">
              {projectCards.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full transition-all duration-200",
                      "bg-sec/35 hover:bg-sec/60",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sec/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bpri",
                      isActive && "w-7 bg-sec",
                    )}
                  />
                );
              })}
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={goNext}
              aria-label="Next project"
              className="rounded-full bg-bpri/40 hover:bg-bpri/60 border-sec/30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Projects };
