import {
  Bot,
  BrainCircuit,
  CircleDot,
} from "lucide-react";

import type { Agent } from "../../types/agent";

interface AgentNodeProps {
  agent: Agent;
  selected: boolean;
  onSelect: (agent: Agent) => void;
}

export default function AgentNode({
  agent,
  selected,
  onSelect,
}: AgentNodeProps) {
  return (
    <button
      className={`agent-node ${
        selected ? "selected" : ""
      }`}
      style={{
        left: `${agent.x}%`,
        top: `${agent.y}%`,
      }}
      onClick={() => onSelect(agent)}
      aria-pressed={selected}
      aria-label={`${agent.name}. ${agent.role}. Status: ${agent.status}. ${agent.tasks} active tasks.`}
    >
      <span className={`agent-node-orb ${agent.status}`}>
        {agent.id === "orchestrator" ? (
          <BrainCircuit size={20} />
        ) : (
          <Bot size={19} />
        )}
      </span>

      <span className="agent-node-copy">
        <strong>{agent.name}</strong>
        <small>{agent.role}</small>
      </span>

      <span className="agent-node-status">
        <CircleDot size={10} />
        {agent.status}
      </span>
    </button>
  );
}