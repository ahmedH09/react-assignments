function ToDoCount(props) {
    return (
        <div>
            <h4>Number of tasks: {props.todoList.length}</h4>
        </div>
    );
}

export default ToDoCount;