import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import ThreeDCarousel, { type ThreeDCarouselItem } from "./lightswind/3d-carousel";

interface ProjectsProps {
	className?: string;
}

const items: ThreeDCarouselItem[] = [
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat"
  },
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat"
  },
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat"
  },
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description: "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat"
  }
];

const Projects = ({ className }: ProjectsProps) => {
	return (
		<section
			className={cn(
				"relative py-20 bg-bpri overflow-hidden",
				"before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(82,63,255,0.12),transparent_55%)]",
				"after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_50%,rgba(255,120,255,0.1),transparent_60%)]",
				"before:-z-10 after:-z-10",
				className
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
					<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-tpri">
						Projects that ship value
					</h2>
					<p className="text-lg text-tsec">
						A snapshot of products built with thoughtful architecture, delightful
						UX, and measurable outcomes.
					</p>
				</div>
			</div>

      <div className="mt-10">
        <ThreeDCarousel 
        items={items}
        autoRotate={true}
        rotateInterval={4000}
        cardHeight={500}
      />
      </div>
		</section>
	);
};

export { Projects };
