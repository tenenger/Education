// useEffect를 사용할때 변화가 발생할때 코드를 실행하는것 외에 코드가 실행이 안될때 발생시키는 코드도 있다. 그것은 cleanup function이라고 부른다.
// cleanup function은 useEffect 첫번째 인자 마지막에 return () => {코드}를 적으면 된다.
import { useState, useEffect } from "react";
function Hello() {
  useEffect(()=> {
    console.log('Created :)');
    return () => console.log('Destroyed :(');
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
