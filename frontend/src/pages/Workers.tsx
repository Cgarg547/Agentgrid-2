import { useEffect, useState } from "react";
import {
  RefreshCw,
  Server,
  Circle,
  Activity,
} from "lucide-react";

import { getWorkers } from "../api/workers";
import type { Worker } from "../types/worker";

export default function Workers() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadWorkers() {
    setLoading(true);
    setError(null);

    try {
      const data = await getWorkers();
      setWorkers(data.workers);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load workers",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let cancelled = false;

    async function initialLoad() {
      try {
        const data = await getWorkers();

        if (!cancelled) {
          setWorkers(data.workers);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Failed to load workers",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    initialLoad();

    return () => {
      cancelled = true;
    };
  }, []);

  const runningWorkers = workers.filter(
    (worker) => worker.state === "running",
  ).length;

  const idleWorkers = workers.filter(
    (worker) => worker.state === "idle",
  ).length;

  const unknownWorkers = workers.filter(
    (worker) => worker.state === "unknown",
  ).length;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="breadcrumb">
            AgentGrid / Workers
          </div>

          <h1>Workers</h1>

          <p>
            Monitor worker health and execution state.
          </p>
        </div>

        <button
          className="refresh-button"
          onClick={loadWorkers}
          disabled={loading}
          type="button"
        >
          <RefreshCw size={16} />
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error && (
        <div className="error-card" role="alert">
          <strong>Unable to load workers</strong>
          <span>{error}</span>

          <button onClick={loadWorkers} type="button">
            Retry
          </button>
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span>Total Workers</span>
            <Server size={18} />
          </div>

          <strong>{workers.length}</strong>

          <small>Registered workers</small>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span>Running</span>
            <Activity size={18} />
          </div>

          <strong className="running-number">
            {runningWorkers}
          </strong>

          <small>Currently processing tasks</small>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span>Idle</span>
            <Circle size={18} />
          </div>

          <strong>{idleWorkers}</strong>

          <small>Ready for work</small>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span>Unknown</span>
            <Activity size={18} />
          </div>

          <strong>{unknownWorkers}</strong>

          <small>Requires attention</small>
        </div>
      </div>

      <div className="workers-card">
        <div className="workers-card-header">
          <div>
            <h2>Worker Registry</h2>

            <p>
              Live workers registered with AgentGrid.
            </p>
          </div>

          <span className="worker-count">
            {workers.length} workers
          </span>
        </div>

        {loading ? (
          <div className="empty-state" role="status">
            <p>Loading workers...</p>
          </div>
        ) : workers.length === 0 ? (
          <div className="empty-state">
            <Server size={32} />

            <h3>No workers registered</h3>

            <p>
              AgentGrid is running, but there are currently
              no workers registered with the worker registry.
            </p>
          </div>
        ) : (
          <div className="worker-list">
            {workers.map((worker) => (
              <div
                className="worker-row"
                key={worker.worker_id}
              >
                <div className="worker-main">
                  <div className="worker-icon">
                    <Server size={18} />
                  </div>

                  <div>
                    <strong>
                      {worker.worker_id}
                    </strong>

                    <span>
                      {worker.metadata?.hostname
                        ? String(worker.metadata.hostname)
                        : "Worker"}
                    </span>
                  </div>
                </div>

                <div className="worker-state">
                  <span
                    className={`status-dot ${worker.state}`}
                    aria-hidden="true"
                  />

                  <span>
                    {worker.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}