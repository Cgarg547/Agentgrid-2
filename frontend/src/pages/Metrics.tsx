import { BarChart3 } from "lucide-react";

export default function Metrics() {
  return (
    <div className="page-placeholder">
      <span className="eyebrow">OBSERVABILITY</span>

      <div className="placeholder-icon">
        <BarChart3 size={24} />
      </div>

      <h1>Metrics</h1>

      <p>
        Monitor performance, reliability and agent activity.
      </p>

      <div className="coming-soon">
        Observability dashboard coming next.
      </div>
    </div>
  );
}