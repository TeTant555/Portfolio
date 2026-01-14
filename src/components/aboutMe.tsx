import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, Globe2, Lightbulb, UsersRound } from "lucide-react";

const focusAreas = [
  {
    icon: Lightbulb,
    title: "Product Engineering",
    description: "Shape concepts into production-ready features with pragmatic TypeScript, React, and Node tooling.",
    tags: ["React", "TypeScript", "Design Systems"],
  },
  {
    icon: Globe2,
    title: "Platform Foundations",
    description: "Build resilient APIs, CI pipelines, and edge-ready deployments that scale as the roadmap grows.",
    tags: ["Next.js", "Vite", "CI/CD"],
  },
  {
    icon: UsersRound,
    title: "Collaboration",
    description: "Partner with PMs, designers, and stakeholders—shipping iteratively while keeping quality visible.",
    tags: ["Lead Reviews", "Mentorship", "Stakeholder Syncs"],
  },
];

const strengths = [
  { label: "Projects delivered", value: "40+" },
  { label: "Team sizes supported", value: "2-30" },
  { label: "Time to first ship", value: "< 2 weeks" },
];

const stackHighlights = ["React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS"];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative mx-auto mt-16 w-full max-w-(--breakpoint-xl) overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-[-45%] z-[-1] h-[420px] rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(138,180,248,0.22),rgba(9,14,24,0)_70%)]"
      />

      <div className="flex flex-col gap-4 text-left sm:text-center">
        <Badge className="w-fit rounded-full bg-sec/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sec sm:mx-auto">
          About
        </Badge>
        <h2 className="text-balance text-3xl font-semibold text-tpri sm:text-4xl">
          Building calm, maintainable products with the people who care
        </h2>
        <p className="max-w-3xl text-sm text-tsec/90 sm:mx-auto sm:text-base">
          I architect and ship interfaces that stay resilient in production. From crafting moment-to-moment UX flows to
          aligning roadmap bets with engineering realities, I love the intersection where design empathy meets clean,
          modern code.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardHeader className="flex flex-col gap-6 pb-0 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="size-16 border border-white/10 bg-white/10 text-lg font-semibold text-sec">
                <AvatarFallback className="bg-sec/10 text-sec">JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl text-tpri">Jhon Doe</CardTitle>
                <p className="text-sm text-tsec/80">Full-stack engineer • Remote first</p>
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
              <h3 className="text-lg font-semibold text-tpri">What partners count on</h3>
              <ul className="space-y-3 text-sm text-tsec/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-[2px] size-4 text-sec" />
                  <span>
                    Translate fuzzy briefs into technical plans, grooming stories and risk-flagging before sprint one kicks off.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-[2px] size-4 text-sec" />
                  <span>
                    Keep accessibility, performance budgets, and observability tooling wired in from the first commit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-[2px] size-4 text-sec" />
                  <span>
                    Communicate calmly and consistently—weekly demos, async updates, and docs people actually reference.
                  </span>
                </li>
              </ul>
            </div>

            <Separator className="bg-white/10" />

            <div className="grid gap-3">
              <h3 className="text-lg font-semibold text-tpri">Stack highlights</h3>
              <div className="flex flex-wrap gap-2">
                {stackHighlights.map((item) => (
                  <Badge key={item} variant="outline" className="border-white/20 bg-transparent text-xs text-tsec/90">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          {focusAreas.map(({ icon: Icon, title, description, tags }) => (
            <Card key={title} className="border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <span className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sec">
                  <Icon className="size-4" />
                </span>
                <div>
                  <CardTitle className="text-lg text-tpri">{title}</CardTitle>
                  <p className="mt-2 text-sm text-tsec/80">{description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
