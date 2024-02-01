function TodoList(props) {
    const {children} = props;
    return (
    <ul>
        { children }
    </ul>
    )
}

export {TodoList}