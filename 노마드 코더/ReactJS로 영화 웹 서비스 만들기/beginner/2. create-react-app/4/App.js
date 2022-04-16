// useEffect에 이름없는 함수를 넣을 수도 있고, 존재하는 함수를 넣을 수도 있다.
// useEffect에 들어가는 함수와, cleanup function을 따로 분리하여 useEffect를 실행시킬수 있다.

// 실행순서:
// 1. App함수가 실행된다.
// 2. onClick시 showing이 true가되어 Hello함수를 실행한다.
// 3. Hello함수는 Hello 태그를 보낸다.
// 4. 그리고 useEffect함수가 한번([])실행되어 hiFn을 호출한다.
// 5. hiFn은 console.log에 created를 찍는다.
// 6. 버튼을 onClick시 showing이 false가되어 Hello함수 실행을 취소한다.
// 7. useEffect의 hiFn이 cleanup function인 return을 가지고 있어서 byeFn을 호출
// 8. byeFn의 console.log를 실행시킨다.
// 끝
// 현장에서는 hiFn, byeFn을 만들지않고 useEffect에 바로 함수를 만든다.
import { useState, useEffect } from "react";
function Hello() {
  useEffect(() => {
    console.log('hi :)');
    return function() {
      console.log('bye :(')
    }
  }, [])

  return (
    <h1>Hello</h1>
  )
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing(prev => !prev);
  }
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
