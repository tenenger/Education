import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  useEffect(() => {
    if (toDos) {
      console.log(toDos);
    }
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      {/* map은 함수를 가질수있고, map앞에 있는 배열의 수만큼 함수가 반복실행된다. 그리고 함수로 실행된 return값은 배열안에 있는 값과 교체된다.*/}
      {/* map은 배열안에있는 item을 가져올수있다. toDos.map((item)=>item) */}
      <hr />
      <ul>
        {/* mpa함수를 사용할때 key props 값이 필요하다. 그래서 map의 두번째 인자는 index로 숫자를 받고, 함수에 key={index}를 넣어준다. */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
