import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo, toggleTodo } from './store/todoSlice';
import { setFilter } from './store/filterslice';
import Ecommerce from './components/ecommerce/Ecommerce';
function App() {
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState(''); 

  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  
  const filteredTodos = useSelector((state) => {
    switch (state.filter) {
      case 'active':
        return state.todos.filter((todo) => !todo.completed);
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      default:
        return state.todos;
    }
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleEditStart = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText }));
      setEditingId(null);
      setEditText('');
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    // <div className="min-h-screen bg-gray-100 p-4">
    //   <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>

    //   {/* Add Todo Form */}
    //   <form onSubmit={handleAddTodo} className="max-w-md mx-auto mb-4">
    //     <div className="flex gap-2">
    //       <input
    //         type="text"
    //         value={newTodo}
    //         onChange={(e) => setNewTodo(e.target.value)}
    //         placeholder="Add a new todo"
    //         className="flex-1 p-2 border rounded"
    //       />
    //       <button
    //         type="submit"
    //         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    //       >
    //         Add
    //       </button>
    //     </div>
    //   </form>

    //   {/* Filter Buttons */}
    //   <div className="max-w-md mx-auto mb-4 flex gap-2">
    //     <button
    //       onClick={() => dispatch(setFilter('all'))}
    //       className={`px-4 py-2 rounded ${
    //         filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
    //       }`}
    //     >
    //       All
    //     </button>
    //     <button
    //       onClick={() => dispatch(setFilter('active'))}
    //       className={`px-4 py-2 rounded ${
    //         filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
    //       }`}
    //     >
    //       Active
    //     </button>
    //     <button
    //       onClick={() => dispatch(setFilter('completed'))}
    //       className={`px-4 py-2 rounded ${
    //         filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
    //       }`}
    //     >
    //       Completed
    //     </button>
    //   </div>

    //   {/* Todo List */}
    //   <div className="max-w-md mx-auto">
    //     {filteredTodos.length === 0 ? (
    //       <p className="text-center text-gray-500">No todos found.</p>
    //     ) : (
    //       <ul className="space-y-2">
    //         {filteredTodos.map((todo) => (
    //           <li
    //             key={todo.id}
    //             className="flex items-center gap-2 p-2 bg-white rounded shadow"
    //           >
    //             {editingId === todo.id ? (
    //               <div className="flex-1 flex gap-2">
    //                 <input
    //                   type="text"
    //                   value={editText}
    //                   onChange={(e) => setEditText(e.target.value)}
    //                   className="flex-1 p-1 border rounded"
    //                 />
    //                 <button
    //                   onClick={() => handleEditSave(todo.id)}
    //                   className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
    //                 >
    //                   Save
    //                 </button>
    //                 <button
    //                   onClick={handleEditCancel}
    //                   className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
    //                 >
    //                   Cancel
    //                 </button>
    //               </div>
    //             ) : (
    //               <>
    //                 <input
    //                   type="checkbox"
    //                   checked={todo.completed}
    //                   onChange={() => dispatch(toggleTodo(todo.id))}
    //                   className="h-4 w-4"
    //                 />
    //                 <span
    //                   className={`flex-1 ${
    //                     todo.completed ? 'line-through text-gray-500' : ''
    //                   }`}
    //                   onClick={() => handleEditStart(todo)}
    //                 >
    //                   {todo.text}
    //                 </span>
    //                 <button
    //                   onClick={() => dispatch(deleteTodo(todo.id))}
    //                   className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    //                 >
    //                   Delete
    //                 </button>
    //               </>
    //             )}
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // </div>
    <Ecommerce/>
  );
}

export default App;