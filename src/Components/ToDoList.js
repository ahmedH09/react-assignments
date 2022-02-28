function ToDoList(props) {

    console.log(props)

    return (
        <div className="">
            <h4>To Do List:</h4>
            {props.todoList.length === 0 && 
            <div>
                <hr />
                <h6 className="text-start">No Tasks Yet</h6>
                <hr></hr>
            </div>} 
            {props.todoList.length !== 0 &&
            <div className="table-responsive">
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                            <th scope="col" className="w-25">S. No.</th>
                            <th scope="col">To Do Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.todoList.map(item => <tr key={props.todoList.indexOf(item)}>
                                <th scope="row">{props.todoList.indexOf(item) + 1}</th>
                                <td>{item}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                </div>}
        </div>
    );
}

export default ToDoList;