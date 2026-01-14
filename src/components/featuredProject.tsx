import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import desktopPreview from "@/assets/retailDesktop.png";
import tabletPreview from "@/assets/retailIpad.png";
import mobilePreview from "@/assets/retailPhone.png";
import { ArrowUpRight } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section className="bg-bpri py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) items-center gap-16 px-6 lg:grid-cols-[minmax(0,420px)_1fr] xl:gap-24">
        {/* Preview */}
        <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]">
          <span
            className="absolute inset-[14%] rounded-full bg-sec/15 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute inset-0 rounded-[46%] bg-gradient-to-br from-sec/40 via-sec/10 to-transparent"
            aria-hidden
          />

          <img
            src={mobilePreview}
            alt="Mobile preview"
            className="absolute left-4 top-6 w-24 rounded-2xl border border-white/70 bg-bpri/40 shadow-[0_18px_45px_-20px_rgba(46,46,46,0.6)] sm:w-28 lg:w-32"
          />

          <img
            src={tabletPreview}
            alt="Tablet preview"
            className="absolute right-3 top-16 w-32 rounded-3xl border border-white/70 bg-bpri/40 shadow-[0_25px_55px_-24px_rgba(46,46,46,0.65)] sm:right-6 sm:w-36 lg:right-10 lg:top-20 lg:w-44"
          />

          <img
            src={desktopPreview}
            alt="Desktop preview"
            className="absolute bottom-4 left-10 w-40 rounded-[32px] border border-white/70 bg-bpri/40 shadow-[0_28px_65px_-28px_rgba(46,46,46,0.7)] sm:left-12 sm:w-48 lg:bottom-6 lg:left-16 lg:w-64"
          />
        </div>

        {/* Content */}
        <div className="max-w-[520px] lg:mx-0">
          <Badge
            variant="secondary"
            className="mb-6 rounded-full border-sec/80 bg-sec/80 text-bpri"
          >
            Featured project
          </Badge>

          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-tpri sm:text-4xl lg:text-[2.75rem]">
            Jarviz employee management system
          </h2>

          <p className="mt-6 text-base text-tsec sm:text-lg">
            Jarvoiz is a full-featured employee management system designed to
            streamline daily HR operations. It centralizes employee data,
            attendance, and workflow processes while delivering a clean,
            responsive experience across all devices.
          </p>

          <p className="mt-4 text-base text-tsec/80 sm:text-lg">
            I handled the front-end architecture, API integration, and UI
            performance optimizations. The system focuses on scalability,
            maintainability, and role-based access to support growing
            organizations.
          </p>

          <Button
            size="sm"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-pri text-bpri hover:bg-pri/90"
          >
            View Case Study <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
