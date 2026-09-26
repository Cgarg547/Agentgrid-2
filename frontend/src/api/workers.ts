import { apiRequest } from "./client";
import type { Worker } from "../types/worker";

export interface WorkerListResponse {
  workers: Worker[];
  count: number;
}

export async function getWorkers(): Promise<WorkerListResponse> {
  return apiRequest<WorkerListResponse>("/workers");
}

export async function getWorker(
  workerId: string
): Promise<Worker> {
  return apiRequest<Worker>(`/workers/${workerId}`);
}