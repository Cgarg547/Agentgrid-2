import {
  ArrowUpRight,
  BrainCircuit,
  Command,
  Play,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import Button from "../ui/Button";

export default function MissionLauncher() {
  const [mission, setMission] = useState("");
  const [launched, setLaunched] = useState(false);

  const launchMission = () => {
    if (!mission.trim()) {
      return;
    }

    setLaunched(true);

    window.setTimeout(() => {
      setLaunched(false);
    }, 2500);
  };

  return (
    <section className="mission-launcher">
      <div className="mission-background-glow" />

      <div className="mission-header">
        <div>
          <span className="eyebrow">
            <Sparkles size={14} />
            NEW MISSION
          </span>

          <h1>
            Give your agent network
            <span> a mission.</span>
          </h1>

          <p>
            Describe an objective. AgentGrid will map the
            work across your autonomous network.
          </p>
        </div>

        <div className="command-shortcut">
          <Command size={13} />
          K
        </div>
      </div>

      <label
        htmlFor="mission-objective"
        className="sr-only"
      >
        Mission objective
      </label>

      <textarea
        id="mission-objective"
        value={mission}
        onChange={(event) =>
          setMission(event.target.value)
        }
        placeholder="Example: Research AI infrastructure trends and produce a concise executive briefing..."
        rows={4}
      />

      <div className="mission-footer">
        <div className="mission-hint">
          <BrainCircuit size={16} />
          <span>
            AgentGrid will determine the required topology.
          </span>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={launchMission}
          disabled={!mission.trim()}
        >
          <Play size={15} fill="currentColor" />
          {launched ? "Mission launched" : "Launch mission"}
          <ArrowUpRight size={15} />
        </Button>
      </div>

      <div
        className="mission-status"
        aria-live="polite"
      >
        {launched &&
          "Mission accepted. Preparing agent topology..."}
      </div>
    </section>
  );
}