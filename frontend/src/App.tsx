import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AppShell from "./components/layout/AppShell";

import Dashboard from "./pages/Dashboard";
import Workers from "./pages/Workers";
import Workflows from "./pages/Workflows";
import Executions from "./pages/Executions";
import Metrics from "./pages/Metrics";
import Approvals from "./pages/Approvals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/executions" element={<Executions />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/approvals" element={<Approvals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;