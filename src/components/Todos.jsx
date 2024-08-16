import List from "./List";

function Todos({ todos, setTodos }) {
    return (
        <div className="max-w-96 w-full">
            <ul className="flex flex-col items-center justify-center gap-2 w-full">
                {todos.length === 0 ? (
                    <li className="text-center py-2">No Todos</li>
                ) : (
                    todos.map(({ id, todo, marked }) => {
                        return (
                            <List
                                key={id}
                                id={id}
                                todo={todo}
                                marked={marked}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        );
                    })
                )}
            </ul>
        </div>
    );
}

export default Todos;
