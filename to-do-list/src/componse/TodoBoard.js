import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todoList, deleteItem }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((item, index) => (
        // index도 같이 넘겨서 삭제 기능 구현
        <TodoItem key={index} item={item} index={index} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default TodoBoard;
