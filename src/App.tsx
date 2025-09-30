import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";
import Home from "./pages/Home";

function App() {
  return (
    <main className="min-h-dvh w-dvw">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
