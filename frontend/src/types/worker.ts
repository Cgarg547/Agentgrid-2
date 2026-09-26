export type WorkerState =
  | "idle"
  | "running"
  | "unknown";

export interface Worker {
  worker_id: string;
  state: WorkerState;
  last_heartbeat?: string;
  metadata?: Record<string, unknown>;
}

export interface WorkerMetrics {
  total_workers?: number;
  idle_workers?: number;
  running_workers?: number;
}