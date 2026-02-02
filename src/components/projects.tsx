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
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Button } from "./ui/button";

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
  const projectCards = [
    {
      title: "Portfolio v2",
      description:
        "A fast, animated portfolio built with Vite + React, showcasing projects, experience, and contact flows.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto",
      tags: ["React", "TypeScript", "Vite", "Tailwind"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/portfolio",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard with KPI cards, order management, and role-based UI patterns.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-1.png?height=280&format=auto",
      tags: ["React", "Charts", "UI"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/ecommerce-dashboard",
    },
    {
      title: "Realtime Chat",
      description:
        "Realtime messaging experience with typing indicators, presence, and message history.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png?height=280&format=auto",
      tags: ["WebSockets", "Node.js", "React"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/realtime-chat",
    },
    {
      title: "AI Notes",
      description:
        "A note-taking app with smart summaries, search, and clean information architecture.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-4.png?height=280&format=auto",
      tags: ["Search", "UX", "TypeScript"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/ai-notes",
    },
    {
      title: "Design System Starter",
      description:
        "Reusable components, tokens, and patterns to ship consistent UI faster.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-5.png?height=280&format=auto",
      tags: ["shadcn/ui", "Tailwind", "Radix"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/design-system-starter",
    },
    {
      title: "Task Tracker",
      description:
        "A lightweight task tracker with filtering, quick add, and keyboard-first interactions.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-6.png?height=280&format=auto",
      tags: ["Productivity", "React", "UX"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/task-tracker",
    },
    {
      title: "Landing Page Kit",
      description:
        "High-conversion landing sections with responsive layouts and tasteful motion.",
      imageUrl:
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-7.png?height=280&format=auto",
      tags: ["Marketing", "Components", "Tailwind"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com/yourname/landing-kit",
    },
  ] as const;

  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const current = selectedIndex + 1;

  React.useEffect(() => {
    if (!api) {
      return;
    }
    const updateSelected = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    updateSelected();
    api.on("select", updateSelected);

    return () => {
      api.off("select", updateSelected);
    };
  }, [api]);

  const total = projectCards.length;
  const prevIndex = (selectedIndex - 1 + total) % total;
  const nextIndex = (selectedIndex + 1) % total;

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

      <div className="mt-10 mx-auto max-w-(--breakpoint-lg)">
        <Carousel
          className="w-full"
          opts={{ loop: true, align: "center" }}
          setApi={setApi}
        >
          <CarouselContent className="py-3">
            {projectCards.map((project, index) => {
              const isActive = index === selectedIndex;
              const isNeighbor = index === prevIndex || index === nextIndex;

              return (
                <CarouselItem
                  key={project.title}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className={cn(
                      "max-w-md pt-0 mx-auto transition-all duration-300 ease-out will-change-transform",
                      isActive && "scale-100 opacity-100 z-10",
                      !isActive && isNeighbor && "scale-85 opacity-55",
                      !isActive && !isNeighbor && "scale-85 opacity-55",
                    )}
                  >
                    <CardContent className="px-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="aspect-video h-70 rounded-t-xl object-cover"
                        loading="lazy"
                      />
                    </CardContent>

                    <CardHeader className="gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-sec text-bpri border-sec/80"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                    </CardHeader>

                    <CardFooter className="gap-3 max-sm:flex-col max-sm:items-stretch">
                      <Button asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="mt-3 text-center text-sm text-tsec">
          {current} / {projectCards.length}
        </div>
      </div>
    </section>
  );
};

export { Projects };
