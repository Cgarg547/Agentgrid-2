import ActivityFeed from "../components/dashboard/ActivityFeed";
import QuickStats from "../components/dashboard/QuickStats";
import MissionLauncher from "../components/mission/MissionLauncher";
import AgentNetwork from "../components/network/AgentNetwork";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <span className="eyebrow">
            AI OPERATIONS UNIVERSE
          </span>

          <h1>
            Intelligence,
            <span> orchestrated.</span>
          </h1>

          <p>
            Design missions, coordinate autonomous agents,
            observe execution and govern every decision from
            one command surface.
          </p>
        </div>

        <div className="network-live-status">
          <span />
          LIVE NETWORK
        </div>
      </section>

      <MissionLauncher />

      <QuickStats />

      <div className="dashboard-grid">
        <AgentNetwork />
        <ActivityFeed />
      </div>
    </div>
  );
}