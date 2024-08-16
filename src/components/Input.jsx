import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ todos, setTodos }) {
    const [newTodo, setNewTodo] = useState("");

    function handleInput(e) {
        setNewTodo(e.target.value);
    }

    function addTodo() {
        setTodos([...todos, { id: uuidv4(), todo: newTodo, marked: false }]);
        setNewTodo("");
    }

    return (
        <div>
            <h1 className="text-3xl font-medium text-center mb-2">Todos⚛️</h1>
            <div className="border-b-2 border-zinc-400 pb-4">
                <input
                    type="text"
                    className="px-4 py-2 text-black outline-none rounded-md mr-2"
                    placeholder="Todos.."
                    value={newTodo}
                    onChange={handleInput}
                />
                <button
                    className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md"
                    onClick={addTodo}
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
}

export default Input;
