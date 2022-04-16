// form은 button이 있을경우 엔터를 입력하면 제출이된다.
// form으로 제출시 onSubmit으로 event.preventDefault()를 넣어주면 새로고침이 안된다.
// toDo값을 새로운 toDos 배열에 추가하려면 toDo, ...toDos를 하면된다.
// 새로운값(toDo), toDos배열(currentArray)를 추가한다.
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
    // useState로 값을 수정할때는 2가지 방법이 있다.
    // 첫번째는 setToDo에 바로 값을 넣는것이고,
    // 두번째는 setToDo에 기존값과 새로운값을 합치는 함수를 사용하는것이다.
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
    </div>
  );
}

export default App;
