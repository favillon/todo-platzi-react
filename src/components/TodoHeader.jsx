import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoHeader() {
    const { totalTodo : total, totalCompleted: completed} = useContext(TodoContext)
    return (<h1>Has Completed { completed } of { total }</h1>)
}

export { TodoHeader }