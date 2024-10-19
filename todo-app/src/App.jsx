import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className=" min-h-screen bg-indigo-50 px-2 py-6 flex flex-col items-center space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-slate-700">
        Todo List
      </h1>
      <TodoList />
    </div>
  );
};

export default App;
