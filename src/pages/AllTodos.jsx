import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "../components/TodoCard";

const AllTodos = () => {
  const allTodos = useSelector((state) => state.todos.todos);
  console.log(allTodos);

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const visibleTodos = allTodos.filter((todo) => {
    //check filter condition
    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "completed" && todo.isCompleted) ||
      (filterStatus === "not_completed" && !todo.isCompleted);

    //check search condition
    const matchesSearch =
      todo.title.toLowerCase().includes(searchText.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchText.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Todos</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title or description"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 border rounded w-full md:w-1/2"
        />

        <div className="flex gap-2">
          <button
            onClick={() => setFilterStatus("all")}
            className={`px-3 py-2 rounded ${
              filterStatus === "all" ? "bg-blue-500 text-white" : "bg-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus("completed")}
            className={`px-3 py-2 rounded ${
              filterStatus === "completed"
                ? "bg-green-500 text-white"
                : "bg-gray-600"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilterStatus("not_completed")}
            className={`px-3 py-2 rounded ${
              filterStatus === "not_completed"
                ? "bg-yellow-500 text-white"
                : "bg-gray-600"
            }`}
          >
            Not Completed
          </button>
        </div>
      </div>

      {visibleTodos.length === 0 ? (
        <p className="text-gray-500">No Todos Available, please add one!!</p>
      ) : (
        <div className="space-y-4">
          {visibleTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTodos;
