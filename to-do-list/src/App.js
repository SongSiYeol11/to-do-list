import React, {useState} from 'react';
import './App.css';
import TodoBoard from './componse/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('') // 현재값, 값을 바꾸는 함수
  const [todoList,setTodoList] = useState([])
  const addItem = () =>{
    console.log("현재 값: ", inputValue)
    setTodoList([...todoList, inputValue]) 
        //[...]은 새로운 배열을 만들기 떄문에 React가 정상적으로 업데이트함
        //push를 쓰면 안되는 이유
        //1. push를 쓰면 기존 배열을 건드므로 인식을 못할 수 있음
  }

  return (
   <main>
    <input value = {inputValue}
      type="text" 
      onChange={(event) =>setInputValue(event.target.value)}
    />

    <button onClick={addItem}>추가</button>

   <TodoBoard todoList={todoList} />
   </main>
  );
}

export default App;
