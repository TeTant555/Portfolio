import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, SendHorizontal } from "lucide-react";

const channels = [
  {
    label: "Email",
    href: "mailto:hello@example.com",
    description: "Fastest response. Expect a reply in under a day.",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    description: "Best for role conversations and collaborations.",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    description: "See my active projects and experiments.",
    icon: Github,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-6 w-full max-w-(--breakpoint-xl) overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-20 bg-[radial-gradient(circle_at_top,_rgba(253,208,166,0.22),rgba(9,14,24,0)_65%)]"
    >
      <div className="flex flex-col gap-4 text-left sm:text-center">
        <Badge className="w-fit rounded-full bg-sec/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sec sm:mx-auto">
          Contact
        </Badge>
        <h2 className="text-balance text-3xl font-semibold text-tpri sm:text-4xl">Work with a single partner</h2>
        <p className="max-w-2xl text-sm text-tsec/90 sm:mx-auto sm:text-base">
          I lead every engagement personally—from kickoff calls to final handoff. Share a little context and we can scope the next steps together.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
          <CardHeader className="space-y-4 pb-0">
            <h3 className="text-lg font-semibold text-tpri">Prefer a quick note?</h3>
            <p className="text-sm text-tsec/80">
              Reach out through any of these links. Every message lands directly in my inbox—no handoffs, no assistants.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            {channels.map(({ icon: Icon, label, description, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 transition-colors hover:border-sec/40 hover:bg-sec/20"
              >
                <span className="mt-1 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sec">
                  <Icon className="size-4" />
                </span>
                <span className="space-y-1">
                  <span className="block text-sm font-semibold text-tpri">{label}</span>
                  <span className="block text-xs text-tsec/80">{description}</span>
                </span>
              </a>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/10 backdrop-blur-sm">
          <CardHeader className="space-y-2 pb-0">
            <h3 className="text-lg font-semibold text-tpri">Tell me about your project</h3>
            <p className="text-sm text-tsec/80">
              A short note with your timeline, goals, and team setup helps me prep before we talk.
            </p>
          </CardHeader>
          <CardContent className="pt-6">
            <form className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" name="name" placeholder="Ada Lovelace" autoComplete="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@product.co" autoComplete="email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="context">Project context</Label>
                <Input
                  id="context"
                  name="context"
                  placeholder="Dashboard redesign, developer platform, growth experiments..."
                  autoComplete="off"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Where are you today, and what would a strong outcome look like?"
                />
              </div>
              <div className="grid gap-2 text-xs text-tsec/80">
                <Button type="button" size="lg" className="justify-between rounded-full bg-pri text-bpri hover:bg-pri/90">
                  Send message
                  <SendHorizontal className="size-4" />
                </Button>
                <span>
                  Everything stays between us. I will only follow up about this project.
                </span>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
