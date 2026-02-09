"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ImgHTMLAttributes, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import MstCollege from "@/assets/mstCollege.png";
import FusionSolution from "@/assets/fusionSolution.png";

export type Job = {
  company: string;
  title: string;
  logo: React.ReactNode;
  job_description: string;
  salary: string;
  location: string;
  remote: string;
  job_time: string;
};

export type ExperienceListComponentProps = {
  jobs: Job[];
  className?: string;
  onJobClick?: (job: Job) => void;
};

export const Resend = ({
  alt = "MST College",
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={MstCollege}
    alt={alt}
    loading="lazy"
    className={["h-10 w-10 object-contain", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
);

export const Turso = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height="1em"
    viewBox="0 0 201 170"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Turso logo</title>
    <path
      d="m100.055 170c-2.1901 0-18.2001-12.8-21.3001-16.45-2.44 3.73-6.44 7.96-6.44 7.96-11.05-5.57-25.17-20.06-27.83-25.13-2.62-5-12.13-62.58-12.39-79.3-.34-9.41 5.85-28.49 67.9601-28.49 62.11 0 68.29 19.08 67.96 28.49-.25 16.72-9.76 74.3-12.39 79.3-2.66 5.07-16.78 19.56-27.83 25.13 0 0-4-4.23-6.44-7.96-3.1 3.65-19.11 16.45-21.3 16.45z"
      fill="#1ebca1"
    />
    <path
      d="m100.055 132.92c-20.7301 0-33.9601-10.95-33.9601-10.95l1.91-26.67-21.75-1.94-3.91-31.55h115.4301l-3.91 31.55-21.75 1.94 1.91 26.67s-13.23 10.95-33.96 10.95z"
      fill="#183134"
    />
    <path
      d="m121.535 75.79 78.52-27.18c-4.67-27.94-29.16-48.61-29.16-48.61v30.78l-14.54 3.75-9.11-10.97-7.8 15.34-39.38 10.16-39.3801-10.16-7.8-15.34-9.11 10.97-14.54-3.75v-30.78s-24.50997 20.67-29.1799684 48.61l78.5199684 27.18-2.8 37.39c6.7 1.7 13.75 3.39 24.2801 3.39 10.53 0 17.57-1.69 24.27-3.39l-2.8-37.39z"
      fill="#4ff8d2"
    />
  </svg>
);

export const Supabase = ({
  alt = "Fusion Solution",
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src={FusionSolution}
    alt={alt}
    loading="lazy"
    className={["h-10 w-10 object-contain", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
);

export default function ExperienceList({
  jobs,
  className,
  onJobClick,
}: ExperienceListComponentProps) {
  const [activeItem, setActiveItem] = useState<Job | null>(null);
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  useOnClickOutside(ref, () => setActiveItem(null));

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="/10 pointer-events-none absolute inset-0 z-10 bg-smooth-1000/10 bg-blend-luminosity backdrop-blur-xl"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeItem ? (
          <div className="group absolute inset-0 z-10 grid place-items-center">
            <motion.div
              className="flex h-fit w-[90%] cursor-pointer flex-col items-start gap-4 overflow-hidden border-0 bg-bsec p-4 shadow-lg"
              layoutId={`workItem-${activeItem.company}`}
              ref={ref}
              style={{ borderRadius: 12 }}
            >
              <div className="flex w-full items-center gap-4">
                <motion.div layoutId={`workItemLogo-${activeItem.company}`}>
                  {activeItem.logo}
                </motion.div>
                <div className="flex grow items-center justify-between">
                  <div className="flex w-full flex-col gap-0.5">
                    <div className="flex w-full flex-row justify-between gap-0.5">
                      <motion.div
                        className="font-medium text-sec text-sm"
                        layoutId={`workItemCompany-${activeItem.company}`}
                      >
                        {activeItem.company}
                      </motion.div>
                    </div>
                    <motion.p
                      className="text-tsec text-sm"
                      layoutId={`workItemTitle-${activeItem.company}`}
                    >
                      {activeItem.title} / {activeItem.salary}
                    </motion.p>
                    <motion.div
                      className="flex flex-row gap-2 text-tsec text-xs"
                      layoutId={`workItemExtras-${activeItem.company}`}
                    >
                      {activeItem.remote === "Yes" &&
                        ` ${activeItem.location} `}
                      {activeItem.remote === "No" && ` ${activeItem.location} `}
                      {activeItem.remote === "Hybrid" &&
                        ` ${activeItem.remote} / ${activeItem.location} `}
                      | {activeItem.job_time}
                    </motion.div>
                  </div>
                </div>
              </div>
              <motion.p
                animate={{ opacity: 1 }}
                className="text-tsec text-sm"
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                initial={{ opacity: 0 }}
                layout
              >
                {activeItem.job_description}
              </motion.p>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className={`relative flex items-start p-6 ${className || ""}`}>
        <div className="relative flex w-full flex-col items-center gap-4 px-2">
          {jobs.map((role) => (
            <motion.div
              className="group flex w-full cursor-pointer flex-row items-center gap-4 border-0 shadow-lg bg-bsec p-2 md:p-4"
              key={role.company}
              layoutId={`workItem-${role.company}`}
              onClick={() => {
                setActiveItem(role);
                if (onJobClick) {
                  onJobClick(role);
                }
              }}
              style={{ borderRadius: 8 }}
            >
              <motion.div layoutId={`workItemLogo-${role.company}`}>
                {role.logo}
              </motion.div>
              <div className="flex w-full flex-col items-start justify-between gap-0.5">
                <motion.div
                  className="font-medium text-sec"
                  layoutId={`workItemCompany-${role.company}`}
                >
                  {role.company}
                </motion.div>
                <motion.div
                  className="text-tsec text-xs"
                  layoutId={`workItemTitle-${role.company}`}
                >
                  {role.title} / {role.salary}
                </motion.div>

                <motion.div
                  className="flex flex-row gap-2 text-tsec text-xs"
                  layoutId={`workItemExtras-${role.company}`}
                >
                  {role.remote === "Yes" && ` ${role.location} `}
                  {role.remote === "No" && ` ${role.location} `}
                  {role.remote === "Hybrid" &&
                    ` ${role.remote} / ${role.location} `}
                  | {role.job_time}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
