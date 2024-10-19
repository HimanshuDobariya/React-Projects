import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoItem = ({ task, deleteTask, toggleCompleted, editTask }) => {
  const { text, id, isCompleted, date, time } = task;

  return (
    <div className="w-full bg-white rounded p-2 flex items-center justify-between gap-x-2">
      <div className="flex items-center  gap-x-3">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={isCompleted}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
        <div className="max-w-[80%]">
          <h2
            className={`${
              isCompleted
                ? "line-through text-slate-600 decoration-2"
                : ""
            } text-xl font-medium text-black`}
          >
            {text}
          </h2>
          <p className=" text-gray-500 text-sm">
            {time}, {date}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div
          className="p-2 bg-[#DEE0E2] rounded cursor-pointer"
          onClick={() => {
            deleteTask(id);
          }}
        >
          <MdDelete className="text-2xl text-gray-800" />
        </div>
        <div
          className="p-2 bg-[#DEE0E2] rounded cursor-pointer"
          onClick={() => {
            editTask(id, text);
          }}
        >
          <FaEdit className="text-2xl text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
