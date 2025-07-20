import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../components/TodoCard";

const AllTodos = () => {
  const allTodos = useSelector((state) => state.todos.todos);
  console.log(allTodos);
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Todos</h2>

      {allTodos.length === 0 ? (
        <p className="text-gray-500">No Todos Available, please add one!!</p>
      ) : (
        <div className="space-y-4">
          {allTodos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTodos;
