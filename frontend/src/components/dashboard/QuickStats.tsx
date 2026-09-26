import {
  Activity,
  Bot,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    label: "Active agents",
    value: "5",
    detail: "+2 today",
    icon: Bot,
  },
  {
    label: "Executions",
    value: "128",
    detail: "94.2% success",
    icon: Activity,
  },
  {
    label: "Workflows",
    value: "14",
    detail: "3 running",
    icon: GitBranch,
  },
  {
    label: "Approvals",
    value: "2",
    detail: "Needs review",
    icon: ShieldCheck,
  },
];

export default function QuickStats() {
  return (
    <section
      className="quick-stats"
      aria-label="AgentGrid statistics"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article className="quick-stat" key={stat.label}>
            <div className="quick-stat-icon">
              <Icon size={18} />
            </div>

            <div className="quick-stat-content">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>

            <small>{stat.detail}</small>
          </article>
        );
      })}
    </section>
  );
}