function TodoItems({text, completed, onCompletedTodo, onDeleteTodo}) {
    return (
      <li>
        <span onClick={onCompletedTodo}>{completed ? '/' : '-'}</span>
        <span>{ text }</span>
        <span onClick={onDeleteTodo}>X</span>
      </li>
    );
  }
export { TodoItems }