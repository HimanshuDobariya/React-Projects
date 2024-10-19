import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const storedTasks = JSON.parse(localStorage.getItem("todoList"));
  console.log(storedTasks);
  const [tasks, setTasks] = useState(storedTasks || []);
  const [inputText, setInputText] = useState("");

  const addTask = (text) => {
    if (text.trim() == "") return;

    const newtask = {
      id: Date.now(),
      text,
      isCompleted: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setTasks([...tasks, newtask]);
    setInputText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else return task;
      })
    );
  };

  const editTask = (id, text) => {
    const editedTask = prompt("Edit Your Task Content : ", text);
    setTasks(
      tasks.map((task) => {
        if (task.id == id && editedTask) {
          return { ...task, text: editedTask };
        } else return task;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="max-w-3xl w-full">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Write here..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          className="bg-white py-2 px-3 rounded sm:text-xl w-[60%] shadow-md outline-none"
        />
        <button
          className="px-4 py-2 sm:text-xl font-medium bg-indigo-600 text-white border-none rounded cursor-pointer"
          onClick={() => {
            addTask(inputText);
          }}
        >
          Add Task
        </button>
      </div>

      {tasks.length !== 0 ? (
        <div className="p-2 sm:p-5 bg-[#ECEDF6] rounded-md mt-8 flex flex-col space-y-3">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
              editTask={editTask}
            />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-center text-xl font-medium text-red-500">
          No Tasks In List
        </p>
      )}
    </div>
  );
};

export default TodoList;
