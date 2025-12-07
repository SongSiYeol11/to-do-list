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

   // 삭제 함수 추가
  const deleteItem = (index) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  }

  return (
   <main>
    <input value = {inputValue}
      type="text" 
      onChange={(event) =>setInputValue(event.target.value)}
    />

    <button onClick={addItem}>추가</button>

   <TodoBoard todoList={todoList}  deleteItem={deleteItem}  />
   </main>
  );
}

export default App;
