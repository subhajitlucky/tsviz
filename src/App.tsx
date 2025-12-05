import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { Concepts } from "@/pages/Concepts";
import { Topic } from "@/pages/Topic";
import { Playground } from "@/pages/Playground";
import { Problems } from "@/pages/Problems";
import { ProblemDetail } from "@/pages/ProblemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="concepts" element={<Concepts />} />
          <Route path="concepts/:topicId" element={<Topic />} />
          <Route path="playground" element={<Playground />} />
          <Route path="problems" element={<Problems />} />
          <Route path="problems/:problemId" element={<ProblemDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
