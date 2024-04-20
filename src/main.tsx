import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QuizProvider } from "./contexts/QuizContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
