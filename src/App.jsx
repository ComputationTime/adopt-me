import { createRoot } from "react-dom/client";
import SearchParams from "./searchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
