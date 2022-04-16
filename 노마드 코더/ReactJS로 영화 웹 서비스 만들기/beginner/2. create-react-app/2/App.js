// useEffect는 2가지 인자를 받는데 첫번째는 실행하고 싶은 코드이고, 두번째 인자는 배열을 넣는다. 배열안에는 특정 인자가 변화할때만 작동되게 해준다.
// 밑의 코드는 keyword가 변화될때만 작동된다. 만약 빈 배열이라면, 딱 한번만 실행된다. 배열안에 두개이상을 넣을경우 하나만 변경되도 코드가 실행된다.
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("I run Alltime");
  const Irunonlyonce = () => {
    console.log("I run only once");
  };
  useEffect(Irunonlyonce, []);

  // 처음 실행할때 useEffect가 실행되니, if문을 넣어서 처음실행을 막아준다.
  useEffect(()=>{
    if (keyword !== '') {
      console.log('I run when "keyword" changes');
    }
  }, [keyword])
  useEffect(()=>{
    if (counter !== '') {
      console.log('I run when "counter" changes');
    }
  }, [counter])
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click ME!</button>
    </div>
  );
}

export default App;
