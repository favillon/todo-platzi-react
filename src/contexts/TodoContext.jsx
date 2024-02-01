import { useState, createContext } from "react";

import { useLocalStorage } from "../hooks/LocalStorage";

const TodoContext = createContext();
const NAME_APP_LOCAL_STORAGE = 'MI_APP_TODO_V1';

function TodoProvider({children}) {
  const {item: arrayTodo, saveItem: saveTodo, loading, error} = useLocalStorage(NAME_APP_LOCAL_STORAGE);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const totalTodo = arrayTodo.length;
  const totalCompleted = arrayTodo.filter( todo => !!todo.completed ).length;

  const searchedTodo = arrayTodo.filter( todo => {
    const todoText =  todo.text.toLocaleUpperCase();
    const searchText = search.toLocaleUpperCase();
    return  todoText.includes(searchText)
  });
  const createdID = () => {
    const random = Math.random().toString(36).substring(2);
    const dateGenerate = Date.now().toString(36);

    return dateGenerate + random;
  }
  const addTodo = (textTodo) => {
    const newTodos = [...arrayTodo];
    newTodos.push({
      id: createdID(),
      text : textTodo,
      completed: false
    });
    saveTodo(newTodos);
  }

  const functionUpdateArrayTodo = (id) => {
    const newTodos = [...arrayTodo];
    const index = newTodos.findIndex( (todo) => todo.id === id )
    newTodos[index].completed = true;
    saveTodo(newTodos);
  }

  const functionDeleterrayTodo = (id) => {
    const newTodos = [...arrayTodo];
    const index = newTodos.findIndex( (todo) => todo.id === id )
    newTodos.splice(index, 1);
    saveTodo(newTodos);
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      search,
      setSearch,
      totalTodo,
      totalCompleted,
      searchedTodo,
      functionUpdateArrayTodo,
      functionDeleterrayTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      { children }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };