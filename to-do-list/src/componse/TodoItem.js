import React from "react";

function TodoItem({ item, index, deleteItem }) {
  return (
    <div className="todo-item" style={{ display: "flex", alignItems: "center" }}>
      <span>{item}</span>
      <button 
        onClick={() => deleteItem(index)} 
        style={{ marginLeft: "10px" }}
      >
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
