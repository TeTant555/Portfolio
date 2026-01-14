import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import ThreeDCarousel, { type ThreeDCarouselItem } from "./lightswind/3d-carousel";
import Retail from "@/assets/retailDesktop.png"
import Atm from "@/assets/atmDesktop.png"
import Recipe from "@/assets/recipe.png"
import Portfolio from "@/assets/portfolio.png"

interface ProjectsProps {
	className?: string;
}

const items: ThreeDCarouselItem[] = [
  {
  id: 1,
  title: "",
  brand: "",
  description: "A robust e-commerce ecosystem specifically tailored for the thrift market industry, enabling users to list pre-owned items, manage vintage inventories, and facilitate sustainable fashion cycles through a secure and highly responsive digital marketplace experience.",
  tags: ["React.js", "Redux", "ASP.net", "Tanstack Query", "Tailwind CSS", "ShadCN"],
  imageUrl: Retail,
  githubUrl: "https://github.com/your-username/thrift-marketplace",
  link: ""
  },
  {
    id: 1,
    title: "",
    brand: "",
    description: "A high-fidelity banking simulation platform developed to provide comprehensive training for financial personnel, focusing on end-to-end automated teller machine operations, secure cash handling protocols, and complex transaction management within a safe environment.",
    tags: ["Vue.js", "ASP.net", "Tanstack Query", "Tailwind CSS", "ShadCN"],
    imageUrl: Atm,
    githubUrl: "https://github.com/your-username/banking-simulator",
    link: ""
  },
  {
    id: 1,
    title: "",
    brand: "",
    description: "A sophisticated full-stack recipe management application engineered as a final capstone project for the NCC Level 5 Diploma in Computing, demonstrating mastery of complex database architectures, user authentication, and advanced frontend state management techniques.",
    tags: ["React.js", "Laravel", "Tanstack Query", "Tailwind CSS", "ShadCN"],
    imageUrl: Recipe,
    githubUrl: "https://github.com/your-username/recipe-manager",
    link: ""
  },
  {
    id: 1,
    title: "",
    brand: "",
    description: "A professional digital portfolio and career showcase platform meticulously designed to highlight technical competencies, project history, and software engineering growth, originally built to demonstrate industry readiness and creative problem-solving to potential employers.",
    tags: ["React.js", "Bootstrap"],
    imageUrl: Portfolio,
    githubUrl: "https://github.com/your-username/portfolio",
    link: "https://tetant555.github.io/Tetant-Portfolio/"
  }];

const Projects = ({ className }: ProjectsProps) => {
	return (
		<section
			className={cn(
				"py-20 bg-bpri",
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
						Projects that Ship Real Value
					</h2>
					<p className="text-lg text-tsec">
						A deep dive into full-stack applications where thoughtful architecture 
            meets high-performance code to solve complex, real-world challenges.
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
