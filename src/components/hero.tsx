import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Lottie from "@/animation/lottie";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { Link } from "react-router-dom";
import developer from "../animation/developer.json";

export default function Hero() {
  return (
    <div className="flex items-center justify-center bg-bpri">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 pt-23">
        <div>
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
              className="flex items-center gap-1 transition-all duration-300 group-hover:text-tsec"
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

          <h1 className="mt-6 text-tpri max-w-[26ch] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2] tracking-[-0.03em]">
            <span className="block whitespace-normal whitespace-wrap">
              Full-Stack Developer
            </span>
            <span className="block whitespace-normal whitespace-wrap">
              Building Modern Apps
            </span>
          </h1>

          <p className="mt-6 max-w-[60ch] text-tsec text-wrap sm:text-lg">
            I design and develop scalable, user-focused web applications using
            modern front-end frameworks and robust back-end technologies. Clean
            code, performance, and real-world solutions are my priority.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <Button
              size="lg"
              className="rounded-full text-bpri bg-pri hover:bg-pri/90"
            >
              View Projects <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-sec border-sec hover:bg-sec/90 hover:border-sec/90 text-bpri hover:text-bpri/90 shadow-none"
            >
              <CirclePlay className="h-5! w-5! text-bpri hover:text-tsec/90" />{" "}
              About Me
            </Button>
          </div>
        </div>

        <div className="lg:w-full md:w-3/4 h-full aspect-video overflow-hidden rounded-xl border-0 border-border/70 bg-card">
          <Lottie className="w-full bg-bpri h-full" animationData={developer} />
        </div>
      </div>
    </div>
  );
}
