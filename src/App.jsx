import { useContext } from "react";

import { TodoForm } from "./components/TodoForm";
import { TodoHeader } from "./components/TodoHeader";
import { TodoItems } from "./components/TodoItems";
import { TodoList } from "./components/TodoList";
import { TodoSave } from "./components/TodoSave";
import { TodoSearch } from "./components/TodoSearch";

import { TodoProvider, TodoContext } from "./contexts/TodoContext";

import './App.css'

function App() {
  return (
    <>
      <TodoProvider>
        <TodoHeader />
        <TodoSearch />
        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodo,
            functionUpdateArrayTodo,
            functionDeleterrayTodo,
            openModal
          }) => (
            <div>
              <TodoList>
                { loading && <p>Cargando ...</p> }
                { error && <p>Error en la carga</p> }
                { (!loading &&  searchedTodo.length === 0) && <p>Crea tu primer TODO</p> }

                {
                  searchedTodo.map(todo => (
                    <TodoItems
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onCompletedTodo={() => { functionUpdateArrayTodo(todo.id) }}
                    onDeleteTodo={() => { functionDeleterrayTodo(todo.id) }}
                    />
                    ))
                  }
              </TodoList>
              <TodoSave />
              { openModal && (<TodoForm><p>esteo esej un etenoc appeo ries os  e </p></TodoForm>)}
            </div>
          )}
        </TodoContext.Consumer>
      </TodoProvider>
    </>
  )
}

export default App