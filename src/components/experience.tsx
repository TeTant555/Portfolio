import ExperienceList, { type Job, Resend, Supabase } from "./ui/experienceList"
import { SquareDashedBottomCode } from "lucide-react"

const jobs: Job[] = [
  {
    company: "MST College",
    title: "Software Developer Internship",
    logo: <Resend className="h-8 w-8" />,
    job_description:
      "Drive the development of our email infrastructure dashboard with performant, accessible web experiences that scale globally.",
    salary: "Feb 1, 2024 - Aug 21, 2024",
    location: "Alanpya Pagodaa Street, Yangon",
    remote: "No",
    job_time: "Full-time",
  },
  {
    company: "Freelance Developer",
    title: "Freelance Software Developer",
    logo: <SquareDashedBottomCode className="h-8 w-8" />,
    job_description:
      "Design data replication strategies, ship Rust services, and ensure low-latency access across our edge database network.",
    salary: "April 2024 - Present",
    location: "Remote",
    remote: "Yes",
    job_time: "Part-time",
  },
  {
    company: "Fusion Solution Co., Ltd",
    title: "Software Developer",
    logo: <Supabase className="h-8 w-8" />,
    job_description:
      "Create tutorials, sample apps, and conference talks that help developers succeed with the Supabase platform.",
    salary: "Dec 1, 2024 - Present",
    location: "Mya Khwar Nyo Housing, Yangon",
    remote: "No",
    job_time: "Full-time",
  },
]

const Experience = () => {
  return (
    <section className="relative mx-auto w-full max-w-4xl px-6 mt-10 pb-15">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-semibold text-pri md:text-5xl halant-regular">
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
