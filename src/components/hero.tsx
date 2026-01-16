import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Lottie from "@/animation/lottie";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";
import developer from "../animation/developer.json";

export default function Hero() {
  return (
    <div className="flex items-center justify-center bg-bpri w-full">
      <div className="max-w-[var(--breakpoint-xl)] mx-auto grid lg:grid-cols-2 gap-12 px-6 pt-18">
        <div>
          <div className="flex justify-center lg:justify-start">
            <Badge
            variant="secondary"
            asChild
            className="
              group
              rounded-full py-1
              bg-sec border-sec text-bpri
              transition-all duration-300 ease-out
              hover:!bg-sec/80
              hover:scale-[1.05]
            "
            >
              <Link
                to="#"
                className="flex relative items-center gap-1 transition-all duration-300 group-hover:text-tsec"
              >
                <span className="transition-all duration-300 group-hover:text-[1.02em]">
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
          </div>

          <div className="flex justify-center lg:justify-start">
            <h1 className="mt-5.5 text-tpri max-w-[26ch] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2] tracking-[-0.03em]">
              <span className="block whitespace-normal whitespace-wrap text-center lg:text-left halant-regular">
                Full-Stack Developer
                Building Modern Apps
              </span>
            </h1>
          </div>

          <div className="flex justify-center lg:justify-start">
            <p className="mt-6 max-w-[60ch] text-tsec text-wrap sm:text-lg text-center lg:text-left">
              I design and develop scalable, user-focused web applications using modern technologies. 
              With one year of experience, I focus on clean code, performance, and real-world solutions.
            </p>
          </div>

          <div className="mt-7 flex items-center justify-center lg:justify-start gap-4 md:gap-7 lg:gap-6">
            <Button
              size="lg"
              className="rounded-full shadow-md relative text-bpri bg-pri hover:bg-pri/90 hover:text-bpri h-10 w-38 transition-all duration-300"
            >
              View Projects <ArrowUpRight className="h-6! w-5!" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full shadow-md relative text-bsec bg-sec hover:bg-sec/90 hover:text-bsec h-10 w-38 transition-all duration-300"
            >
              <CirclePlay className="h-6! w-5! text-bsec hover:text-tsec/90" />{" "}
              About Me
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="lg:w-full md:w-3/4 h-full aspect-video overflow-hidden rounded-xl border-0 border-border/70 bg-card">
            <Lottie className="w-full bg-bpri h-full" animationData={developer} />
          </div>
        </div>
      </div>
    </div>
  );
}
