interface StatusDotProps {
  status: "online" | "working" | "waiting" | "offline";
  label?: string;
}

export default function StatusDot({
  status,
  label,
}: StatusDotProps) {
  return (
    <span className="status-wrapper">
      <span
        className={`status-dot status-${status}`}
        aria-hidden="true"
      />

      {label && <span>{label}</span>}
    </span>
  );
}
