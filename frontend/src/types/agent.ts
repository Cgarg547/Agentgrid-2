export type AgentStatus = "online" | "working" | "waiting" | "offline";

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  tasks: number;
  description: string;
  x: number;
  y: number;
}
