import { GitBranch } from "lucide-react";

export default function Workflows() {
  return (
    <div className="page-placeholder">
      <span className="eyebrow">AUTOMATION</span>

      <div className="placeholder-icon">
        <GitBranch size={24} />
      </div>

      <h1>Workflows</h1>

      <p>
        Build and visualize multi-agent workflows.
      </p>

      <div className="coming-soon">
        Workflow designer coming next.
      </div>
    </div>
  );
}