import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "../redux/slices/todoSlice";
import { toast } from "react-toastify";
import EditTodoModal from "./EditTodoModal";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false); //controls edit modal visiblity

  const handleCheckboxChange = () => {
    dispatch(toggleCompleted(todo.id));
  };

  return (
    <>
      <div className="border border-gray-300 rounded-2xl p-4 shadow-md bg-white hover:shadow-lg transition duration-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400 font-mono">ID: {todo.id}</span>
          <span className="text-sm text-purple-600 font-semibold bg-purple-100 px-2 py-0.5 rounded-full">
            {todo.tag || "No Tag"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h3
              className={`text-xl font-semibold mb-1 ${
                todo.isCompleted
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {todo.title}
            </h3>
            <p
              className={`${
                todo.isCompleted
                  ? "line-through text-gray-400"
                  : "text-gray-600"
              }`}
            >
              {todo.description}
            </p>
          </div>

          <div className="flex items-center pr-2">
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleCheckboxChange}
              className="w-4 h-4 accent-purple-600"
            />

            <button
              className="ml-4 hover:cursor-pointer transition duration-150"
              onClick={() => {
                const confirmDelete = window.confirm(
                  `Are you sure you want to delete "${todo.title}"?`
                );
                if (confirmDelete) {
                  dispatch(deleteTodo(todo.id));
                  toast.success("Todo deleted Successfully!");
                }
              }}
            >
              🗑️
            </button>

            <button
              className="ml-4 hover:cursor-pointer transition duration-150"
              onClick={() => setIsEditModalOpen(true)}
            >
              ✏️
            </button>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <EditTodoModal todo={todo} onClose={() => setIsEditModalOpen(false)} />
      )}
    </>
  );
};

export default TodoCard;
