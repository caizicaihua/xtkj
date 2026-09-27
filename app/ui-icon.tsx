import type { ReactNode } from "react";

const paths = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  external: <><path d="M7 17 17 7M7 7h10v10" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></>,
  sparkle: <><path d="m12 3 2.7 6.3L21 12l-6.3 2.7L12 21l-2.7-6.3L3 12l6.3-2.7L12 3Z" /><path d="M20 2v4m-2-2h4" /></>,
  chart: <><path d="M4 19h16M6 15l4-5 4 2 5-7" /><path d="M15 5h4v4" /></>,
  bars: <><path d="M5 19V9m7 10V4m7 15v-7" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  game: <><path d="M8 7h8c2 0 3 1 3.5 3l1.5 7a2 2 0 0 1-3 2l-3-3H9l-3 3a2 2 0 0 1-3-2l1.5-7C5 8 6 7 8 7Z" /><path d="M8 10v4m-2-2h4m5-1h.01M17 13h.01" /></>,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
