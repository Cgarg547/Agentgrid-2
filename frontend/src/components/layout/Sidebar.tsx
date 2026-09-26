import {
  Activity,
  BarChart3,
  Bot,
  CheckCircle2,
  GitBranch,
  LayoutDashboard,
  Server,
  Terminal,
  Zap,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const platformItems = [
  {
    to: "/",
    label: "Mission Control",
    icon: LayoutDashboard,
  },
  {
    to: "/workers",
    label: "Workers",
    icon: Server,
  },
  {
    to: "/workflows",
    label: "Workflows",
    icon: GitBranch,
  },
  {
    to: "/executions",
    label: "Executions",
    icon: Zap,
  },
];

const managementItems = [
  {
    to: "/metrics",
    label: "Metrics",
    icon: BarChart3,
  },
  {
    to: "/approvals",
    label: "Approvals",
    icon: CheckCircle2,
    badge: 2,
  },
];

export default function Sidebar() {
  return (
    <aside className="app-sidebar" aria-label="Primary navigation">
      <div className="sidebar-brand">
        <div className="sidebar-brand-mark">
          <Bot size={20} />
        </div>

        <div>
          <strong>AgentGrid</strong>
          <span>Intelligence infrastructure</span>
        </div>
      </div>

      <div className="sidebar-command">
        <div className="command-orb">
          <Activity size={16} />
        </div>

        <div>
          <strong>Command Center</strong>
          <span>Network operational</span>
        </div>
      </div>

      <nav className="sidebar-navigation">
        <div className="sidebar-section-label">
          PLATFORM
        </div>

        {platformItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}

        <div className="sidebar-section-label">
          GOVERNANCE
        </div>

        {managementItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={17} />
              <span>{item.label}</span>

              {item.badge && (
                <span className="sidebar-badge">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

        <button className="sidebar-link sidebar-console">
          <Terminal size={17} />
          <span>Developer Console</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot status-online" />

        <div>
          <strong>System operational</strong>
          <span>All core services responding</span>
        </div>
      </div>
    </aside>
  );
}
