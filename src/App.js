import React from "react";

import TodoList from "./TodoList";

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Todos</button>
      <div>0 Todos</div>
    </>
  );
}
export default App;
