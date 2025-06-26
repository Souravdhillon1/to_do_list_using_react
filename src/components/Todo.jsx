import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md text-white mt-4">
      <h2 className="text-xl font-bold mb-4">Todos</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-md"
          >
            <span>{todo.text}</span>
            <button
              className="bg-red-500 hover:bg-red-800 text-white px-3 py-1 rounded-md transition"
              onClick={() => dispatch(removeTodo({ id: todo.id }))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
