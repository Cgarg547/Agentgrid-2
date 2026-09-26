import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "green" | "purple" | "yellow" | "red" | "neutral";
}

export default function Badge({
  children,
  tone = "neutral",
}: BadgeProps) {
  return (
    <span className={`ui-badge ui-badge-${tone}`}>
      {children}
    </span>
  );
}
