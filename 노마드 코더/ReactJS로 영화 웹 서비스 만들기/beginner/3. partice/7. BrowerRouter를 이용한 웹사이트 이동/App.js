import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// BrowserRouter, Routes, Route를 router-dom으로부터 가져온다.
// Route의 경로(path)가 url의 끝이 /이면 Home.js 컴포넌트파일을 불러온다는 뜻이다.
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}
// Route하는 방법
// 1. Route를 설치해준다.(터미널에 npm install react-router-dom)
// 2. App에 import한다.
// 3. return에 큰 틀인 Router태그를 넣는다.
// 4. Router 태그 안에 Routes태그를 넣는다.
// 5. Route태그를 만든다.
// 6. Route 속성으로 path값으로 어떤 url을 설정해준다.
// 7. element에 보여줄것을 하나의 태그만 입력해준다.
// 8. 해석: 해당 url이라면 element을 보여준다.
// 9. 더 추가하고 싶으면 Routes안에다가 Route태그를 넣고 속성을 집어넣으면 된다.
export default App;
