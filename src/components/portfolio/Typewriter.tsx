import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 42 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), speed);
    return () => window.clearTimeout(id);
  }, [count, text.length, speed]);

  return (
    <span>
      {text.slice(0, count)}
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-accent"
        style={{ animation: "blink-caret 1s step-end infinite" }}
      />
      <span className="sr-only">{text}</span>
    </span>
  );
}
