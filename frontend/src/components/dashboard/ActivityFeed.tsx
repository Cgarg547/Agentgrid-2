import {
  CheckCircle2,
  CircleDot,
  Clock3,
} from "lucide-react";

import Card from "../ui/Card";

const events = [
  {
    time: "15:32:08",
    title: "Researcher completed discovery",
    detail: "18 sources collected",
    type: "success",
  },
  {
    time: "15:32:12",
    title: "Analyst started synthesis",
    detail: "Processing research context",
    type: "active",
  },
  {
    time: "15:32:18",
    title: "Validator awaiting approval",
    detail: "Human authorization required",
    type: "warning",
  },
  {
    time: "15:32:21",
    title: "Builder ready",
    detail: "Waiting for upstream result",
    type: "neutral",
  },
];

export default function ActivityFeed() {
  return (
    <Card className="activity-card">
      <div className="section-heading">
        <div>
          <span className="eyebrow">STREAM</span>
          <h2>Mission activity</h2>
        </div>

        <span className="streaming-indicator">
          <span />
          Streaming
        </span>
      </div>

      <div className="activity-list">
        {events.map((event) => (
          <article
            className="activity-item"
            key={event.time}
          >
            <div className={`activity-marker ${event.type}`}>
              {event.type === "success" ? (
                <CheckCircle2 size={14} />
              ) : event.type === "warning" ? (
                <Clock3 size={14} />
              ) : (
                <CircleDot size={14} />
              )}
            </div>

            <div className="activity-content">
              <div className="activity-top">
                <strong>{event.title}</strong>
                <time>{event.time}</time>
              </div>

              <p>{event.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <button className="full-width-button">
        View execution timeline
      </button>
    </Card>
  );
}