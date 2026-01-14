import ExperienceList, { type Job, Resend, Supabase, Turso } from "./ui/experienceList"

const jobs: Job[] = [
  {
    company: "Resend",
    title: "Senior Frontend Engineer",
    logo: <Resend className="h-8 w-8" />,
    job_description:
      "Drive the development of our email infrastructure dashboard with performant, accessible web experiences that scale globally.",
    salary: "$150k - $190k",
    location: "San Francisco, CA",
    remote: "Hybrid",
    job_time: "Full-time",
  },
  {
    company: "Turso",
    title: "Distributed Systems Engineer",
    logo: <Turso className="h-8 w-8" />,
    job_description:
      "Design data replication strategies, ship Rust services, and ensure low-latency access across our edge database network.",
    salary: "$140k - $175k",
    location: "Remote",
    remote: "Yes",
    job_time: "Full-time",
  },
  {
    company: "Supabase",
    title: "Developer Advocate",
    logo: <Supabase className="h-8 w-8" />,
    job_description:
      "Create tutorials, sample apps, and conference talks that help developers succeed with the Supabase platform.",
    salary: "$110k - $150k",
    location: "Austin, TX",
    remote: "Hybrid",
    job_time: "Full-time",
  },
  {
    company: "Open Source Collective",
    title: "Community Engineer",
    logo: <Resend className="h-8 w-8" />,
    job_description:
      "Support maintainers, build automation around contributor workflows, and keep the ecosystem running smoothly.",
    salary: "$95k - $125k",
    location: "Seattle, WA",
    remote: "Hybrid",
    job_time: "Contract",
  },
]

const Experience = () => {
  return (
    <section className="relative mx-auto w-full max-w-4xl px-6 mt-10 pb-15">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl font-semibold text-pri md:text-4xl">
          Professional Experience
        </h2>
        <p className="max-w-2xl text-sm text-tpri md:text-base">
          Roles that highlight product craftsmanship, developer advocacy, and
          distributed systems expertise across fast-paced teams.
        </p>
      </div>
      <ExperienceList className="mt-8" jobs={jobs} />
    </section>
  )
}

export default Experience
