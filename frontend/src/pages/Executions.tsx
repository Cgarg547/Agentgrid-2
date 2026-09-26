import { Zap } from "lucide-react";

export default function Executions() {
  return (
    <div className="page-placeholder">
      <span className="eyebrow">RUNTIME</span>

      <div className="placeholder-icon">
        <Zap size={24} />
      </div>

      <h1>Executions</h1>

      <p>
        Observe missions and execution traces in real time.
      </p>

      <div className="coming-soon">
        Execution timeline coming next.
      </div>
    </div>
  );
}