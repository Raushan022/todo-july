import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/slices/todoSlice";
import { toast } from "react-toastify";

const EditTodoModal = ({ todo, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  //prefill inputs when modal opens
  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
    setTag(todo.tag);
  }, [todo]);

  const handleUpdate = () => {
    dispatch(
      editTodo({
        editId: todo.id,
        updatedTitle: title,
        updatedDescription: description,
        updatedTag: tag,
      })
    );
    toast.success("todo edited successfully");
    onClose(); //close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-600 p-6 rounded-lg shodow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Todo</h2>

        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-400 rounded hover:bg-red-500"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoModal;
