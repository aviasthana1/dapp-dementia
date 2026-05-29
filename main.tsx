
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import { initPatientPreferences } from "./src/services/patientPreferences";
  import "./index.css";

  initPatientPreferences();
  createRoot(document.getElementById("root")!).render(<App />);
  