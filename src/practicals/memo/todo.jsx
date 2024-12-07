import { useState, memo } from "react";
const Todo = () => {
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  return (
    <>
      {todos.map((todo, index) => {
        return <div key={index}>{todo}</div>;
      })}
    </>
  );
};
export default memo(Todo);
