import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const {openModal, setOpenModal, addTodo } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('');
  const [errorInput, setErrorInput] = useState(false);

  const sendFormTod = (event) => {
    event.preventDefault();
    if (newTodoValue !== '') {
      setErrorInput(false);
      setOpenModal(false)
      addTodo(newTodoValue);
      setNewTodoValue('')
    }
    else {
      setErrorInput(true);
    }
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <div>
      <form onSubmit={sendFormTod}>
        <label htmlFor="inputTodo">Ingresa tu TODO</label>
        <textarea name="inputTodo" id="" cols="30" rows="10" value={newTodoValue}  onChange={onChange}></textarea>
        <button onClick={()=>{ setOpenModal(!openModal) }} >Cancelar</button>
        <button type="submit">Agregar</button>
      </form>
      { errorInput && <p>Campo Vacio</p>}
    </div>
  )
}

export { TodoForm };
