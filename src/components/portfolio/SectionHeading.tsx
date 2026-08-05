import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="flex items-center justify-center gap-2 font-pixel text-[9px] uppercase tracking-widest text-accent">
        {icon}
        {eyebrow}
      </p>
      <h2 className="mt-4 font-pixel text-lg leading-[1.6] text-gradient sm:text-2xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
