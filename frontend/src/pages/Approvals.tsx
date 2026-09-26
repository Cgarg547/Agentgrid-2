import { CheckCircle2 } from "lucide-react";

export default function Approvals() {
  return (
    <div className="page-placeholder">
      <span className="eyebrow">GOVERNANCE</span>

      <div className="placeholder-icon">
        <CheckCircle2 size={24} />
      </div>

      <h1>Approvals</h1>

      <p>
        Review human-in-the-loop decisions before agents
        continue execution.
      </p>

      <div className="coming-soon">
        Approval queue coming next.
      </div>
    </div>
  );
}