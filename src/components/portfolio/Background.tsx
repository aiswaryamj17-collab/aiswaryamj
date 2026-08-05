import { useEffect, useMemo, useState } from "react";

type Star = { top: number; left: number; size: number; delay: number; duration: number };
type Cloud = { top: number; scale: number; delay: number; duration: number; opacity: number };

export function Background() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 70 }, (_, i) => {
        const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
        return {
          top: r(1) * 100,
          left: r(2) * 100,
          size: 1 + Math.round(r(3) * 2),
          delay: r(4) * 6,
          duration: 3 + r(5) * 5,
        };
      }),
    [],
  );

  const clouds = useMemo<Cloud[]>(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        top: 8 + i * 17,
        scale: 0.6 + (i % 3) * 0.35,
        delay: i * -26,
        duration: 90 + i * 24,
        opacity: 0.05 + (i % 3) * 0.03,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div
        className="absolute -left-[20%] -top-[25%] h-[70vh] w-[70vw] rounded-full blur-[120px] opacity-40"
        style={{
          background: "radial-gradient(circle, var(--purple), transparent 65%)",
          animation: "hue-shift 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[15%] top-[30%] h-[60vh] w-[60vw] rounded-full blur-[130px] opacity-35"
        style={{
          background: "radial-gradient(circle, var(--blue), transparent 65%)",
          animation: "hue-shift 34s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[25%] h-[55vh] w-[55vw] rounded-full blur-[130px] opacity-25"
        style={{
          background: "radial-gradient(circle, var(--cyan), transparent 65%)",
          animation: "hue-shift 42s ease-in-out infinite",
        }}
      />

      <div className="absolute inset-0 grid-veil opacity-70" />

      {mounted &&
        stars.map((s, i) => (
          <span
            key={`star-${i}`}
            className="absolute rounded-[1px] bg-foreground"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}

      {mounted &&
        clouds.map((c, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute left-0"
            style={{
              top: `${c.top}%`,
              opacity: c.opacity,
              transform: `scale(${c.scale})`,
              animation: `drift ${c.duration}s linear ${c.delay}s infinite`,
            }}
          >
            <div className="relative h-10 w-44 rounded-full bg-foreground">
              <span className="absolute -top-5 left-8 h-14 w-20 rounded-full bg-foreground" />
              <span className="absolute -top-3 left-24 h-10 w-14 rounded-full bg-foreground" />
            </div>
          </div>
        ))}

      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background: "linear-gradient(to top, color-mix(in oklab, var(--background) 92%, transparent), transparent)",
        }}
      />
    </div>
  );
}
