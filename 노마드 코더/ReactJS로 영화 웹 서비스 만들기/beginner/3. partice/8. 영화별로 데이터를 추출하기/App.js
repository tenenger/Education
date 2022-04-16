import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        {/* movie/123123처럼 클릭한 영화의 세부사이트로 이동시키기 위해 :id를 넣는다. :id는 변수로 변동하는 것을 받을 수 있다. -> Detail.js 이어서*/}
      </Routes>
    </Router>
  );
}
export default App;
