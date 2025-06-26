import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
