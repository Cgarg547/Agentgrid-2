import {
  Activity,
  Bot,
  CheckCircle2,
  Server,
  Zap,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <Zap size={20} />
        </div>

        <div>
          <div className="brand-name">AgentGrid</div>
          <div className="brand-version">v0.1.0</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">
          PLATFORM
        </div>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Activity size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/workers"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Server size={18} />
          Workers
        </NavLink>

        <NavLink
          to="/workflows"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Bot size={18} />
          Workflows
        </NavLink>

        <NavLink
          to="/executions"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Activity size={18} />
          Executions
        </NavLink>

        <div className="nav-section-label">
          MANAGEMENT
        </div>

        <NavLink
          to="/metrics"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Activity size={18} />
          Metrics
        </NavLink>

        <NavLink
          to="/approvals"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <CheckCircle2 size={18} />
          Approvals
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="environment">
          <span className="status-dot" />
          Development
        </div>
      </div>
    </aside>
  );
}
