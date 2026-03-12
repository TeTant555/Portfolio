import Lottie from "@/animation/lottie";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  heroBadge,
  heroButtons,
  heroContainer,
  heroCopy,
  heroMedia,
} from "@/motion/heroVariants";
import { motion } from "motion/react";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";
import developer from "../animation/developer.json";

type HeroProps = {
  onProjectClick: () => void;
  onAboutClick: () => void;
}

export default function Hero({ onProjectClick, onAboutClick }: HeroProps) {

  return (
    <section className="flex items-center justify-center bg-bpri w-full">
      <motion.div
        className="max-w-[var(--breakpoint-xl)] mx-auto grid lg:grid-cols-2 gap-12 px-6 pt-18"
        initial="hidden"
        animate="show"
        variants={heroContainer}
      >
        <motion.div variants={heroContainer}>
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={heroBadge}
          >
            <Badge
              variant="secondary"
              asChild
              className="
                group
                rounded-full py-1
                bg-sec/85 border-sec text-bpri
                transition-all duration-300 ease-out
                hover:!bg-sec
                hover:scale-[1.05] z-20
              "
            >
              <Link
                to="#"
                className="flex relative items-center gap-1 transition-all duration-300 group-hover:text-tsec"
              >
                <span className="transition-all duration-300 font-semibold group-hover:text-[1.02em]">
                  Available for Full-Time Roles
                </span>

                <ArrowUpRight
                  className="
                    size-4
                    transition-transform duration-300
                    group-hover:translate-y-[-2px]
                    group-hover:animate-bounce
                  "
                />
              </Link>
            </Badge>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start"
            variants={heroCopy}
          >
            <h1 className="mt-5.5 text-tpri max-w-[26ch] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2] tracking-[-0.03em]">
              <span className="block whitespace-normal whitespace-wrap text-center lg:text-left halant-regular">
                Full-Stack Developer Building Modern Apps
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start"
            variants={heroCopy}
          >
            <p className="mt-6 max-w-[60ch] text-tsec text-wrap sm:text-lg text-center lg:text-left">
              Hello, I'm <b className="text-sec">Thet Tetant Aung</b>. I design and develop scalable, user-focused web applications using
              modern technologies. With above <b className="text-sec">one year</b> of experience, I focus on clean
              code, performance, and real-world solutions
            </p>
          </motion.div>

          <motion.div
            className="mt-7 flex items-center justify-center lg:justify-start gap-4 md:gap-7 lg:gap-6"
            variants={heroButtons}
          >
            <Button
              size="lg"
              onClick={onProjectClick}
              className="rounded-full shadow-md border-0 relative z-20 text-bpri bg-pri/85 hover:bg-pri hover:text-bpri h-10 w-38 transition-all duration-300 hover:scale-105"
            >
              View Projects <ArrowUpRight className="h-6! w-5!" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onAboutClick}
              className="rounded-full shadow-md border-0 relative z-20 text-bsec bg-sec/85 hover:bg-sec hover:text-bsec h-10 w-38 transition-all duration-300 hover:scale-105"
            >
              <CirclePlay className="h-6! w-5! text-bsec hover:text-tsec/90" />{" "}
              About Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-start"
          variants={heroMedia}
        >
          <div className="lg:w-full md:w-3/4 h-full aspect-video overflow-hidden rounded-xl border-0 border-border/70">
            <Lottie
              className="w-full h-full scale-110"
              animationData={developer}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
