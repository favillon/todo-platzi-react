import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

function TodoSearch() {
  const { search, setSearch } = useContext(TodoContext)
  return(
    <div>
      <label htmlFor="search"></label>
      <input
        placeholder="what up"
        name="search"
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  )
}
export { TodoSearch }