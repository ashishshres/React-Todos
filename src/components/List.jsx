function List({ id, todo, marked, todos, setTodos }) {
    function handleMarked(id) {
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, marked: !todo.marked }
                    : todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(
            todos.filter((todo) => {
                return todo.id !== id;
            })
        );
    }

    return (
        <li
            className="flex gap-1 justify-between items-center font-normal  border-solid border-2 border-zinc-500 px-2 py-1 rounded-md max-w-full sm:max-w-80 w-full"
            key={id}
        >
            <span
                className="text-xl cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
                style={{
                    textDecoration: marked ? "line-through" : "",
                }}
                onClick={() => handleMarked(id)}
            >
                {todo}
            </span>
            <button
                className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded-md"
                onClick={() => removeTodo(id)}
            >
                Remove
            </button>
        </li>
    );
}

export default List;
