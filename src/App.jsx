import { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";

function App() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <div className="min-h-screen w-full bg-zinc-900 text-white flex items-center flex-col gap-4 py-6">
                <Input todos={todos} setTodos={setTodos} />
                <Todos todos={todos} setTodos={setTodos} />
            </div>
        </>
    );
}

export default App;
