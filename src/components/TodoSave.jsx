import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoSave() {
  const {openModal, setOpenModal} = useContext(TodoContext)
  return (
    <div>
      <button onClick={(event) => {
        setOpenModal(!openModal )
      }}>
        {openModal ? '-' : '+'}
      </button>
    </div>
  );
}
export { TodoSave }