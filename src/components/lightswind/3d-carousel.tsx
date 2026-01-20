import { useRef, useEffect, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export interface ThreeDCarouselItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  link: string;
}

interface ThreeDCarouselProps {
  items: ThreeDCarouselItem[];
  autoRotate?: boolean;
  rotateInterval?: number;
  cardHeight?: number;
  isMobileSwipe?: boolean;
}

const ThreeDCarousel = ({
  items,
  autoRotate = true,
  rotateInterval = 4000,
  cardHeight = 500,
  isMobileSwipe = true,
}: ThreeDCarouselProps) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const minSwipeDistance = 50;

  useEffect(() => {
    const target = carouselRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!items.length || !autoRotate || !isInView || isHovering) {
      return;
    }

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isHovering, isInView, items.length, rotateInterval]);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!isMobileSwipe) return;
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isMobileSwipe) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!isMobileSwipe || touchStart === null || touchEnd === null) {
      return;
    }

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setActive((prev) => (prev + 1) % items.length);
    } else if (distance < -minSwipeDistance) {
      setActive((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  const getCardAnimationClass = (index: number) => {
    if (index === active) return "scale-100 opacity-100 z-20";
    if (index === (active + 1) % items.length)
      return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (active - 1 + items.length) % items.length)
      return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };

  if (!items.length) return null;

  return (
    <div
      id="ThreeDCarousel"
      className="relative mx-auto flex w-full max-w-(--breakpoint-xl) justify-center px-4 sm:px-6 lg:px-8"
    >
      <div
        className="relative w-full overflow-hidden rounded-3xl bg-bpri/70 backdrop-blur"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={carouselRef}
      >
        <div className="pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0" />
        <div className="relative flex h-[550px] items-center justify-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(
                index
              )}`}
            >
              <Card
                className="flex h-full flex-col overflow-hidden shadow-2xl"
                style={{ height: cardHeight }}
              >
                <div
                  className="relative flex h-48 items-center justify-center overflow-hidden bg-bpri"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-bpri via-bpri/40 to-transparent" />
                  <div className="relative z-10 text-center text-bpri">
                    <h3 className="mb-2 text-2xl font-semibold uppercase tracking-[0.2em] text-tpri">
                      {item.brand}
                    </h3>
                    <p className="text-sm text-tsec/80">{item.title}</p>
                  </div>
                </div>

                <CardContent className="flex flex-grow flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-tpri">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-pri/80">{item.brand}</p>
                  <p className="mt-3 flex-grow text-sm text-tsec">{item.description}</p>

                  <div className="mt-5 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-pri/25 bg-pri/10 px-3 py-1 text-xs font-medium tracking-wide text-pri"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center bg-pri/20 hover:bg-pri border-0 shadow text-pri"
                        >
                          <span>Github</span>
                          <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>

                      {item.link && (
                        <Button
                          asChild
                          size="sm"
                          onClick={(event) => {
                            if (item.link.startsWith("/")) {
                              event.preventDefault();
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                          }}
                        >
                          <a
                            href={item.link}
                            target={item.link.startsWith("http") ? "_blank" : undefined}
                            rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                            className="group inline-flex items-center bg-sec/20 hover:bg-sec border-0 shadow text-sec hover:text-bpri"
                          >
                            <span>Go to site</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {!isMobile && (
          <>
            <button
              className="absolute left-28 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-bpri shadow-lg transition-transform transition-colors hover:scale-110"
              onClick={() =>
                setActive((prev) => (prev - 1 + items.length) % items.length)
              }
              aria-label="Previous"
            >
              <ChevronLeft className="h-10 w-10 bg-sec/85 rounded-sm hover:bg-sec" />
            </button>
            <button
              className="absolute right-28 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-bpri shadow-lg transition-transform transition-colors hover:scale-110"
              onClick={() => setActive((prev) => (prev + 1) % items.length)}
              aria-label="Next"
            >
              <ChevronRight className="h-10 w-10 bg-sec/85 rounded-sm hover:bg-sec" />
            </button>
          </>
        )}

        <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === idx
                  ? "w-6 bg-pri"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Go to item ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDCarousel;
