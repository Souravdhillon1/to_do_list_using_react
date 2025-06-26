import { addTodo } from "../features/Todo/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // prevent empty todos
    dispatch(addTodo({ text: input }));
    setInput('');
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
        className="flex-1 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded transition"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
